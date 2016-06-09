import {Validator, ValidationEngine} from 'aurelia-validatejs';

/***
 * Some functionalities are desired in a view model of a form. Responsibilites
 * include validation and submit.
 *
 * This class is optional and serves as a convenience class
 */
export class Form {

  messages = {}

  _model

  constructor() {}

  set model(newModel) {
    this._model    = newModel;
    this.validator = new Validator(newModel);
    this.reporter  = ValidationEngine.getValidationReporter(newModel);
    this.observer  = this.reporter.subscribe(validationErrors => {
      this.messages = validationErrors.reduce( (acc, error) => {
        acc[error.propertyName] = error.message;
        return acc;
      }, {});
    });
  }

  get model() {
    return this._model;
  }

  validate() {
    this.validator.validate();
  }

  detached() {
    this.observer.dispose();
  }

  submit() {
  }

  change() {
    this.validate();
  }

}
