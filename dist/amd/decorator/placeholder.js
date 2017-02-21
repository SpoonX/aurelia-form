define(['exports', './field'], function (exports, _field) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.placeholder = placeholder;
  function placeholder(value) {
    return (0, _field.field)(value, 'placeholder');
  }
});