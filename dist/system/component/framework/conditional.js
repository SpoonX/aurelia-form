'use strict';

System.register(['aurelia-framework', '../../logger'], function (_export, _context) {
  "use strict";

  var BindingEngine, inject, logger, _typeof, _dec, _class, Conditional;

  

  function isPromise(value) {
    return value instanceof Promise;
  }
  return {
    setters: [function (_aureliaFramework) {
      BindingEngine = _aureliaFramework.BindingEngine;
      inject = _aureliaFramework.inject;
    }, function (_logger) {
      logger = _logger.logger;
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
          this.schema = [];

          var calculateSchema = function calculateSchema() {
            var schema = field.element.schema(_this.model);

            if (Array.isArray(schema)) {
              _this.schema = schema;
              return schema;
            }

            if (isPromise(schema)) {
              return schema.then(function (resolved) {
                _this.schema = resolved;
              });
            }

            logger.error(field.element.type + ' does not return a schema');
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