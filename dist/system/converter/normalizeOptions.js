'use strict';

System.register(['../utils'], function (_export, _context) {
  "use strict";

  var normalizeOptions, normalizeOptionsValueConverter;

  

  return {
    setters: [function (_utils) {
      normalizeOptions = _utils.normalizeOptions;
    }],
    execute: function () {
      _export('normalizeOptionsValueConverter', normalizeOptionsValueConverter = function () {
        function normalizeOptionsValueConverter() {
          
        }

        normalizeOptionsValueConverter.prototype.toView = function toView(options) {
          return normalizeOptions(options);
        };

        return normalizeOptionsValueConverter;
      }());

      _export('normalizeOptionsValueConverter', normalizeOptionsValueConverter);
    }
  };
});