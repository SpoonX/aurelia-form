'use strict';

System.register(['../../aurelia-form'], function (_export, _context) {
  "use strict";

  var logger, Options;

  

  return {
    setters: [function (_aureliaForm) {
      logger = _aureliaForm.logger;
    }],
    execute: function () {
      _export('Options', Options = function () {
        function Options() {
          
        }

        Options.prototype.activate = function activate(model) {
          if (!Array.isArray(model.element.options)) {
            logger.error('element \'s options should be an array');
          }

          this.model = model;
        };

        return Options;
      }());

      _export('Options', Options);
    }
  };
});