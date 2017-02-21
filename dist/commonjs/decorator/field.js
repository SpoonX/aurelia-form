'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.field = field;

var _Metadata = require('../Metadata');

function field(value, option) {
  return function (target, property) {
    _Metadata.Metadata.forTarget(target.constructor).put('fields.' + property + '.' + option, value);
  };
}