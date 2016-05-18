System.register(['./config'], function (_export) {
  'use strict';

  var Config;

  function configure(aurelia, configCallback) {
    var config = aurelia.container.get(Config);

    configCallback(config);

    aurelia.globalResources('./schema-form', './schema-form-elements', './schema-form-element');
  }

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }],
    execute: function () {
      _export('configure', configure);
    }
  };
});