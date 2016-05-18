'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _config = require('./config');

function configure(aurelia, configCallback) {
  var config = aurelia.container.get(_config.Config);

  configCallback(config);

  aurelia.globalResources('./schema-form', './schema-form-elements', './schema-form-element');
}

exports.configure = configure;