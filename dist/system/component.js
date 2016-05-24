System.register([], function (_export) {
  'use strict';

  _export('component', component);

  function component(config, attribute) {
    var type = attribute.type;

    return customComponent() || frameworkComponent() || console.warn('type ' + type + ' does not have a component registered for it.');

    function customComponent() {
      var comp = config.components[type];
      return comp ? comp.replace('{{location}}', config.location) : false;
    }

    function frameworkComponent() {
      var comp = config.frameworkComponents[type];
      return comp ? frameworkDir(config.framework) + '/' + comp : false;
    }
  }

  function frameworkDir(framework) {
    return './frameworks/' + framework;
  }
  return {
    setters: [],
    execute: function () {}
  };
});