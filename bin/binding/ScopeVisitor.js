// Generated by CoffeeScript 1.10.0

/*
@author  Oleg Mazko <o.mazko@mail.ru>
@license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

(function() {
  var Dict, GenericVisitor, MemberScope, MicroVisitor, ScopeVisitor, VarScope, builders, estypes, ref,
    slice = [].slice,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  estypes = require('ast-types');

  Dict = require('../collections/Dict');

  ref = require('../GenericVisitor'), GenericVisitor = ref.GenericVisitor, MicroVisitor = ref.MicroVisitor;

  builders = estypes.builders;

  VarScope = (function() {
    var VarModel;

    VarModel = (function() {
      function VarModel(type1, _static, _private, _super) {
        this.type = type1;
        this["static"] = _static != null ? _static : false;
        this["private"] = _private != null ? _private : false;
        this["super"] = _super != null ? _super : false;
      }

      return VarModel;

    })();

    function VarScope(src, arg) {
      var _unique_var_validator, _vars;
      if (src == null) {
        src = null;
      }
      _vars = (arg != null ? arg : {
        _vars: new Dict
      })._vars;
      this.contains = _vars.contains;
      this.get_type = function(name, def) {
        var ref1;
        if (def == null) {
          def = null;
        }
        return ((ref1 = _vars.get_value(name)) != null ? ref1.type : void 0) || def;
      };
      this.is_static = function(name) {
        var ref1;
        return !!((ref1 = _vars.get_value(name)) != null ? ref1["static"] : void 0);
      };
      this.clone = function() {
        return new this.constructor(null, {
          _vars: _vars.clone()
        });
      };
      this.clone_super = function() {
        var vars;
        vars = new Dict;
        _vars.each(function(k, v) {
          var model;
          if (!v["private"]) {
            model = new VarModel(v.type, v["static"], false, true);
            return vars.set_value(k, model);
          }
        });
        return new this.constructor(null, {
          _vars: vars
        });
      };
      _unique_var_validator = [];
      this.collect_from = function(src) {
        var VarCollector, safe_vars_set;
        safe_vars_set = function() {
          var args, nm;
          nm = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          if (indexOf.call(_unique_var_validator, nm) >= 0) {
            throw "ASSERT: Duplicate Variable < " + nm + " >";
          }
          _unique_var_validator.push(nm);
          return _vars.set_value.apply(_vars, [nm].concat(slice.call(args)));
        };
        VarCollector = (function(superClass) {
          extend(VarCollector, superClass);

          function VarCollector() {
            return VarCollector.__super__.constructor.apply(this, arguments);
          }

          VarCollector.prototype.visitSingleVariableDeclaration = function() {
            var args, decl, model, node, type;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            decl = this.visit.apply(this, [node.name].concat(slice.call(args)));
            type = this.visit.apply(this, [node.type].concat(slice.call(args)));
            model = new VarModel(type);
            return safe_vars_set(decl.name, model);
          };

          VarCollector.prototype.visitVariableDeclarationStatement = function() {
            var args, decl, decls, has_static, i, len, model, node, type;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            decls = this.visit.apply(this, [node.fragments].concat(slice.call(args)));
            type = this.visit.apply(this, [node.type].concat(slice.call(args)));
            has_static = this.constructor.has_modifier(node, 'static');
            model = new VarModel(type, has_static);
            for (i = 0, len = decls.length; i < len; i++) {
              decl = decls[i];
              safe_vars_set(decl.id.name, model);
            }
            return model;
          };

          VarCollector.prototype.visitFieldDeclaration = function() {
            var args, model, node;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            model = this.visitVariableDeclarationStatement.apply(this, [node].concat(slice.call(args)));
            return model["private"] = this.constructor.has_modifier(node, 'private');
          };

          VarCollector.prototype.visitCatchClause = function() {
            var args, node;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            return this.visit.apply(this, [node.exception].concat(slice.call(args)));
          };

          VarCollector.prototype.visitVariableDeclarationFragment = function() {
            var args, id, node;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            id = this.visit.apply(this, [node.name].concat(slice.call(args)));
            return builders.variableDeclarator(id, null);
          };

          VarCollector.prototype.visitForStatement = function() {
            var args, node;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            return this.visit.apply(this, [node.initializers].concat(slice.call(args)));
          };

          VarCollector.prototype.visitVariableDeclarationExpression = function() {
            var args, node;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            return this.visitVariableDeclarationStatement.apply(this, [node].concat(slice.call(args)));
          };

          VarCollector.prototype.visitAssignment = function() {
            var args, node;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            return this.constructor.IGNORE_ME;
          };

          VarCollector.prototype.visitTypeDeclaration = function() {
            var args, node;
            node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            throw 'NotImpl: Nested | Inner classes ?';
          };

          return VarCollector;

        })(MicroVisitor);
        return new VarCollector().visit(src);
      };
      if (src) {
        this.collect_from(src);
      }
    }

    return VarScope;

  })();

  MemberScope = (function() {
    var MethodModel;

    MethodModel = (function() {
      function MethodModel(type1, overload1, _static, _private, _super, ctor) {
        this.type = type1;
        this.overload = overload1;
        this["static"] = _static != null ? _static : false;
        this["private"] = _private != null ? _private : false;
        this["super"] = _super != null ? _super : false;
        this.ctor = ctor != null ? ctor : false;
      }

      return MethodModel;

    })();

    function MemberScope(cls_node, arg) {
      var MembersCollector, _fields, _methods, ref1;
      ref1 = arg != null ? arg : {
        _fields: new VarScope,
        _methods: new Dict
      }, _fields = ref1._fields, _methods = ref1._methods;
      this.clone_super = function(cls_node) {
        var methods;
        methods = new Dict;
        _methods.each(function(k, v) {
          var m, model;
          model = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = v.length; i < len; i++) {
              m = v[i];
              if (!m["private"]) {
                results.push(new MethodModel(m.type, m.overload, m["static"], false, true, m.ctor));
              }
            }
            return results;
          })();
          if (model.length) {
            return methods.set_value(k, model);
          }
        });
        return new this.constructor(cls_node, {
          _fields: _fields.clone_super(),
          _methods: methods
        });
      };
      MembersCollector = (function(superClass) {
        extend(MembersCollector, superClass);

        function MembersCollector() {
          return MembersCollector.__super__.constructor.apply(this, arguments);
        }

        MembersCollector.prototype.visitFieldDeclaration = function() {
          var args, node;
          node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          return _fields.collect_from(node);
        };

        MembersCollector.prototype.visitMethodDeclaration = function() {
          var args, has_private, has_static, i, id, len, model, models, node, overload, retype;
          node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          id = this.visit.apply(this, [node.name].concat(slice.call(args)));
          retype = this.visit.apply(this, [node.returnType2].concat(slice.call(args)));
          models = _methods.get_value(id.name, []);
          overload = node.parameters.length;
          for (i = 0, len = models.length; i < len; i++) {
            model = models[i];
            if (overload === model.overload && !model["super"]) {
              throw 'NotImpl: Overload by argumens type ' + id.name;
            }
          }
          has_static = this.constructor.has_modifier(node, 'static');
          has_private = this.constructor.has_modifier(node, 'private');
          models.push(new MethodModel(retype, overload, has_static, has_private, false, node.constructor));
          return _methods.set_value(id.name, models);
        };

        MembersCollector.prototype.visitTypeDeclaration = function() {
          var args, node;
          node = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          if (node !== cls_node) {
            throw 'NotImpl: Nested | Inner classes ?';
          }
          this.visit.apply(this, [node.bodyDeclarations].concat(slice.call(args)));
          return this.visit.apply(this, [node.name].concat(slice.call(args)));
        };

        return MembersCollector;

      })(MicroVisitor);
      this.scope_id = new MembersCollector().visit(cls_node);
      this.fields = ['get_type', 'contains', 'is_static'].reduce(function(left, right) {
        return GenericVisitor.set_prop({
          obj: left,
          prop: right,
          value: _fields[right]
        });
      }, {});
      this.methods = {
        contains: (function(_this) {
          return function() {
            var args, ref2;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return null !== (ref2 = _this.methods).get_type.apply(ref2, args);
          };
        })(this),
        get_type: function(name, params) {
          var i, len, model, ref2;
          ref2 = _methods.get_value(name, []);
          for (i = 0, len = ref2.length; i < len; i++) {
            model = ref2[i];
            if (params.length === model.overload) {
              return model.type;
            }
          }
          return null;
        },
        is_static: function(name, params) {
          var i, len, model, ref2;
          ref2 = _methods.get_value(name, []);
          for (i = 0, len = ref2.length; i < len; i++) {
            model = ref2[i];
            if (params.length === model.overload) {
              return !!model["static"];
            }
          }
          return false;
        },
        ls_potential_overloads: function() {
          var ls;
          ls = [];
          _methods.each(function(k, v) {
            var c, o;
            o = (function() {
              var i, len, results;
              results = [];
              for (i = 0, len = v.length; i < len; i++) {
                c = v[i];
                if (!c["super"] && !c["private"] && !c.ctor) {
                  results.push(c);
                }
              }
              return results;
            })();
            if (((function() {
              var i, len, results;
              results = [];
              for (i = 0, len = o.length; i < len; i++) {
                c = o[i];
                if (c["static"]) {
                  results.push(c);
                }
              }
              return results;
            })()).length) {
              ls.push({
                name: k,
                "static": true,
                pattern: '$esjava$'
              });
            }
            if (((function() {
              var i, len, results;
              results = [];
              for (i = 0, len = o.length; i < len; i++) {
                c = o[i];
                if (!c["static"]) {
                  results.push(c);
                }
              }
              return results;
            })()).length) {
              return ls.push({
                name: k,
                "static": false,
                pattern: '$esjava$'
              });
            }
          });
          return ls;
        },
        overload: (function(_this) {
          return function(name, params) {
            var methods;
            if (_fields.contains(name) && (_fields.is_static(name) === _this.methods.is_static(name, params))) {
              throw "NotImpl: Same Field & Method name < " + name + " > agnostic for JS Classes :(";
            }
            methods = _methods.get_value(name);
            if (methods != null ? methods.length : void 0) {
              return name + '$esjava$' + params.length;
            } else {
              return name;
            }
          };
        })(this)
      };
    }

    return MemberScope;

  })();

  ScopeVisitor = (function(superClass) {
    extend(ScopeVisitor, superClass);

    function ScopeVisitor() {
      return ScopeVisitor.__super__.constructor.apply(this, arguments);
    }

    ScopeVisitor.prototype.visitTypeDeclaration = function() {
      var args, members, node, su;
      node = arguments[0], members = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
      members || (members = new MemberScope(node));
      su = ScopeVisitor.__super__.visitTypeDeclaration.apply(this, [node, members].concat(slice.call(args)));
      return function(lazy) {
        return su(function(id, decls, su) {
          return lazy(id, decls, su, members);
        });
      };
    };

    ScopeVisitor.prototype.visitVariableDeclarationStatement = function() {
      var args, locals, members, node;
      node = arguments[0], members = arguments[1], locals = arguments[2], args = 4 <= arguments.length ? slice.call(arguments, 3) : [];
      locals.collect_from(node);
      return ScopeVisitor.__super__.visitVariableDeclarationStatement.apply(this, [node, members, locals].concat(slice.call(args)));
    };

    ScopeVisitor.prototype.visitCatchClause = function() {
      var args, locals, members, node;
      node = arguments[0], members = arguments[1], locals = arguments[2], args = 4 <= arguments.length ? slice.call(arguments, 3) : [];
      locals = locals.clone();
      locals.collect_from(node);
      return ScopeVisitor.__super__.visitCatchClause.apply(this, [node, members, locals].concat(slice.call(args)));
    };

    ScopeVisitor.prototype.visitForStatement = function() {
      var args, locals, members, node;
      node = arguments[0], members = arguments[1], locals = arguments[2], args = 4 <= arguments.length ? slice.call(arguments, 3) : [];
      locals = locals.clone();
      locals.collect_from(node);
      return ScopeVisitor.__super__.visitForStatement.apply(this, [node, members, locals].concat(slice.call(args)));
    };

    ScopeVisitor.prototype.visitMethodDeclaration = function() {
      var args, locals, members, node, su;
      node = arguments[0], members = arguments[1], locals = arguments[2], args = 4 <= arguments.length ? slice.call(arguments, 3) : [];
      locals = new VarScope(node.parameters);
      su = ScopeVisitor.__super__.visitMethodDeclaration.apply(this, [node, members, locals].concat(slice.call(args)));
      return function(lazy) {
        return su(function(id, params, body) {
          return lazy(id, params, body, locals);
        });
      };
    };

    ScopeVisitor.prototype.visitBlock = function() {
      var args, locals, members, node;
      node = arguments[0], members = arguments[1], locals = arguments[2], args = 4 <= arguments.length ? slice.call(arguments, 3) : [];
      return ScopeVisitor.__super__.visitBlock.apply(this, [node, members, locals.clone()].concat(slice.call(args)));
    };

    return ScopeVisitor;

  })(GenericVisitor);

  module.exports = ScopeVisitor;

}).call(this);