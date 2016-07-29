define(['exports', '../../utils', '../../aurelia-form', 'aurelia-framework'], function (exports, _utils, _aureliaForm, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Options = undefined;

  

  var _dec, _class;

  var Options = exports.Options = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine), _dec(_class = function () {
    function Options(bindingEngine) {
      

      this.bindingEngine = bindingEngine;
    }

    Options.prototype.activate = function activate(model) {
      var _this = this;

      if (!Array.isArray(model.element.options)) {
        _aureliaForm.logger.error('element \'s options should be an array');
      }

      this.value = model.value;
      this.element = model.element;
      this.options = (0, _utils.normalizeOptions)(model.element.options);

      this.optionsObserver = this.bindingEngine.collectionObserver(model.element.options).subscribe(function () {
        _this.options = (0, _utils.normalizeOptions)(model.element.options);
      });
    };

    Options.prototype.unbind = function unbind() {
      this.optionsObserver.dispose();
    };

    return Options;
  }()) || _class);
});