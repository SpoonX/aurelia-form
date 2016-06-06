System.register(['./config', './entity-schema'], function (_export) {
  'use strict';

  var Config, entitySchema;

  function configure(aurelia, configCallback) {
    var config = aurelia.container.get(Config);

    configCallback(config);

    aurelia.globalResources('./schema-form', './form-fields', './form-field');
  }

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_entitySchema) {
      entitySchema = _entitySchema.entitySchema;
    }],
    execute: function () {
      _export('configure', configure);

      _export('entitySchema', entitySchema);
    }
  };
});