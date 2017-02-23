'use strict';

System.register(['../metadata'], function (_export, _context) {
  "use strict";

  var Metadata;
  function field(value, option) {
    return function (target, property) {
      Metadata.forTarget(target.constructor).put('fields.' + property + '.' + option, value);
    };
  }

  _export('field', field);

  return {
    setters: [function (_metadata) {
      Metadata = _metadata.Metadata;
    }],
    execute: function () {}
  };
});