define(['exports', './field'], function (exports, _field) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.options = options;
  function options() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _field.field)(value, 'options');
  }
});