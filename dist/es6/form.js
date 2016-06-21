import {Validator, ValidationEngine} from 'aurelia-validatejs';

/***
 * Some functionalities are desired in a view model of a form. Responsibilites
 * include validation and submit.
 *
 * This class is optional and serves as a convenience class.
 *
 * - creates a messages property for storing error strings
 * - allows you to set the model which
 * - automatically triggers validation
 * - convenient methods that can be overwritten to perform action on submit and
 *   change
 */
export class Form {

  messages = {}

  isValid

  /***
   * Used to get access to onSubmit and model changes could also wrap the
   * change and submit methods instead
   */
  onChange() {}
  onSubmit() {}

  constructor() {
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

  validate() {
    this.validator.validate();
  }

  detached() {
    this.observer.dispose();
  }

  submit() {
    this.validate();
    this.onSubmit(this.model);
  }

  change() {
    this.validate();
    this.onChange(this.model);
  }

}
