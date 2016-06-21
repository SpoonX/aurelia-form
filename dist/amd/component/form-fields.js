define(['exports', 'aurelia-framework', 'aurelia-logging', 'aurelia-view-manager'], function (exports, _aureliaFramework, _aureliaLogging, _aureliaViewManager) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var FormFields = (function () {
    var _instanceInitializers = {};

    function FormFields() {
      _classCallCheck(this, _FormFields);

      _defineDecoratedPropertyDescriptor(this, 'schema', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'messages', _instanceInitializers);
    }

    _createDecoratedClass(FormFields, [{
      key: 'attached',
      value: function attached() {
        if (typeof this.model !== 'object') {
          (0, _aureliaLogging.getLogger)('aurelia-form').warn('model is not an object');
        }
      }
    }, {
      key: 'schema',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'model',
      decorators: [(0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay })],
      initializer: null,
      enumerable: true
    }, {
      key: 'messages',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    var _FormFields = FormFields;
    FormFields = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'form-fields')(FormFields) || FormFields;
    FormFields = (0, _aureliaFramework.customElement)('form-fields')(FormFields) || FormFields;
    return FormFields;
  })();

  exports.FormFields = FormFields;
});