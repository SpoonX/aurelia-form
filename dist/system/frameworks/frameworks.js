System.register(['./bootstrap/components'], function (_export) {
  'use strict';

  var bootstrap;
  return {
    setters: [function (_bootstrapComponents) {
      bootstrap = _bootstrapComponents['default'];
    }],
    execute: function () {
      _export('default', {
        bootstrap: bootstrap
      });
    }
  };
});