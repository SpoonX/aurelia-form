'use strict';

System.register(['aurelia-logging'], function (_export, _context) {
  "use strict";

  var getLogger, logger;
  return {
    setters: [function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      _export('logger', logger = getLogger('aurelia-form'));

      _export('logger', logger);
    }
  };
});