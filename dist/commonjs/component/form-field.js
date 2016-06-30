'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

var _config = require('../config');

var _aureliaFramework = require('aurelia-framework');

var _aureliaViewManager = require('aurelia-view-manager');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var FormField = exports.FormField = (_dec = (0, _aureliaFramework.customElement)('form-field'), _dec2 = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'form-field'), _dec3 = (0, _aureliaFramework.inject)(_config.Config, _aureliaViewManager.ViewManager), _dec4 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec5 = (0, _aureliaFramework.computedFrom)('element'), _dec6 = (0, _aureliaFramework.computedFrom)('element'), _dec7 = (0, _aureliaFramework.computedFrom)('view'), _dec8 = (0, _aureliaFramework.computedFrom)('element'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
  function FormField(config, viewManager) {
    _classCallCheck(this, FormField);

    _initDefineProp(this, 'element', _descriptor, this);

    _initDefineProp(this, 'value', _descriptor2, this);

    _initDefineProp(this, 'message', _descriptor3, this);

    this.config = config;
    this.viewManager = viewManager;
  }

  _createClass(FormField, [{
    key: 'label',
    get: function get() {
      return this.element.label || this.element.key;
    }
  }, {
    key: 'view',
    get: function get() {
      var type = this.type;
      this.element.type = type;

      return this.viewManager.resolve('spoonx/form', type);
    }
  }, {
    key: 'hasViewModel',
    get: function get() {
      return !this.view.endsWith('.html');
    }
  }, {
    key: 'type',
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
  }]);

  return FormField;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'element', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'message', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'label', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'label'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'view', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'view'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'hasViewModel', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'hasViewModel'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'type'), _class2.prototype)), _class2)) || _class) || _class) || _class);