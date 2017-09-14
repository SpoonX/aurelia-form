var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

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

import { Config as ViewManagerConfig, resolvedView } from 'aurelia-view-manager';
import { getLogger } from 'aurelia-logging';
import { metadata } from 'aurelia-metadata';
import { Homefront } from 'homefront';
import { bindable, customElement, bindingMode } from 'aurelia-framework';

export const logger = getLogger('aurelia-form');

export function configure(aurelia, config) {
  aurelia.aurelia.use.plugin('aurelia-view-manager');

  aurelia.container.get(ViewManagerConfig).configureNamespace('spoonx/form', {
    location: './view/{{framework}}/{{view}}.html'
  });

  let defaultComponents = ['aurelia-form', 'form-element', 'form-label', 'form-button', 'form-help', 'form-error', 'form-group', 'entity-form'];

  let defaultElements = ['input', 'checkbox', 'radio', 'select', 'textarea', 'association'];

  aurelia.globalResources('./attribute/prefixed', ...defaultComponents.map(component => `./component/${component}`), ...defaultElements.map(component => `./component/form-${component}`));

  config.elements = config.elements || {};

  defaultElements.forEach(element => {
    config.elements[element] = config.elements[element] || `form-${element}`;
  });
}

export const config = {
  'aurelia-form': {
    defaultElement: 'input',
    defaultBehavior: 'regular',
    defaultLabelClasses: '',
    defaultElementClasses: '',
    elements: {},
    validation: {},

    submitButton: {
      enabled: true,
      options: ['primary'],
      label: 'Submit'
    },

    aliases: {
      enum: 'radio',
      int: 'input',
      integer: 'input',
      number: 'input',
      float: 'input',
      string: 'input',
      bool: 'checkbox',
      boolean: 'checkbox',
      text: 'textarea'
    }
  }
};

export let Metadata = class Metadata {
  static forTarget(target) {
    if (typeof target !== 'function') {
      target = target.constructor;
    }

    return metadata.getOrCreateOwn('spoonx:form:metadata', Homefront, target, target.name);
  }
};

export function autofocus(value = true) {
  return field(value, 'autofocus');
}

export function disabled(value = true) {
  return field(value, 'disabled');
}

export function element(value) {
  return field(value, 'element');
}

export function field(value, option) {
  return function (target, property) {
    Metadata.forTarget(target.constructor).put(`fields.${property}.${option}`, value);
  };
}

export function inputType(value) {
  return field(value, 'type');
}

export function label(value) {
  return field(value, 'label');
}

export function noRender(value = true) {
  return field(value, 'noRender');
}

export function options(value = {}) {
  return field(value, 'options');
}

export function placeholder(value) {
  return field(value, 'placeholder');
}

export function position(value = -1) {
  return field(value, 'position');
}

export function readonly(value = true) {
  return field(value, 'readonly');
}

export function required(value = true) {
  return field(value, 'required');
}

export let FormCheckbox = (_dec = resolvedView('spoonx/form', 'form-checkbox'), _dec2 = customElement('form-checkbox'), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class FormCheckbox {
  constructor() {
    _initDefineProp(this, 'name', _descriptor, this);

    _initDefineProp(this, 'value', _descriptor2, this);

    _initDefineProp(this, 'option', _descriptor3, this);

    _initDefineProp(this, 'type', _descriptor4, this);

    _initDefineProp(this, 'classes', _descriptor5, this);

    _initDefineProp(this, 'placeholder', _descriptor6, this);

    _initDefineProp(this, 'readonly', _descriptor7, this);

    _initDefineProp(this, 'disabled', _descriptor8, this);

    _initDefineProp(this, 'options', _descriptor9, this);

    _initDefineProp(this, 'autofocus', _descriptor10, this);

    _initDefineProp(this, 'required', _descriptor11, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'option', [_dec4], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'text';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
  enumerable: true,
  initializer: function () {
    return {};
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'autofocus', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);