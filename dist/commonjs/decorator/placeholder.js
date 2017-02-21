'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeholder = placeholder;

var _field = require('./field');

function placeholder(value) {
  return (0, _field.field)(value, 'placeholder');
}