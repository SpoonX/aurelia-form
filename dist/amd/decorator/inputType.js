define(['exports', './field'], function (exports, _field) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.inputType = inputType;
  function inputType(value) {
    return (0, _field.field)(value, 'type');
  }
});