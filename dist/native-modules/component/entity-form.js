var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

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

import { entitySchema } from '../entity-schema';
import { bindable, bindingMode, customElement } from 'aurelia-framework';
import { resolvedView } from 'aurelia-view-manager';

export var EntityForm = (_dec = customElement('entity-form'), _dec2 = resolvedView('spoonx/form', 'entity-form'), _dec3 = bindable({ defaultBindingMode: bindingMode.oneTime }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
  function EntityForm() {
    

    _initDefineProp(this, 'entity', _descriptor, this);

    _initDefineProp(this, 'model', _descriptor2, this);

    _initDefineProp(this, 'messages', _descriptor3, this);

    _initDefineProp(this, 'descriptions', _descriptor4, this);
  }

  EntityForm.prototype.bind = function bind() {
    this.schema = entitySchema(this.entity);
    this.model = this.entity;
  };

  return EntityForm;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'entity', [_dec3], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'model', [_dec4], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'messages', [bindable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'descriptions', [bindable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
})), _class2)) || _class) || _class);