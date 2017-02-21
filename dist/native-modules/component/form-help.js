'use strict';

exports.__esModule = true;
exports.FormHelp = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

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

var FormHelp = exports.FormHelp = (_dec = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'form-help'), _dec2 = (0, _aureliaFramework.customElement)('form-help'), _dec(_class = _dec2(_class = (_class2 = function FormHelp() {
  

  _initDefineProp(this, 'message', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'message', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);