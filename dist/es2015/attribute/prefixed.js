var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

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

import { bindable, inject, customAttribute } from "aurelia-framework";

export let Prefixed = (_dec = inject(Element), _dec2 = customAttribute('prefixed'), _dec(_class = _dec2(_class = (_class2 = class Prefixed {

  constructor(element) {
    _initDefineProp(this, 'attribute', _descriptor, this);

    _initDefineProp(this, 'options', _descriptor2, this);

    _initDefineProp(this, 'prefix', _descriptor3, this);

    this.element = element;
  }

  optionsChanged() {
    this.updateAttribute();
  }

  updateAttribute() {
    if (!this.options || !this.options.length || !this.prefix) {
      return;
    }

    let options = this.options;

    if (typeof options === 'string') {
      options = options.split(',').map(value => value.trim());
    }

    let attributeValue = this.element.getAttribute(this.attribute).split(' ');

    options.forEach(value => attributeValue.push(this.prefix + value));

    this.element.setAttribute(this.attribute, attributeValue.join(' '));
  }

  prefixChanged(next, previous) {
    if (previous) {
      this.resetAttribute(previous, this.attribute);
    }

    this.updateAttribute();
  }

  attributeChanged(next, previous) {
    this.resetAttribute(this.prefix, previous);

    this.updateAttribute();
  }

  resetAttribute(prefix, attribute) {
    if (!this.element) {
      return this;
    }

    let attributeValue = this.element.getAttribute(attribute);

    if (!attributeValue) {
      return this;
    }

    attributeValue = attributeValue.split(' ').filter(value => value.indexOf(prefix) !== 0).join(' ');

    this.element.setAttribute(attribute, attributeValue);

    return this;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'attribute', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'class';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'prefix', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);