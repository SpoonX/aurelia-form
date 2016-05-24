'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.component = component;

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