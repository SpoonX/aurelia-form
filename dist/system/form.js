System.register(['aurelia-validatejs'], function (_export) {
  'use strict';

  var Validator, ValidationEngine, Form;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaValidatejs) {
      Validator = _aureliaValidatejs.Validator;
      ValidationEngine = _aureliaValidatejs.ValidationEngine;
    }],
    execute: function () {
      Form = (function () {
        _createClass(Form, [{
          key: 'onChange',
          value: function onChange() {}
        }, {
          key: 'onSubmit',
          value: function onSubmit() {}
        }]);

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

        _createClass(Form, [{
          key: 'validate',
          value: function validate() {
            this.validator.validate();
          }
        }, {
          key: 'detached',
          value: function detached() {
            this.observer.dispose();
          }
        }, {
          key: 'submit',
          value: function submit() {
            this.validate();
            this.onSubmit(this.model);
          }
        }, {
          key: 'change',
          value: function change() {
            this.validate();
            this.onChange(this.model);
          }
        }]);

        return Form;
      })();

      _export('Form', Form);
    }
  };
});