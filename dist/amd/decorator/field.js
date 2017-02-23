define(['exports', '../metadata'], function (exports, _metadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.field = field;
  function field(value, option) {
    return function (target, property) {
      _metadata.Metadata.forTarget(target.constructor).put('fields.' + property + '.' + option, value);
    };
  }
});