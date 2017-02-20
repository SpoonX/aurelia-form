import {bindable, customElement, children, inject} from 'aurelia-framework';
import {Configuration} from 'aurelia-config';
import {resolvedView} from 'aurelia-view-manager';
import {DOM} from 'aurelia-pal';
import {logger} from '../aurelia-form';

@resolvedView('spoonx/form', 'aurelia-form')
@customElement('aurelia-form')
@inject(Configuration.of('aurelia-form'), DOM.Element)
export class AureliaForm {
  @bindable behavior = '';

  @bindable classes = '';

  @bindable options = {};

  @bindable validationController;

  @bindable entity;

  @children('form-group') formGroups = [];

  mapped = {};

  element;

  validateTrigger;

  constructor(config, element) {
    this.config    = config;
    this.element   = element;
    let validation = config.validation;

    if (validation) {
      this.validationController = validation.controller.getController(this.mapped, validation.trigger);
      this.validateTrigger      = validation.controller.getTriggers();
    }
  }

  submit() {
    if (!this.validationController) {
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

    if (!controller) {
      return true;
    }

    let setTrigger = controller.validateTrigger;
    let triggers   = this.validateTrigger;

    if (setTrigger === triggers.manual) {
      return true;
    }

    // Specific configured, something else triggered. Return.
    if (setTrigger < triggers.changeOrBlur && triggers[trigger] !== setTrigger) {
      return true;
    }

    this.validate(event.target.name);

    return true;
  }

  validate(property) {
    return this.validationController.validate({object: this.entity, propertyName: property});
  }

  emit(event, data = {}) {
    this.element.dispatchEvent(DOM.createCustomEvent(event, {detail: data, bubbles: true}));
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
}
