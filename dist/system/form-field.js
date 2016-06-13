System.register(['./config', 'aurelia-framework', 'aurelia-view-manager'], function (_export) {
  'use strict';

  var Config, bindingMode, bindable, computedFrom, inject, ViewManager, FormFieldCustomElement;

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
    }, function (_aureliaViewManager) {
      ViewManager = _aureliaViewManager.ViewManager;
    }],
    execute: function () {
      FormFieldCustomElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(FormFieldCustomElement, [{
          key: 'attribute',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable({ defaultBindingMode: bindingMode.twoWay })],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function FormFieldCustomElement(config, element, viewManager) {
          _classCallCheck(this, _FormFieldCustomElement);

          _defineDecoratedPropertyDescriptor(this, 'attribute', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          this.config = config;
          this.element = element;
          this.viewManager = viewManager;
        }

        _createDecoratedClass(FormFieldCustomElement, [{
          key: 'attached',
          value: function attached() {
            var attributeElements = $(this.element).find('[attrs]');
            if (attributeElements) {
              attributeElements.attr(this.attribute.attributes || {});
            }
          }
        }, {
          key: 'label',
          decorators: [computedFrom('attribute')],
          get: function get() {
            return this.attribute.label || this.attribute.key;
          }
        }, {
          key: 'view',
          decorators: [computedFrom('attribute')],
          get: function get() {
            var type = this.type;
            this.attribute.type = type;
            return this.viewManager.resolve('aurelia-form', type);
          }
        }, {
          key: 'hasViewModel',
          decorators: [computedFrom('view')],
          get: function get() {
            return !this.view.endsWith('.html');
          }
        }, {
          key: 'type',
          decorators: [computedFrom('attribute')],
          get: function get() {
            var type = this.attribute.type;
            var alias = this.config.get('aliases', type);
            var previous = [];
            while (alias && previous.indexOf(alias) === -1) {
              type = alias;
              previous.push(type);
              alias = this.config.get('aliases', type);
            }

            return type;
          }
        }], null, _instanceInitializers);

        var _FormFieldCustomElement = FormFieldCustomElement;
        FormFieldCustomElement = inject(Config, Element, ViewManager)(FormFieldCustomElement) || FormFieldCustomElement;
        return FormFieldCustomElement;
      })();

      _export('FormFieldCustomElement', FormFieldCustomElement);
    }
  };
});