'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readonly = readonly;

var _field = require('./field');

function readonly() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return (0, _field.field)(value, 'readonly');
}