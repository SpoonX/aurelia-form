define(['exports', 'aurelia-validatejs'], function (exports, _aureliaValidatejs) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.regiserValidator = regiserValidator;

  function regiserValidator() {
    var _this = this;

    this.__defineSetter__('model', function (model) {
      _this.onChange(model, _this.model);
      _this.__defineGetter__('model', function () {
        return model;
      });
      _this.observer && _this.observer.dispose();
      _this.validator = new _aureliaValidatejs.Validator(model);
      _this.reporter = _aureliaValidatejs.ValidationEngine.getValidationReporter(model);
      _this.observer = _this.reporter.subscribe(function (validationErrors) {
        _this.isValid = Object.keys(validationErrors).length === 0;
        _this.messages = validationErrors.reduce(function (errors, error) {
          errors[error.propertyName] = error.message;
          return errors;
        }, {});
      });
    });
  }
});