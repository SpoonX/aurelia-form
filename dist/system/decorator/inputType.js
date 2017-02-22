'use strict';

System.register(['./field'], function (_export, _context) {
  "use strict";

  var field;
  function inputType(value) {
    return field(value, 'type');
  }

  _export('inputType', inputType);

  return {
    setters: [function (_field) {
      field = _field.field;
    }],
    execute: function () {}
  };
});