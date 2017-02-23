var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

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

import { bindable, customElement, children, inject } from 'aurelia-framework';
import { Configuration } from 'aurelia-config';
import { resolvedView } from 'aurelia-view-manager';
import { DOM } from 'aurelia-pal';
import { logger } from '../aurelia-form';

export let AureliaForm = (_dec = resolvedView('spoonx/form', 'aurelia-form'), _dec2 = customElement('aurelia-form'), _dec3 = inject(Configuration.of('aurelia-form'), DOM.Element), _dec4 = children('form-group'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class AureliaForm {

  constructor(config, element) {
    _initDefineProp(this, 'behavior', _descriptor, this);

    _initDefineProp(this, 'classes', _descriptor2, this);

    _initDefineProp(this, 'entity', _descriptor3, this);

    _initDefineProp(this, 'validated', _descriptor4, this);

    _initDefineProp(this, 'buttonOptions', _descriptor5, this);

    _initDefineProp(this, 'buttonLabel', _descriptor6, this);

    _initDefineProp(this, 'buttonEnabled', _descriptor7, this);

    _initDefineProp(this, 'formGroups', _descriptor8, this);

    this.mapped = {};

    this.config = config;
    this.element = element;
    this.buttonEnabled = config.submitButton.enabled;
    this.buttonOptions = config.submitButton.options;
    this.buttonLabel = config.submitButton.label;

    let validation = config.validation;

    if (validation && validation.controller) {
      this.validationController = validation.controller.getController(this.mapped, validation.trigger);
      this.validateTrigger = validation.controller.getTriggers();
    }
  }

  submit() {
    if (!this.validationController || !this.validated) {
      return;
    }

    if (!this.entity) {
      return logger.warn('Validation on forms requires a entity to validate.');
    }

    this.validate().then(result => {
      if (result.valid) {
        return this.emit('valid');
      }

      this.emit('invalid', result);
    });
  }

  changed(trigger, event) {
    let controller = this.validationController;

    if (!controller || !this.validated) {
      return true;
    }

    let setTrigger = controller.validateTrigger;
    let triggers = this.validateTrigger;

    if (setTrigger === triggers.manual) {
      return true;
    }

    if (setTrigger < triggers.changeOrBlur && triggers[trigger] !== setTrigger) {
      return true;
    }

    this.validate(event.target.name);

    return true;
  }

  validate(property) {
    return this.validationController.validate({ object: this.entity, propertyName: property });
  }

  emit(event, data = {}) {
    this.element.dispatchEvent(DOM.createCustomEvent(event, { detail: data, bubbles: true }));
  }

  formGroupsChanged() {
    this.updateFormGroups();
  }

  behaviorChanged() {
    this.updateFormGroups();
  }

  updateFormGroups() {
    if (this.formGroups.length === 0) {
      return;
    }

    this.formGroups.forEach(group => {
      group.behavior = this.behavior;

      if (group.name) {
        this.mapped[group.name] = group;
      }
    });
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'behavior', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'entity', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'validated', [bindable], {
  enumerable: true,
  initializer: function () {
    return true;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'buttonOptions', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'buttonLabel', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'buttonEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'formGroups', [_dec4], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class2)) || _class) || _class) || _class);