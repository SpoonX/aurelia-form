'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _config = require('./config');

var _aureliaFramework = require('aurelia-framework');

var _aureliaI18n = require('aurelia-i18n');

var schemaFormElementCustomElement = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(schemaFormElementCustomElement, [{
    key: 'schema',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'value',
    decorators: [(0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay })],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function schemaFormElementCustomElement(config, i18n, element) {
    _classCallCheck(this, _schemaFormElementCustomElement);

    _defineDecoratedPropertyDescriptor(this, 'schema', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

    this.i18n = i18n;
    this.config = config;
    this.element = element;
  }

  _createDecoratedClass(schemaFormElementCustomElement, [{
    key: 'attached',
    value: function attached() {
      var attrsElmnt = $(this.element).find('[attrs]');
      if (attrsElmnt) {
        attrsElmnt.attr(this.schema.attributes || {});
      }
    }
  }, {
    key: 'valueChanged',
    value: function valueChanged(a, b) {
      return a;
    }
  }, {
    key: 'label',
    decorators: [(0, _aureliaFramework.computedFrom)('schema')],
    get: function get() {
      if (this.config.translate) {
        return this.i18n.tr(this.schema.name);
      }
      return this.schema.name;
    }
  }, {
    key: 'component',
    decorators: [(0, _aureliaFramework.computedFrom)('schema')],
    get: function get() {
      if (!this.schema.type) {
        this.schema.type = 'text';
      }

      return customComponent(this.config, this.schema) || frameworkComponent(this.config, this.schema) || defaultComponent(this.config, this.schema);

      function defaultComponent(config, schema) {
        schema.type = 'text';
        return frameworkComponent(config, schema);
      }

      function customComponent(config, schema) {
        var component = config.components[schema.type];
        return component ? component.replace('{{location}}', config.location) : false;
      }

      function frameworkComponent(config, schema) {
        var components = config.frameworkComponents[schema.type];
        return components ? frameworkDir(config.framework) + '/' + components : false;
      }
    }
  }, {
    key: 'errorsComponent',
    decorators: [(0, _aureliaFramework.computedFrom)('config')],
    get: function get() {
      return frameworkDir(this.config.framework) + '/errors.html';
    }
  }, {
    key: 'isHtmlComponent',
    decorators: [(0, _aureliaFramework.computedFrom)('component')],
    get: function get() {
      return this.component.endsWith('.html');
    }
  }, {
    key: 'errors',
    decorators: [(0, _aureliaFramework.computedFrom)('value')],
    get: function get() {
      if (!this.value) {
        return [];
      }
      return this.value.validate ? this.value.validate() : [];
    }
  }], null, _instanceInitializers);

  var _schemaFormElementCustomElement = schemaFormElementCustomElement;
  schemaFormElementCustomElement = (0, _aureliaFramework.inject)(_config.Config, _aureliaI18n.I18N, Element)(schemaFormElementCustomElement) || schemaFormElementCustomElement;
  return schemaFormElementCustomElement;
})();

exports.schemaFormElementCustomElement = schemaFormElementCustomElement;

function frameworkDir(framework) {
  return './components/' + framework;
}