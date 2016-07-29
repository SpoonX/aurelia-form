'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeOptions = normalizeOptions;
function normalizeOptions(options) {
  return options.map(function (option) {
    if (typeof option === 'string') {
      return {
        name: option,
        value: option
      };
    }

    if (option.name && option.value) {
      return option;
    }

    if (option.name || option.value) {
      return {
        name: option.name || option.value,
        value: option.name || option.value
      };
    }
  });
}