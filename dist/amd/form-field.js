define(['exports', './config', './component', 'aurelia-framework'], function (exports, _config, _component, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var FormFieldCustomElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(FormFieldCustomElement, [{
      key: 'attribute',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'value',
      decorators: [(0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay })],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function FormFieldCustomElement(config, element) {
      _classCallCheck(this, _FormFieldCustomElement);

      _defineDecoratedPropertyDescriptor(this, 'attribute', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      this.config = config;
      this.element = element;
    }

    _createDecoratedClass(FormFieldCustomElement, [{
      key: 'attached',
      value: function attached() {
        var attrsElmnt = $(this.element).find('[attrs]');
        if (attrsElmnt) {
          attrsElmnt.attr(this.attribute.attributes || {});
        }
      }
    }, {
      key: 'label',
      decorators: [(0, _aureliaFramework.computedFrom)('attribute')],
      get: function get() {
        return this.attribute.label || this.attribute.key;
      }
    }, {
      key: 'component',
      decorators: [(0, _aureliaFramework.computedFrom)('attribute')],
      get: function get() {
        this.attribute.type = aliasOf(this.config, this.attribute.type);
        return (0, _component.component)(this.config, this.attribute);
      }
    }, {
      key: 'isHtmlComponent',
      decorators: [(0, _aureliaFramework.computedFrom)('component')],
      get: function get() {
        return this.component ? this.component.endsWith('.html') : true;
      }
    }], null, _instanceInitializers);

    var _FormFieldCustomElement = FormFieldCustomElement;
    FormFieldCustomElement = (0, _aureliaFramework.inject)(_config.Config, Element)(FormFieldCustomElement) || FormFieldCustomElement;
    return FormFieldCustomElement;
  })();

  exports.FormFieldCustomElement = FormFieldCustomElement;

  function aliasOf(config, type) {
    if (type === undefined) {
      return 'text';
    }
    return config.aliases[type] !== undefined ? config.aliases[type] : type;
  }
});