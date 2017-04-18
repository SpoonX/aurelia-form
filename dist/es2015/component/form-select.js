var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

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

import { bindable, customElement, bindingMode, computedFrom } from 'aurelia-framework';
import { resolvedView } from 'aurelia-view-manager';

export let FormSelect = (_dec = resolvedView('spoonx/form', 'form-select'), _dec2 = customElement('form-select'), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = computedFrom('selectOptions', 'optionLabel'), _dec(_class = _dec2(_class = (_class2 = class FormSelect {
  constructor() {
    _initDefineProp(this, 'value', _descriptor, this);

    _initDefineProp(this, 'name', _descriptor2, this);

    _initDefineProp(this, 'classes', _descriptor3, this);

    _initDefineProp(this, 'readonly', _descriptor4, this);

    _initDefineProp(this, 'disabled', _descriptor5, this);

    _initDefineProp(this, 'multiple', _descriptor6, this);

    _initDefineProp(this, 'selectOptions', _descriptor7, this);

    _initDefineProp(this, 'options', _descriptor8, this);

    _initDefineProp(this, 'optionLabel', _descriptor9, this);

    _initDefineProp(this, 'autofocus', _descriptor10, this);

    _initDefineProp(this, 'required', _descriptor11, this);

    _initDefineProp(this, 'translate', _descriptor12, this);
  }

  get optionLabels() {
    return this.selectOptions.map(option => {
      if (typeof option !== 'object') {
        return { value: option, label: option };
      }

      if (this.optionLabel) {
        option.label = option[this.optionLabel] || '';
      }

      return option;
    });
  }

  getOptionLabel(option) {
    if (typeof option === 'object' && this.optionLabel) {
      return option[this.optionLabel] || option;
    }

    return option;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'name', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'multiple', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'selectOptions', [bindable], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
  enumerable: true,
  initializer: function () {
    return {};
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'optionLabel', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'name';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'autofocus', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'translate', [bindable], {
  enumerable: true,
  initializer: function () {
    return true;
  }
}), _applyDecoratedDescriptor(_class2.prototype, 'optionLabels', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'optionLabels'), _class2.prototype)), _class2)) || _class) || _class);