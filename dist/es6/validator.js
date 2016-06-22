import {Validator, ValidationEngine} from 'aurelia-validatejs';

export function regiserValidator() {
  this.__defineSetter__('model', (model) => {
    this.onChange(model, this.model);
    this.__defineGetter__('model', () => model);
    this.observer && this.observer.dispose();
    this.validator = new Validator(model);
    this.reporter  = ValidationEngine.getValidationReporter(model);
    this.observer  = this.reporter.subscribe(validationErrors => {
      this.isValid = Object.keys(validationErrors).length === 0;
      this.messages = validationErrors.reduce((errors, error) => {
        errors[error.propertyName] = error.message;
        return errors;
      }, {});
    });
  });
}
