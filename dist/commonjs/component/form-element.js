'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormElement = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

var _aureliaConfig = require('aurelia-config');

var _aureliaFramework = require('aurelia-framework');

var _aureliaViewManager = require('aurelia-view-manager');

var _aureliaForm = require('../aurelia-form');

var _aureliaPal = require('aurelia-pal');

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

var FormElement = exports.FormElement = (_dec = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'form-element'), _dec2 = (0, _aureliaFramework.customElement)('form-element'), _dec3 = (0, _aureliaFramework.inject)(_aureliaConfig.Configuration.of('aurelia-form'), _aureliaPal.DOM.Element, _aureliaFramework.TemplatingEngine), _dec4 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
  function FormElement(config, DOMElement, templatingEngine) {
    

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

  FormElement.prototype.attached = function attached() {
    var element = _aureliaPal.DOM.createElement(this.getElementName());

    this.setAttributes(element);
    this.DOMElement.appendChild(element);
    this.templatingEngine.enhance({ element: element, bindingContext: this });
  };

  FormElement.prototype.setAttributes = function setAttributes(DOMElement) {
    this.proxyAttributes.forEach(function (attribute) {
      var attributeName = attribute.replace(/[A-Z]/g, function (match, offset) {
        return (offset ? '-' : '') + match.toLowerCase();
      });

      DOMElement.setAttribute(attributeName + '.bind', attribute);
    });
  };

  FormElement.prototype.getElementName = function getElementName() {
    var elementName = this.config.elements[this.config.aliases[this.element] || this.element];

    if (!elementName) {
      _aureliaForm.logger.warn('Unable to find element for element \'' + this.element + '\'. Falling back to default \'' + this.config.defaultElement + '\'.');

      elementName = this.config.elements[this.config.defaultElement];
    }

    return elementName;
  };

  return FormElement;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'type', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'text';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'element', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'input';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'DOMElement', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'multiple', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'selectOptions', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'optionLabel', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'autofocus', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);