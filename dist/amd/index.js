define(['exports', './aurelia-form'], function (exports, _aureliaForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaForm).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaForm[key];
      }
    });
  });
});