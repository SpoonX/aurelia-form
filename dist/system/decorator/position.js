'use strict';

System.register(['./field'], function (_export, _context) {
  "use strict";

  var field;
  function position() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

    return field(value, 'position');
  }

  _export('position', position);

  return {
    setters: [function (_field) {
      field = _field.field;
    }],
    execute: function () {}
  };
});