'use strict';

System.register(['./field'], function (_export, _context) {
  "use strict";

  var field;
  function options() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return field(value, 'options');
  }

  _export('options', options);

  return {
    setters: [function (_field) {
      field = _field.field;
    }],
    execute: function () {}
  };
});