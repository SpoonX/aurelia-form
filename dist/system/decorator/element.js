'use strict';

System.register(['./field'], function (_export, _context) {
  "use strict";

  var field;
  function element(value) {
    return field(value, 'element');
  }

  _export('element', element);

  return {
    setters: [function (_field) {
      field = _field.field;
    }],
    execute: function () {}
  };
});