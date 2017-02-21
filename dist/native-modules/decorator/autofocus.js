'use strict';

exports.__esModule = true;
exports.autofocus = autofocus;

var _field = require('./field');

function autofocus() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return (0, _field.field)(value, 'autofocus');
}