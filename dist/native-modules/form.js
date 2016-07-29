

import { Validator, ValidationEngine } from 'aurelia-validatejs';

export var Form = function () {
  Form.prototype.onChange = function onChange() {};

  Form.prototype.onSubmit = function onSubmit() {};

  function Form() {
    var _this = this;

    

    this.messages = {};

    this.__defineSetter__('model', function (model) {
      _this.onChange(model, _this.model);
      _this.__defineGetter__('model', function () {
        return model;
      });
      _this.observer && _this.observer.dispose();
      _this.validator = new Validator(model);
      _this.reporter = ValidationEngine.getValidationReporter(model);
      _this.observer = _this.reporter.subscribe(function (validationErrors) {
        _this.isValid = Object.keys(validationErrors).length === 0;
        _this.messages = validationErrors.reduce(function (errors, error) {
          errors[error.propertyName] = error.message;
          return errors;
        }, {});
      });
    });
  }

  Form.prototype.validate = function validate() {
    this.validator.validate();
  };

  Form.prototype.detached = function detached() {
    this.observer.dispose();
  };

  Form.prototype.submit = function submit() {
    this.validate();
    this.onSubmit(this.model);
  };

  Form.prototype.change = function change() {
    this.validate();
    this.onChange(this.model);
  };

  return Form;
}();