define(['exports', './config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function configure(aurelia, configCallback) {
    var config = aurelia.container.get(_config.Config);

    configCallback(config);

    aurelia.globalResources('./schema-form', './form-fields', './form-field');
  }

  exports.configure = configure;
});