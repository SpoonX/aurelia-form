System.register(['aurelia-framework', 'aurelia-logging', 'aurelia-view-manager'], function (_export) {
  'use strict';

  var bindable, bindingMode, customElement, getLogger, resolvedView, FormFields;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      customElement = _aureliaFramework.customElement;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_aureliaViewManager) {
      resolvedView = _aureliaViewManager.resolvedView;
    }],
    execute: function () {
      FormFields = (function () {
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
              getLogger('aurelia-form').warn('model is not an object');
            }
          }
        }, {
          key: 'schema',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'model',
          decorators: [bindable({ defaultBindingMode: bindingMode.twoWay })],
          initializer: null,
          enumerable: true
        }, {
          key: 'messages',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _FormFields = FormFields;
        FormFields = resolvedView('spoonx/form', 'form-fields')(FormFields) || FormFields;
        FormFields = customElement('form-fields')(FormFields) || FormFields;
        return FormFields;
      })();

      _export('FormFields', FormFields);
    }
  };
});