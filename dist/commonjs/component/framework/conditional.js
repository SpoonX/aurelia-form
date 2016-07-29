'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Conditional = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');



var Conditional = exports.Conditional = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine), _dec(_class = function () {
  function Conditional(bindingEngine) {
    

    this.bindingEngine = bindingEngine;
  }

  Conditional.prototype.activate = function activate(field) {
    var _this = this;

    this.model = field.value;
    var calculateSchema = function calculateSchema() {
      _this.schema = field.element.schema(_this.model);
    };

    calculateSchema();

    if (_typeof(this.model) === 'object' && field.element.observe) {
      this.observer = this.bindingEngine.propertyObserver(this.model, field.element.observe).subscribe(calculateSchema);
    }
  };

  Conditional.prototype.deactivate = function deactivate() {
    this.observer && this.observer.dispose();
  };

  return Conditional;
}()) || _class);