'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = options;

var _field = require('./field');

function options() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _field.field)(value, 'options');
}