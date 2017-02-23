define(['exports', './decorator/index', 'aurelia-view-manager', 'aurelia-logging'], function (exports, _index, _aureliaViewManager, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.config = exports.logger = undefined;
  Object.keys(_index).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _index[key];
      }
    });
  });
  exports.configure = configure;
  var logger = exports.logger = (0, _aureliaLogging.getLogger)('aurelia-form');

  function configure(aurelia, config) {
    aurelia.aurelia.use.plugin('aurelia-view-manager');

    aurelia.container.get(_aureliaViewManager.Config).configureNamespace('spoonx/form', {
      location: './view/{{framework}}/{{view}}.html'
    });

    var defaultComponents = ['aurelia-form', 'form-element', 'form-label', 'form-button', 'form-help', 'form-error', 'form-group', 'entity-form'];

    var defaultElements = ['input', 'checkbox', 'radio', 'select', 'textarea', 'association'];

    aurelia.globalResources.apply(aurelia, ['./attribute/prefixed'].concat(defaultComponents.map(function (component) {
      return './component/' + component;
    }), defaultElements.map(function (component) {
      return './component/form-' + component;
    })));

    config.elements = config.elements || {};

    defaultElements.forEach(function (element) {
      config.elements[element] = config.elements[element] || 'form-' + element;
    });
  }

  var config = exports.config = {
    'aurelia-form': {
      defaultElement: 'input',
      defaultBehavior: 'regular',
      elements: {},
      validation: {},

      submitButton: {
        enabled: true,
        options: ['primary'],
        label: 'Submit'
      },

      aliases: {
        enum: 'radio',
        int: 'input',
        integer: 'input',
        number: 'input',
        float: 'input',
        string: 'input',
        bool: 'checkbox',
        boolean: 'checkbox',
        text: 'textarea'
      }
    }
  };
});