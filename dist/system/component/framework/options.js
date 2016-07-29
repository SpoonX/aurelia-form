'use strict';

System.register(['../../utils', '../../aurelia-form', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var normalizeOptions, logger, BindingEngine, inject, _dec, _class, Options;

  

  return {
    setters: [function (_utils) {
      normalizeOptions = _utils.normalizeOptions;
    }, function (_aureliaForm) {
      logger = _aureliaForm.logger;
    }, function (_aureliaFramework) {
      BindingEngine = _aureliaFramework.BindingEngine;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      _export('Options', Options = (_dec = inject(BindingEngine), _dec(_class = function () {
        function Options(bindingEngine) {
          

          this.bindingEngine = bindingEngine;
        }

        Options.prototype.activate = function activate(model) {
          var _this = this;

          if (!Array.isArray(model.element.options)) {
            logger.error('element \'s options should be an array');
          }

          this.value = model.value;
          this.element = model.element;
          this.options = normalizeOptions(model.element.options);

          this.optionsObserver = this.bindingEngine.collectionObserver(model.element.options).subscribe(function () {
            _this.options = normalizeOptions(model.element.options);
          });
        };

        Options.prototype.unbind = function unbind() {
          this.optionsObserver.dispose();
        };

        return Options;
      }()) || _class));

      _export('Options', Options);
    }
  };
});