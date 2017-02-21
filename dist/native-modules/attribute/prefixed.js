'use strict';

exports.__esModule = true;
exports.Prefixed = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

var _aureliaFramework = require('aurelia-framework');

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

var Prefixed = exports.Prefixed = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.customAttribute)('prefixed'), _dec(_class = _dec2(_class = (_class2 = function () {
  function Prefixed(element) {
    

    _initDefineProp(this, 'attribute', _descriptor, this);

    _initDefineProp(this, 'options', _descriptor2, this);

    _initDefineProp(this, 'prefix', _descriptor3, this);

    this.element = element;
  }

  Prefixed.prototype.optionsChanged = function optionsChanged() {
    this.updateAttribute();
  };

  Prefixed.prototype.updateAttribute = function updateAttribute() {
    var _this = this;

    if (!this.options || !this.options.length || !this.prefix) {
      return;
    }

    var options = this.options;

    if (typeof options === 'string') {
      options = options.split(',').map(function (value) {
        return value.trim();
      });
    }

    var attributeValue = this.element.getAttribute(this.attribute).split(' ');

    options.forEach(function (value) {
      return attributeValue.push(_this.prefix + value);
    });

    this.element.setAttribute(this.attribute, attributeValue.join(' '));
  };

  Prefixed.prototype.prefixChanged = function prefixChanged(next, previous) {
    if (previous) {
      this.resetAttribute(previous, this.attribute);
    }

    this.updateAttribute();
  };

  Prefixed.prototype.attributeChanged = function attributeChanged(next, previous) {
    this.resetAttribute(this.prefix, previous);

    this.updateAttribute();
  };

  Prefixed.prototype.resetAttribute = function resetAttribute(prefix, attribute) {
    if (!this.element) {
      return this;
    }

    var attributeValue = this.element.getAttribute(attribute);

    if (!attributeValue) {
      return this;
    }

    attributeValue = attributeValue.split(' ').filter(function (value) {
      return value.indexOf(prefix) !== 0;
    }).join(' ');

    this.element.setAttribute(attribute, attributeValue);

    return this;
  };

  return Prefixed;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'attribute', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'class';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'prefix', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);