'use strict';

System.register(['../../logger'], function (_export, _context) {
  "use strict";

  var logger, Options;

  

  return {
    setters: [function (_logger) {
      logger = _logger.logger;
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