'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaForm = require('./aurelia-form');

Object.keys(_aureliaForm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaForm[key];
    }
  });
});