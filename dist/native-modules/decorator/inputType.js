'use strict';

exports.__esModule = true;
exports.inputType = inputType;

var _field = require('./field');

function inputType(value) {
  return (0, _field.field)(value, 'type');
}