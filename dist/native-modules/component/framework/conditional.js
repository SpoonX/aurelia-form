var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _dec, _class;



import { BindingEngine, inject } from 'aurelia-framework';

export var Conditional = (_dec = inject(BindingEngine), _dec(_class = function () {
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