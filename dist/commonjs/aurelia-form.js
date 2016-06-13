'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _config = require('./config');

var _entitySchema = require('./entity-schema');

function configure(aurelia, configCallback) {
  var config = aurelia.container.get(_config.Config);

  configCallback(config);

  aurelia.globalResources('./schema-form', './form-fields', './form-field');
}

exports.configure = configure;
exports.entitySchema = _entitySchema.entitySchema;