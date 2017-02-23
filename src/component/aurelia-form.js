import {bindable, customElement, children, inject} from 'aurelia-framework';
import {Configuration} from 'aurelia-config';
import {resolvedView} from 'aurelia-view-manager';
import {DOM} from 'aurelia-pal';
import {logger} from '../aurelia-form';

@resolvedView('spoonx/form', 'aurelia-form')
@customElement('aurelia-form')
@inject(Configuration.of('aurelia-form'), DOM.Element)
export class AureliaForm {
  @bindable behavior;

  @bindable classes = '';

  @bindable entity;

  @bindable validated = true;

  @bindable buttonOptions;

  @bindable buttonLabel;

  @bindable buttonEnabled;

  @children('form-group') formGroups = [];

  validationController;

  mapped = {};

  element;

  validateTrigger;

  constructor(config, element) {
    this.config        = config;
    this.element       = element;
    this.buttonEnabled = config.submitButton.enabled;
    this.buttonOptions = config.submitButton.options;
    this.buttonLabel   = config.submitButton.label;
    this.behavior      = config.defaultBehavior;

    let validation = config.validation;

    if (validation && validation.controller) {
      this.validationController = validation.controller.getController(this.mapped, validation.trigger);
      this.validateTrigger      = validation.controller.getTriggers();
    }
  }

  submit() {
    if (!this.validationController || !this.validated) {
      return;
    }

    if (!this.entity) {
      return logger.warn('Validation on forms requires a entity to validate.');
    }

    this.entity.validate().then(result => {
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
    if (this.mapped[property]) {
      return this.validationController.validate({object: this.entity, propertyName: property});
    }
  }

  emit(event, data = {}) {
    this.element.dispatchEvent(DOM.createCustomEvent(event, {detail: data, bubbles: true}));
  }

  formGroupsChanged() {
    this.updateFormGroups();
  }

  behaviorChanged(newValue) {
    if (!newValue) {
      this.behavior = this.config.defaultBehavior;

      return;
    }

    this.updateFormGroups();
  }

  updateFormGroups() {
    if (this.formGroups.length === 0) {
      return;
    }

    this.formGroups.forEach(group => {
      if (this.behavior) {
        group.behavior = this.behavior;
      }

      if (group.name) {
        this.mapped[group.name] = group;
      }
    });
  }
}
