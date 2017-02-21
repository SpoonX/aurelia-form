define(['exports', './field'], function (exports, _field) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.label = label;
  function label(value) {
    return (0, _field.field)(value, 'label');
  }
});