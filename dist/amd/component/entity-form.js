define(['exports', '../entity-schema', 'aurelia-framework', 'aurelia-view-manager'], function (exports, _entitySchema, _aureliaFramework, _aureliaViewManager) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var EntityForm = (function () {
    var _instanceInitializers = {};

    function EntityForm() {
      _classCallCheck(this, _EntityForm);

      _defineDecoratedPropertyDescriptor(this, 'entity', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);
    }

    _createDecoratedClass(EntityForm, [{
      key: 'bind',
      value: function bind() {
        this.schema = (0, _entitySchema.entitySchema)(this.entity);
        this.model = this.entity;
      }
    }, {
      key: 'entity',
      decorators: [(0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.oneTime })],
      initializer: null,
      enumerable: true
    }, {
      key: 'model',
      decorators: [(0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay })],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    var _EntityForm = EntityForm;
    EntityForm = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'entity-form')(EntityForm) || EntityForm;
    EntityForm = (0, _aureliaFramework.customElement)('entity-form')(EntityForm) || EntityForm;
    return EntityForm;
  })();

  exports.EntityForm = EntityForm;
});