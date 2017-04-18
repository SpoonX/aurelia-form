var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;

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

import { bindable, customElement, bindingMode, inject } from 'aurelia-framework';
import { resolvedView } from 'aurelia-view-manager';
import { Configuration } from 'aurelia-config';

export let FormGroup = (_dec = resolvedView('spoonx/form', 'form-group'), _dec2 = customElement('form-group'), _dec3 = inject(Configuration.of('aurelia-form')), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class FormGroup {

  constructor(config) {
    _initDefineProp(this, 'value', _descriptor, this);

    _initDefineProp(this, 'classes', _descriptor2, this);

    _initDefineProp(this, 'elementClasses', _descriptor3, this);

    _initDefineProp(this, 'labelClasses', _descriptor4, this);

    _initDefineProp(this, 'element', _descriptor5, this);

    _initDefineProp(this, 'placeholder', _descriptor6, this);

    _initDefineProp(this, 'state', _descriptor7, this);

    _initDefineProp(this, 'name', _descriptor8, this);

    _initDefineProp(this, 'label', _descriptor9, this);

    _initDefineProp(this, 'error', _descriptor10, this);

    _initDefineProp(this, 'message', _descriptor11, this);

    _initDefineProp(this, 'type', _descriptor12, this);

    _initDefineProp(this, 'behavior', _descriptor13, this);

    _initDefineProp(this, 'readonly', _descriptor14, this);

    _initDefineProp(this, 'disabled', _descriptor15, this);

    _initDefineProp(this, 'autofocus', _descriptor16, this);

    _initDefineProp(this, 'required', _descriptor17, this);

    _initDefineProp(this, 'options', _descriptor18, this);

    _initDefineProp(this, 'multiple', _descriptor19, this);

    _initDefineProp(this, 'selectOptions', _descriptor20, this);

    _initDefineProp(this, 'optionLabel', _descriptor21, this);

    _initDefineProp(this, 'translate', _descriptor22, this);

    this.config = config;
    this.behavior = config.defaultBehavior;
  }

  is(oneOf, then, source) {
    if (typeof oneOf === 'string') {
      oneOf = oneOf.split(',').map(one => one.trim());
    }

    source = source || this.element;
    then = then || true;

    return oneOf.indexOf(source) > -1 ? then : false;
  }

  byPattern(pattern, defaults, overrides = '') {
    let regex = new RegExp(pattern, 'gi');

    if (regex.test(overrides)) {
      defaults = defaults.replace(regex, '');
    }

    return `${defaults} ${overrides}`.replace('  ', ' ').trim();
  }

  when(conditional, value, otherwise) {
    return conditional ? value : otherwise || '';
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'elementClasses', [bindable], {
  enumerable: true,
  initializer: function () {
    return this.config.defaultElementClasses;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'labelClasses', [bindable], {
  enumerable: true,
  initializer: function () {
    return this.config.defaultLabelClasses;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'element', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'input';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'state', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'name', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'error', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'message', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'text';
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'behavior', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'autofocus', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'multiple', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'selectOptions', [bindable], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'optionLabel', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'translate', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);