define(['exports', '../utils'], function (exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.normalizeOptionsValueConverter = undefined;

  

  var normalizeOptionsValueConverter = exports.normalizeOptionsValueConverter = function () {
    function normalizeOptionsValueConverter() {
      
    }

    normalizeOptionsValueConverter.prototype.toView = function toView(options) {
      return (0, _utils.normalizeOptions)(options);
    };

    return normalizeOptionsValueConverter;
  }();
});