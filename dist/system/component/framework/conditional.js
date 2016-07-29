'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var BindingEngine, inject, _typeof, _dec, _class, Conditional;

  

  return {
    setters: [function (_aureliaFramework) {
      BindingEngine = _aureliaFramework.BindingEngine;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('Conditional', Conditional = (_dec = inject(BindingEngine), _dec(_class = function () {
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
      }()) || _class));

      _export('Conditional', Conditional);
    }
  };
});