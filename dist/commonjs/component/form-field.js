'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _config = require('../config');

var _aureliaFramework = require('aurelia-framework');

var _aureliaViewManager = require('aurelia-view-manager');

var FormField = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(FormField, [{
    key: 'element',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'value',
    decorators: [(0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay })],
    initializer: null,
    enumerable: true
  }, {
    key: 'message',
    decorators: [_aureliaFramework.bindable],
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
    decorators: [(0, _aureliaFramework.computedFrom)('element')],
    get: function get() {
      return this.element.label || this.element.key;
    }
  }, {
    key: 'view',
    decorators: [(0, _aureliaFramework.computedFrom)('element')],
    get: function get() {
      var type = this.type;
      this.element.type = type;

      return this.viewManager.resolve('spoonx/form', type);
    }
  }, {
    key: 'hasViewModel',
    decorators: [(0, _aureliaFramework.computedFrom)('view')],
    get: function get() {
      return !this.view.endsWith('.html');
    }
  }, {
    key: 'type',
    decorators: [(0, _aureliaFramework.computedFrom)('element')],
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
  FormField = (0, _aureliaFramework.inject)(_config.Config, _aureliaViewManager.ViewManager)(FormField) || FormField;
  FormField = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'form-field')(FormField) || FormField;
  FormField = (0, _aureliaFramework.customElement)('form-field')(FormField) || FormField;
  return FormField;
})();

exports.FormField = FormField;