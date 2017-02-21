'use strict';

System.register(['./field'], function (_export, _context) {
  "use strict";

  var field;
  function required() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return field(value, 'required');
  }

  _export('required', required);

  return {
    setters: [function (_field) {
      field = _field.field;
    }],
    execute: function () {}
  };
});