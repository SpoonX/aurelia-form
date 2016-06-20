System.register(['../config', 'aurelia-framework', 'aurelia-view-manager'], function (_export) {
  'use strict';

  var Config, bindingMode, bindable, computedFrom, inject, customElement, resolvedView, ViewManager, FormField;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_aureliaFramework) {
      bindingMode = _aureliaFramework.bindingMode;
      bindable = _aureliaFramework.bindable;
      computedFrom = _aureliaFramework.computedFrom;
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
    }, function (_aureliaViewManager) {
      resolvedView = _aureliaViewManager.resolvedView;
      ViewManager = _aureliaViewManager.ViewManager;
    }],
    execute: function () {
      FormField = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(FormField, [{
          key: 'element',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable({ defaultBindingMode: bindingMode.twoWay })],
          initializer: null,
          enumerable: true
        }, {
          key: 'message',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function FormField(config, viewManager) {
          _classCallCheck(this, _FormField);

          _defineDecoratedPropertyDescriptor(this, 'element', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'message', _instanceInitializers);

          this.config = config;
          this.viewManager = viewManager;
        }

        _createDecoratedClass(FormField, [{
          key: 'label',
          decorators: [computedFrom('element')],
          get: function get() {
            return this.element.label || this.element.key;
          }
        }, {
          key: 'view',
          decorators: [computedFrom('element')],
          get: function get() {
            var type = this.type;
            this.element.type = type;

            return this.viewManager.resolve('spoonx/form', type);
          }
        }, {
          key: 'hasViewModel',
          decorators: [computedFrom('view')],
          get: function get() {
            return !this.view.endsWith('.html');
          }
        }, {
          key: 'type',
          decorators: [computedFrom('element')],
          get: function get() {
            var type = this.element.type;
            var alias = this.config.fetch('aliases', type);
            var previous = [];
            while (alias && !(alias in previous)) {
              type = alias;
              alias = this.config.fetch('aliases', type);

              previous.push(type);
            }

            return type;
          }
        }], null, _instanceInitializers);

        var _FormField = FormField;
        FormField = inject(Config, ViewManager)(FormField) || FormField;
        FormField = resolvedView('spoonx/form', 'form-field')(FormField) || FormField;
        FormField = customElement('form-field')(FormField) || FormField;
        return FormField;
      })();

      _export('FormField', FormField);
    }
  };
});