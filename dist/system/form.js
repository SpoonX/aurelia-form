System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, Form;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      Form = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Form, [{
          key: 'data',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'working',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'type',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Form(formElement) {
          _classCallCheck(this, _Form);

          _defineDecoratedPropertyDescriptor(this, 'data', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'working', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

          this.element = formElement;
        }

        _createDecoratedClass(Form, [{
          key: 'submit',
          value: function submit() {
            return this.onSubmit();
          }
        }, {
          key: 'onSubmit',
          value: function onSubmit() {
            var _this = this;

            if (!this.data.validation) {
              return this.element.dispatchEvent(new CustomEvent('complete', this.data.asObject()));
            }

            this.data.validation.validate().then(function (result) {
              _this.element.dispatchEvent(new CustomEvent('complete', _this.data.asObject()));
            })['catch'](function (error) {});
          }
        }], null, _instanceInitializers);

        var _Form = Form;
        Form = inject(Element)(Form) || Form;
        return Form;
      })();

      _export('Form', Form);
    }
  };
});