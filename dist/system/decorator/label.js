'use strict';

System.register(['./field'], function (_export, _context) {
  "use strict";

  var field;
  function label(value) {
    return field(value, 'label');
  }

  _export('label', label);

  return {
    setters: [function (_field) {
      field = _field.field;
    }],
    execute: function () {}
  };
});