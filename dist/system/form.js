System.register(['aurelia-templating-resources'], function (_export) {
  'use strict';

  var BindingSignaler, Form;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplatingResources) {
      BindingSignaler = _aureliaTemplatingResources.BindingSignaler;
    }],
    execute: function () {
      Form = (function () {
        function Form(signaler) {
          var _this = this;

          _classCallCheck(this, _Form);

          this.signaler = signaler;
          this.dirtyProperties = {};

          this.validator = new Validator();
          this.reporter = ValidationEngine.getValidationReporter(this.user);
          this.observer = this.reporter.subscribe(function (result) {
            _this.errors = result.reduce(function (acc, item) {
              acc[item.propertyName] = [item.message];
              return acc;
            }, {});
          });
        }

        _createClass(Form, [{
          key: 'onSubmit',
          value: function onSubmit() {
            console.warn('onSubmit');
          }
        }, {
          key: 'validate',
          value: function validate() {
            this.signaler.signal('aurelia-form:validate');
          }
        }]);

        var _Form = Form;
        Form = inject(BindingSignaler)(Form) || Form;
        return Form;
      })();

      _export('Form', Form);
    }
  };
});