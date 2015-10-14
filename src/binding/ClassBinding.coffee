###
@author  Oleg Mazko <o.mazko@mail.ru>
@license New BSD License <http://creativecommons.org/licenses/BSD/>
###

estypes      = require 'ast-types'
ScopeVisitor = require './ScopeVisitor'
BindingScope = require './BindingScope'
Map          = require '../collections/Map'


class BindingResolverVisitor extends ScopeVisitor

  builders = estypes.builders

  constructor: (@_joinMap) ->

  #TODO: remove double revisit logic

  visitTypeDeclaration: (node, args...) ->
    su = super node, args...
    [raw_inits, overload, class_id] = []
    su (id, decls, su, inits, members) =>
      raw_inits = members.fields.get_raw_inits()
      overload = members.methods.overload
      class_id = members.scope_id
      # TODO id is class_id
      for init in raw_inits 
        @visit init, members, args...
      [id, decls, su, []]
    [raw_inits, overload, class_id]

  visitQualifiedName: (node, members, locals, resolve, args...) ->
    su = super node, members, locals, no, args...
    (lazy) =>
      su (object, property) =>
        resolve  = node.qualifier.node is 'SimpleName'
        if resolve
          if object.type is 'Identifier' and object.name is members?.scope_id.name
            property = @visit node.name, members, locals, yes, args...
          else
            object   = @visit node.qualifier, members, locals, yes, args...
        lazy object, property

  visitSimpleName: (node, members, locals, resolve=yes, args...) ->
    in_locals = -> locals?.contains node.identifier
    in_fields = -> members?.fields.contains node.identifier
    if resolve
      if in_locals()
        @_joinMap.put node, BindingScope.new_local locals.get_type node.identifier
      else if in_fields()
        pars = do (nm=node.identifier, fs=members.fields) -> [fs.get_type(nm), fs.is_static(nm)]
        @_joinMap.put node, BindingScope.new_field pars...

    super node, members, locals, resolve, args...

  visitMethodDeclaration: (node, members, locals, resolve, args...) ->
    su = super node, members, locals, no, args...
    (lazy) =>
      su (id, params, body, locals) =>
        body = @visit node.body, members, locals, resolve, args... if resolve isnt no
        lazy id, params, body, locals

  visitFieldDeclaration: (node, args...) ->
    @visit node.fragments, args...
    super node, args...

  visitMethodInvocation: (node, members, locals, resolve, args...) ->
    su = super node, members, locals, no, args...
    (lazy) =>
      su (id, params, expr) =>
        params  = @visit node.arguments, members, locals, resolve, args...
        expr    = @visit node.expression, members, locals, resolve, args...
        do (methods=(nm) -> members.methods[nm] id.name, params) =>
          valid_expr = not expr or expr.type is 'ThisExpression'
          valid_expr or= expr.type is 'Identifier' and expr.name is members.scope_id.name
          if valid_expr and methods 'contains'
            pars = [methods('get_type'), methods('is_static')]
            @_joinMap.put node.name, BindingScope.new_method pars...
        lazy id, params, expr

  visitFieldAccess: (node, members, locals, resolve, args...) ->
    su = super node, members, locals, no, args...
    (lazy) =>
      su (id, expr) =>
        if expr.type is 'ThisExpression'
          id = @visit node.name, members, locals, yes, args...
        expr = @visit node.expression, members, locals, resolve, args...
        lazy id, expr

  visitVariableDeclarationFragment: (node, members, locals, resolve, args...) ->
    su = super node, members, locals, no, args...
    (lazy) =>
      su (id, init) =>
        init = @visit node.initializer, members, locals, yes, args...
        lazy id, init

  visitVariableDeclarationExpression: (node, members, locals, resolve, args...) ->
    super node, members, locals, no, args...

  visitSingleVariableDeclaration: (node, members, locals, resolve, args...) ->
    super node, members, locals, no, args...

  visitVariableDeclarationStatement: (node, members, locals, resolve, args...) ->
    super node, members, locals, no, args...

  visitSimpleType: (node, members, locals, resolve, args...) ->
    super node, members, locals, no, args...

  # boost: nothing to bind here
  visitNumberLiteral: (node) ->
    builders.literal NaN

  visitStringLiteral: (node) ->
    builders.literal NaN


class ClassBinding

  constructor: (clsnd) ->
    if clsnd.node isnt 'TypeDeclaration'
      throw 'TypeDeclaration node expected'

    _joinMap = new Map

    _visitor = new BindingResolverVisitor _joinMap
    # TODO: @oveload_id instead ugly name, params func
    [@ctor_raw_field_inits, @overload, @class_id] = _visitor.visit clsnd

    _bindMap = new Map

    @resolve_id = (idnd) ->
      foreign = _bindMap.get idnd
      _joinMap.get foreign

    @bind = ({id, foreign}) ->
      curr = _bindMap.get id
      throw "ASSERT: es one to one expected #{dump id}, #{dump curr} => #{dump foreign}" if curr
      _bindMap.each (key, value) -> 
        if foreign is value
          dump = ScopeVisitor.dump
          throw "ASSERT: foreign one to one expected #{dump key}, #{dump value}"
      _bindMap.put id, foreign


module.exports = ClassBinding