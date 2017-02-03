'use strict';

exports.__esModule = true;
exports.FormGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

var _aureliaFramework = require('aurelia-framework');

var _config = require('../../config');

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

var FormGroup = exports.FormGroup = (_dec = (0, _aureliaFramework.inject)(_config.Config), _dec2 = (0, _aureliaFramework.computedFrom)('element'), _dec3 = (0, _aureliaFramework.computedFrom)('message'), _dec4 = (0, _aureliaFramework.computedFrom)('description'), _dec5 = (0, _aureliaFramework.computedFrom)('element'), _dec(_class = (_class2 = function () {
  function FormGroup(config) {
    

    _initDefineProp(this, 'element', _descriptor, this);

    _initDefineProp(this, 'message', _descriptor2, this);

    _initDefineProp(this, 'description', _descriptor3, this);

    this.labelFormat = config.fetch('labelFormat');
  }

  _createClass(FormGroup, [{
    key: 'showsLabel',
    get: function get() {
      return this.element.label !== false;
    }
  }, {
    key: 'showsMessage',
    get: function get() {
      return !!this.message;
    }
  }, {
    key: 'showsDescription',
    get: function get() {
      return !!this.description;
    }
  }, {
    key: 'labelText',
    get: function get() {
      return this.labelFormat(this.element);
    }
  }]);

  return FormGroup;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'element', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'message', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'showsLabel', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'showsLabel'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'showsMessage', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'showsMessage'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'showsDescription', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'showsDescription'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'labelText', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'labelText'), _class2.prototype)), _class2)) || _class);