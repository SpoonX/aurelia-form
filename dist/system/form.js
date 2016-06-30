'use strict';

System.register(['aurelia-validatejs'], function (_export, _context) {
  "use strict";

  var Validator, ValidationEngine, Form;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaValidatejs) {
      Validator = _aureliaValidatejs.Validator;
      ValidationEngine = _aureliaValidatejs.ValidationEngine;
    }],
    execute: function () {
      _export('Form', Form = function () {
        Form.prototype.onChange = function onChange() {};

        Form.prototype.onSubmit = function onSubmit() {};

        function Form() {
          var _this = this;

          _classCallCheck(this, Form);

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
      }());

      _export('Form', Form);
    }
  };
});