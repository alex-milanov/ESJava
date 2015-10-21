// Generated by CoffeeScript 1.10.0

/*
@author  Oleg Mazko <o.mazko@mail.ru>
@license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

(function() {
  var ASTVisitor, GenericVisitor, MicroVisitor, builders, estypes,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  estypes = require('ast-types');

  ASTVisitor = require('./ASTVisitor');

  builders = estypes.builders;

  MicroVisitor = (function(superClass) {
    extend(MicroVisitor, superClass);

    function MicroVisitor() {
      return MicroVisitor.__super__.constructor.apply(this, arguments);
    }

    MicroVisitor.make_def_field_init = function(node) {
      var ref;
      if (node.node !== 'FieldDeclaration') {
        throw "ASSERT: FieldDeclaration expected instead " + node.node;
      }
      switch ((ref = node.type) != null ? ref.primitiveTypeCode : void 0) {
        case 'long':
        case 'short':
        case 'byte':
        case 'int':
          return {
            node: 'NumberLiteral',
            'token': '0'
          };
        case 'float':
        case 'double':
          return {
            node: 'NumberLiteral',
            'token': '0.0'
          };
        case 'boolean':
          return {
            node: 'BooleanLiteral',
            'booleanValue': false
          };
        case 'char':
          return {
            node: 'CharacterLiteral',
            'escapedValue': '\'\\u0000\''
          };
        default:
          return {
            node: 'NullLiteral'
          };
      }
    };

    MicroVisitor.has_modifier = function() {
      var args, intersected, mod, mods, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      mods = (function() {
        var i, len, ref, results;
        ref = node.modifiers;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          mod = ref[i];
          if (mod.keyword) {
            results.push(mod.keyword);
          }
        }
        return results;
      })();
      intersected = MicroVisitor.intersection(args, mods);
      return args.length && intersected.length === args.length;
    };

    MicroVisitor.prototype.visitSimpleType = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return this.visit.apply(this, [node.name].concat(slice.call(args)));
    };

    MicroVisitor.prototype.visitSimpleName = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return builders.identifier(node.identifier);
    };

    MicroVisitor.prototype.visitPrimitiveType = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return builders.identifier(node.primitiveTypeCode);
    };

    MicroVisitor.prototype.visitArrayType = function() {
      var args, node, type;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      type = this.visit.apply(this, [node.componentType].concat(slice.call(args)));
      return builders.identifier("Array:" + type.name);
    };

    MicroVisitor.prototype.visitQualifiedName = function() {
      var args, node, object, property;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      object = this.visit.apply(this, [node.qualifier].concat(slice.call(args)));
      property = this.visit.apply(this, [node.name].concat(slice.call(args)));
      return function(lazy) {
        var ref;
        ref = lazy(object, property), object = ref[0], property = ref[1];
        return builders.memberExpression(object, property, false);
      };
    };

    return MicroVisitor;

  })(ASTVisitor);

  GenericVisitor = (function(superClass) {
    var conv_operator, make_binary_or_logical, make_ctor, make_let, make_method, make_unary_or_update;

    extend(GenericVisitor, superClass);

    function GenericVisitor() {
      return GenericVisitor.__super__.constructor.apply(this, arguments);
    }

    make_unary_or_update = function() {
      var args, operator;
      operator = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (operator === '++' || operator === '--') {
        return builders.updateExpression.apply(builders, [operator].concat(slice.call(args)));
      } else {
        return builders.unaryExpression.apply(builders, [operator].concat(slice.call(args)));
      }
    };

    make_binary_or_logical = function() {
      var args, operator;
      operator = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (operator === '||' || operator === '&&') {
        return builders.logicalExpression.apply(builders, [operator].concat(slice.call(args)));
      } else {
        return builders.binaryExpression.apply(builders, [operator].concat(slice.call(args)));
      }
    };

    conv_operator = function(operator) {
      switch (operator) {
        case '==':
          return '===';
        case '!=':
          return '!==';
        default:
          return operator;
      }
    };

    make_method = function(id, params, body, is_static, kind) {
      var fn;
      if (is_static == null) {
        is_static = false;
      }
      if (kind == null) {
        kind = 'method';
      }
      fn = builders.functionDeclaration(id, params, body);
      return builders.methodDefinition(kind, id, fn, is_static);
    };

    make_ctor = function(params, body) {
      var id;
      id = builders.identifier('constructor');
      return make_method(id, params, body, false, 'constructor');
    };

    make_let = function(declarations) {
      return builders.variableDeclaration('let', declarations);
    };

    GenericVisitor.prototype.visitCompilationUnit = function() {
      var args, body, imports, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      imports = this.visit.apply(this, [node.imports].concat(slice.call(args)));
      body = this.visit.apply(this, [node.types].concat(slice.call(args)));
      return function(lazy) {
        var statements;
        statements = lazy(slice.call(imports).concat(slice.call(body)))[0];
        return builders.program(statements);
      };
    };

    GenericVisitor.prototype.visitImportDeclaration = function() {
      var args, items, node, path, qualified, recurse;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      qualified = this.visit.apply(this, [node.name].concat(slice.call(args)));
      items = (recurse = function(node, res) {
        res.unshift(node.name || node.property.name);
        if (node.object) {
          return recurse(node.object, res);
        } else {
          return res;
        }
      })(qualified, []);
      if (node.onDemand) {
        items.push('*');
      }
      path = builders.literal(items.join('.'));
      return builders.importDeclaration([], path);
    };

    GenericVisitor.prototype.visitNumberLiteral = function(node) {
      return builders.literal(parseInt(node.token));
    };

    GenericVisitor.prototype.visitPrefixExpression = function() {
      var args, node, operand;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      operand = this.visit.apply(this, [node.operand].concat(slice.call(args)));
      return make_unary_or_update(node.operator, operand, true);
    };

    GenericVisitor.prototype.visitArrayInitializer = function() {
      var args, elements, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      elements = this.visit.apply(this, [node.expressions].concat(slice.call(args)));
      return builders.arrayExpression(elements);
    };

    GenericVisitor.prototype.visitInfixExpression = function() {
      var args, left, node, operator, right;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      left = this.visit.apply(this, [node.leftOperand].concat(slice.call(args)));
      right = this.visit.apply(this, [node.rightOperand].concat(slice.call(args)));
      operator = conv_operator(node.operator);
      return make_binary_or_logical(operator, left, right);
    };

    GenericVisitor.prototype.visitStringLiteral = function(node) {
      return builders.literal(eval(node.escapedValue));
    };

    GenericVisitor.prototype.visitBlock = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return builders.blockStatement(this.visit.apply(this, [node.statements].concat(slice.call(args))));
    };

    GenericVisitor.prototype.visitVariableDeclarationStatement = function() {
      var args, declarations, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      declarations = this.visit.apply(this, [node.fragments].concat(slice.call(args)));
      return make_let(declarations);
    };

    GenericVisitor.prototype.visitArrayCreation = function() {
      var args, init, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      init = this.visit.apply(this, [node.initializer].concat(slice.call(args)));
      return init || (function(_this) {
        return function() {
          var array, dims;
          dims = _this.visit.apply(_this, [node.dimensions].concat(slice.call(args)));
          if (dims.length > 0) {
            dims = [
              dims.reduce(function(left, right) {
                return builders.binaryExpression('*', left, right);
              })
            ];
          }
          array = builders.identifier('Array');
          return builders.newExpression(array, dims);
        };
      })(this)();
    };

    GenericVisitor.prototype.visitExpressionStatement = function() {
      var args, expr, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      expr = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      return builders.expressionStatement(expr);
    };

    GenericVisitor.prototype.visitAssignment = function() {
      var args, left, node, right;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      left = this.visit.apply(this, [node.leftHandSide].concat(slice.call(args)));
      right = this.visit.apply(this, [node.rightHandSide].concat(slice.call(args)));
      return builders.assignmentExpression(node.operator, left, right);
    };

    GenericVisitor.prototype.visitReturnStatement = function() {
      var args, expr, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      expr = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      return builders.returnStatement(expr);
    };

    GenericVisitor.prototype.visitSingleVariableDeclaration = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return this.visit.apply(this, [node.name].concat(slice.call(args)));
    };

    GenericVisitor.prototype.visitWhileStatement = function() {
      var args, body, expr, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      expr = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      body = this.visit.apply(this, [node.body].concat(slice.call(args)));
      return builders.whileStatement(expr, body);
    };

    GenericVisitor.prototype.visitPostfixExpression = function() {
      var args, node, operand;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      operand = this.visit.apply(this, [node.operand].concat(slice.call(args)));
      return make_unary_or_update(node.operator, operand, false);
    };

    GenericVisitor.prototype.visitDoStatement = function() {
      var args, body, expr, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      expr = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      body = this.visit.apply(this, [node.body].concat(slice.call(args)));
      return builders.doWhileStatement(body, expr);
    };

    GenericVisitor.prototype.visitArrayAccess = function() {
      var args, node, object, property;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      object = this.visit.apply(this, [node.array].concat(slice.call(args)));
      property = this.visit.apply(this, [node.index].concat(slice.call(args)));
      return builders.memberExpression(object, property, true);
    };

    GenericVisitor.prototype.visitBooleanLiteral = function(node) {
      return builders.literal(node.booleanValue);
    };

    GenericVisitor.prototype.visitThrowStatement = function() {
      var args, argument, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      argument = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      return builders.throwStatement(argument);
    };

    GenericVisitor.prototype.visitClassInstanceCreation = function() {
      var args, callee, node, params;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      params = this.visit.apply(this, [node["arguments"]].concat(slice.call(args)));
      callee = this.visit.apply(this, [node.type].concat(slice.call(args)));
      return builders.newExpression(callee, params);
    };

    GenericVisitor.prototype.visitTypeDeclaration = function() {
      var args, decls, id, interfaces, node, su;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      decls = this.visit.apply(this, [node.bodyDeclarations].concat(slice.call(args)));
      id = this.visit.apply(this, [node.name].concat(slice.call(args)));
      su = this.visit.apply(this, [node.superclassType].concat(slice.call(args)));
      interfaces = this.visit.apply(this, [node.superInterfaceTypes].concat(slice.call(args)));
      if (su) {
        interfaces = [su].concat(slice.call(interfaces));
      }
      su = (function() {
        switch (interfaces.length) {
          case 0:
            return null;
          case 1:
            return interfaces[0];
          default:
            throw 'NotImpl: Multiple Inheritance';
        }
      })();
      return function(lazy) {
        var block, body, decl, inits, is_ctor, ref, statement, sucall;
        ref = lazy(id, decls, su, []), id = ref[0], decls = ref[1], su = ref[2], inits = ref[3];
        is_ctor = function(decl) {
          return decl.kind === 'constructor';
        };
        if (inits.length) {
          if (!decls.some(is_ctor)) {
            if (su) {
              sucall = builders.callExpression(builders["super"](), []);
              statement = builders.expressionStatement(sucall);
              decls.push(make_ctor([], builders.blockStatement([statement].concat(slice.call(inits)))));
            } else {
              decls.push(make_ctor([], builders.blockStatement(inits)));
            }
          } else {
            decls = (function() {
              var i, len, results;
              results = [];
              for (i = 0, len = decls.length; i < len; i++) {
                decl = decls[i];
                if (is_ctor(decl)) {
                  block = builders.blockStatement(slice.call(inits).concat(slice.call(decl.value.body.body)));
                  results.push(make_ctor(decl.value.params, block));
                } else {
                  results.push(decl);
                }
              }
              return results;
            })();
          }
        }
        body = builders.classBody(decls);
        return builders.classDeclaration(id, body, su);
      };
    };

    GenericVisitor.prototype.visitFieldAccess = function() {
      var args, expr, id, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      id = this.visit.apply(this, [node.name].concat(slice.call(args)));
      expr = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      return function(lazy) {
        var ref;
        ref = lazy(id, expr), id = ref[0], expr = ref[1];
        return builders.memberExpression(expr, id, false);
      };
    };

    GenericVisitor.prototype.visitThisExpression = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (node.qualifier) {
        throw 'NotImpl: out class access';
      }
      return builders.thisExpression();
    };

    GenericVisitor.prototype.visitIfStatement = function() {
      var alternate, args, consequent, expr, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      expr = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      alternate = this.visit.apply(this, [node.elseStatement].concat(slice.call(args)));
      consequent = this.visit.apply(this, [node.thenStatement].concat(slice.call(args)));
      return builders.ifStatement(expr, consequent, alternate);
    };

    GenericVisitor.prototype.visitCastExpression = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return this.visit.apply(this, [node.expression].concat(slice.call(args)));
    };

    GenericVisitor.prototype.visitNullLiteral = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return builders.literal(null);
    };

    GenericVisitor.prototype.visitMethodDeclaration = function() {
      var args, body, id, node, params;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      id = this.visit.apply(this, [node.name].concat(slice.call(args)));
      params = this.visit.apply(this, [node.parameters].concat(slice.call(args)));
      body = this.visit.apply(this, [node.body].concat(slice.call(args)));
      return (function(_this) {
        return function(lazy) {
          var is_static, ref;
          ref = lazy(id, params, body), id = ref[0], params = ref[1], body = ref[2];
          if (node.constructor) {
            return make_ctor(params, body);
          } else {
            is_static = _this.constructor.has_modifier(node, 'static');
            if (body == null) {
              body = builders.blockStatement([builders.throwStatement(builders.literal("NotImpl < " + id.name + " >"))]);
            }
            return make_method(id, params, body, is_static);
          }
        };
      })(this);
    };

    GenericVisitor.prototype.visitFieldDeclaration = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return this.constructor.IGNORE_ME;
    };

    GenericVisitor.prototype.visitVariableDeclarationFragment = function() {
      var args, id, init, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      id = this.visit.apply(this, [node.name].concat(slice.call(args)));
      init = this.visit.apply(this, [node.initializer].concat(slice.call(args)));
      return function(lazy) {
        var ref;
        ref = lazy(id, init), id = ref[0], init = ref[1];
        return builders.variableDeclarator(id, init);
      };
    };

    GenericVisitor.prototype.visitMethodInvocation = function() {
      var args, expr, id, node, params;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      id = this.visit.apply(this, [node.name].concat(slice.call(args)));
      params = this.visit.apply(this, [node["arguments"]].concat(slice.call(args)));
      expr = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      return function(lazy) {
        var ref;
        ref = lazy(id, params, expr), id = ref[0], params = ref[1], expr = ref[2];
        if (expr) {
          id = builders.memberExpression(expr, id, false);
        }
        return builders.callExpression(id, params);
      };
    };

    GenericVisitor.prototype.visitCatchClause = function() {
      var args, body, id, node, type;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      id = this.visit.apply(this, [node.exception].concat(slice.call(args)));
      type = this.visit.apply(this, [node.exception.type].concat(slice.call(args)));
      body = this.visit.apply(this, [node.body].concat(slice.call(args)));
      return function(lazy) {
        var ref;
        ref = lazy(id, type, body), id = ref[0], type = ref[1], body = ref[2];
        return builders.catchClause(id, null, body);
      };
    };

    GenericVisitor.prototype.visitTryStatement = function() {
      var abody, aid, args, atype, body, cat, cats, cond, expr, final, gid, i, init, len, node, ref, ref1, ref2, resources, v;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      ref = [], gid = ref[0], cond = ref[1];
      cats = (function() {
        var i, len, ref1, results;
        ref1 = node.catchClauses;
        results = [];
        for (i = 0, len = ref1.length; i < len; i++) {
          v = ref1[i];
          results.push(this.visitCatchClause.apply(this, [v].concat(slice.call(args))));
        }
        return results;
      }).call(this);
      ref1 = cats.reverse();
      for (i = 0, len = ref1.length; i < len; i++) {
        cat = ref1[i];
        ref2 = [], aid = ref2[0], atype = ref2[1], abody = ref2[2];
        cat(function() {
          var cargs;
          cargs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return aid = cargs[0], atype = cargs[1], abody = cargs[2], cargs;
        });
        if (gid == null) {
          gid = aid;
        }
        if (gid.name !== aid.name) {
          init = make_let([builders.variableDeclarator(aid, gid)]);
          abody.body.unshift(init);
        }
        expr = builders.binaryExpression('instanceof', gid, atype);
        if (cond == null) {
          cond = builders.throwStatement(gid);
        }
        cond = builders.ifStatement(expr, abody, cond);
      }
      if (cond) {
        cond = builders.blockStatement([cond]);
        cond = builders.catchClause(gid, null, cond);
      }
      final = this.visit.apply(this, [node["finally"]].concat(slice.call(args)));
      body = this.visit.apply(this, [node.body].concat(slice.call(args)));
      resources = this.visit.apply(this, [node.resources].concat(slice.call(args)));
      if (resources != null ? resources.length : void 0) {
        throw 'NotImpl: try with resources';
      }
      return builders.tryStatement(body, cond || null, final);
    };

    GenericVisitor.prototype.visitParenthesizedExpression = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return this.visit.apply(this, [node.expression].concat(slice.call(args)));
    };

    GenericVisitor.prototype.visitLabeledStatement = function() {
      var args, body, label, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      body = this.visit.apply(this, [node.body].concat(slice.call(args)));
      label = this.visit.apply(this, [node.label].concat(slice.call(args)));
      return builders.labeledStatement(label, body);
    };

    GenericVisitor.prototype.visitBreakStatement = function() {
      var args, label, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      label = this.visit.apply(this, [node.label].concat(slice.call(args)));
      return builders.breakStatement(label);
    };

    GenericVisitor.prototype.visitContinueStatement = function() {
      var args, label, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      label = this.visit.apply(this, [node.label].concat(slice.call(args)));
      return builders.continueStatement(label);
    };

    GenericVisitor.prototype.visitSwitchStatement = function() {
      var args, cases, discriminant, i, last, len, node, ref, statement;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      discriminant = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      cases = [];
      ref = this.visit.apply(this, [node.statements].concat(slice.call(args)));
      for (i = 0, len = ref.length; i < len; i++) {
        statement = ref[i];
        if (statement.type === 'SwitchCase') {
          cases.push(statement);
        } else {
          last = cases[cases.length - 1];
          last.consequent.push(statement);
        }
      }
      return builders.switchStatement(discriminant, cases);
    };

    GenericVisitor.prototype.visitSwitchCase = function() {
      var args, node, test;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      test = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      return builders.switchCase(test, []);
    };

    GenericVisitor.prototype.visitConditionalExpression = function() {
      var alternate, args, consequent, node, test;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      test = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      consequent = this.visit.apply(this, [node.thenExpression].concat(slice.call(args)));
      alternate = this.visit.apply(this, [node.elseExpression].concat(slice.call(args)));
      return builders.conditionalExpression(test, consequent, alternate);
    };

    GenericVisitor.prototype.visitSuperMethodInvocation = function() {
      var args, expr, id, node, params;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      id = this.visit.apply(this, [node.name].concat(slice.call(args)));
      params = this.visit.apply(this, [node["arguments"]].concat(slice.call(args)));
      expr = builders["super"]();
      return function(lazy) {
        var ref;
        ref = lazy(id, params, expr), id = ref[0], params = ref[1], expr = ref[2];
        id = builders.memberExpression(expr, id, false);
        return builders.callExpression(id, params);
      };
    };

    GenericVisitor.prototype.visitSuperFieldAccess = function() {
      var args, expr, id, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      id = this.visit.apply(this, [node.name].concat(slice.call(args)));
      expr = builders["super"]();
      return function(lazy) {
        var ref;
        ref = lazy(id, expr), id = ref[0], expr = ref[1];
        return builders.memberExpression(expr, id, false);
      };
    };

    GenericVisitor.prototype.visitSuperConstructorInvocation = function() {
      var args, expr, node, params;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      params = this.visit.apply(this, [node["arguments"]].concat(slice.call(args)));
      expr = builders["super"]();
      return function(lazy) {
        var call, ref;
        ref = lazy(params, expr), params = ref[0], expr = ref[1];
        call = builders.callExpression(expr, params);
        return builders.expressionStatement(call);
      };
    };

    GenericVisitor.prototype.visitInstanceofExpression = function() {
      var args, left, node, right;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      left = this.visit.apply(this, [node.leftOperand].concat(slice.call(args)));
      right = this.visit.apply(this, [node.rightOperand].concat(slice.call(args)));
      return builders.binaryExpression('instanceof', left, right);
    };

    GenericVisitor.prototype.visitEmptyStatement = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return builders.emptyStatement();
    };

    GenericVisitor.prototype.visitForStatement = function() {
      var args, body, init, node, test, update, wrap_seq;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      wrap_seq = function(items) {
        switch (items.length) {
          case 1:
            return items[0];
          case 0:
            return null;
          default:
            return builders.sequenceExpression(items);
        }
      };
      init = wrap_seq(this.visit.apply(this, [node.initializers].concat(slice.call(args))));
      test = this.visit.apply(this, [node.expression].concat(slice.call(args)));
      update = wrap_seq(this.visit.apply(this, [node.updaters].concat(slice.call(args))));
      body = this.visit.apply(this, [node.body].concat(slice.call(args)));
      return builders.forStatement(init, test, update, body);
    };

    GenericVisitor.prototype.visitVariableDeclarationExpression = function() {
      var args, declarations, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      declarations = this.visit.apply(this, [node.fragments].concat(slice.call(args)));
      return make_let(declarations);
    };

    GenericVisitor.prototype.visitCharacterLiteral = function() {
      var args, node;
      node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return builders.literal(eval(node.escapedValue));
    };

    return GenericVisitor;

  })(MicroVisitor);

  module.exports = {
    MicroVisitor: MicroVisitor,
    GenericVisitor: GenericVisitor
  };

}).call(this);