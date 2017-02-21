'use strict';

System.register(['../Metadata'], function (_export, _context) {
  "use strict";

  var Metadata;
  function field(value, option) {
    return function (target, property) {
      Metadata.forTarget(target.constructor).put('fields.' + property + '.' + option, value);
    };
  }

  _export('field', field);

  return {
    setters: [function (_Metadata) {
      Metadata = _Metadata.Metadata;
    }],
    execute: function () {}
  };
});