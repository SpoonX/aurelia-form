System.register(['aurelia-validatejs'], function (_export) {
  'use strict';

  var Validator, ValidationEngine;

  _export('regiserValidator', regiserValidator);

  function regiserValidator() {
    var _this = this;

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

  return {
    setters: [function (_aureliaValidatejs) {
      Validator = _aureliaValidatejs.Validator;
      ValidationEngine = _aureliaValidatejs.ValidationEngine;
    }],
    execute: function () {}
  };
});