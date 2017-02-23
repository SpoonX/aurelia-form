var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

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

import { Configuration } from 'aurelia-config';
import { inject, bindable, customElement, bindingMode, TemplatingEngine } from 'aurelia-framework';
import { resolvedView } from 'aurelia-view-manager';
import { logger } from '../aurelia-form';
import { DOM } from 'aurelia-pal';

export let FormElement = (_dec = resolvedView('spoonx/form', 'form-element'), _dec2 = customElement('form-element'), _dec3 = inject(Configuration.of('aurelia-form'), DOM.Element, TemplatingEngine), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class FormElement {

  constructor(config, DOMElement, templatingEngine) {
    _initDefineProp(this, 'type', _descriptor, this);

    _initDefineProp(this, 'element', _descriptor2, this);

    _initDefineProp(this, 'DOMElement', _descriptor3, this);

    _initDefineProp(this, 'value', _descriptor4, this);

    _initDefineProp(this, 'name', _descriptor5, this);

    _initDefineProp(this, 'classes', _descriptor6, this);

    _initDefineProp(this, 'placeholder', _descriptor7, this);

    _initDefineProp(this, 'readonly', _descriptor8, this);

    _initDefineProp(this, 'disabled', _descriptor9, this);

    _initDefineProp(this, 'multiple', _descriptor10, this);

    _initDefineProp(this, 'options', _descriptor11, this);

    _initDefineProp(this, 'selectOptions', _descriptor12, this);

    _initDefineProp(this, 'optionLabel', _descriptor13, this);

    _initDefineProp(this, 'autofocus', _descriptor14, this);

    _initDefineProp(this, 'required', _descriptor15, this);

    this.proxyAttributes = ['value', 'name', 'classes', 'placeholder', 'readonly', 'disabled', 'options', 'type', 'multiple', 'selectOptions', 'optionLabel', 'autofocus', 'required'];

    this.config = config;
    this.DOMElement = DOMElement;
    this.templatingEngine = templatingEngine;
  }

  attached() {
    let element = DOM.createElement(this.getElementName());

    this.setAttributes(element);
    this.DOMElement.appendChild(element);
    this.templatingEngine.enhance({ element: element, bindingContext: this }).attached();
  }

  setAttributes(DOMElement) {
    this.proxyAttributes.forEach(attribute => {
      let attributeName = attribute.replace(/[A-Z]/g, (match, offset) => {
        return (offset ? '-' : '') + match.toLowerCase();
      });

      DOMElement.setAttribute(`${attributeName}.bind`, attribute);
    });
  }

  getElementName() {
    let elementName = this.config.elements[this.config.aliases[this.element] || this.element];

    if (!elementName) {
      logger.warn(`Unable to find element for element '${this.element}'. Falling back to default '${this.config.defaultElement}'.`);

      elementName = this.config.elements[this.config.defaultElement];
    }

    return elementName;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'text';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'element', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'input';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'DOMElement', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'name', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'multiple', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
  enumerable: true,
  initializer: function () {
    return {};
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'selectOptions', [bindable], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'optionLabel', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'autofocus', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);