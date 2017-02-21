'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noRender = noRender;

var _field = require('./field');

function noRender() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return (0, _field.field)(value, 'noRender');
}