'use strict';

System.register(['./field'], function (_export, _context) {
  "use strict";

  var field;
  function autofocus() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return field(value, 'autofocus');
  }

  _export('autofocus', autofocus);

  return {
    setters: [function (_field) {
      field = _field.field;
    }],
    execute: function () {}
  };
});