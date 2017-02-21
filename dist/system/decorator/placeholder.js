'use strict';

System.register(['./field'], function (_export, _context) {
  "use strict";

  var field;
  function placeholder(value) {
    return field(value, 'placeholder');
  }

  _export('placeholder', placeholder);

  return {
    setters: [function (_field) {
      field = _field.field;
    }],
    execute: function () {}
  };
});