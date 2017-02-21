'use strict';

System.register(['aurelia-view-manager', 'aurelia-logging', './decorator/index'], function (_export, _context) {
  "use strict";

  var ViewManagerConfig, getLogger, logger, config;
  function configure(aurelia, config) {
    aurelia.aurelia.use.plugin('aurelia-view-manager');

    aurelia.container.get(ViewManagerConfig).configureNamespace('spoonx/form', {
      location: './view/{{framework}}/{{view}}.html'
    });

    var defaultComponents = ['aurelia-form', 'form-element', 'form-label', 'form-button', 'form-help', 'form-error', 'form-group', 'entity-form'];

    var defaultElements = ['input', 'checkbox', 'radio', 'select', 'textarea'];

    aurelia.globalResources.apply(aurelia, ['./attribute/prefixed'].concat(defaultComponents.map(function (component) {
      return './component/' + component;
    }), defaultElements.map(function (component) {
      return './component/form-' + component;
    })));

    defaultElements.forEach(function (element) {
      config.elements[element] = 'form-' + element;
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaViewManager) {
      ViewManagerConfig = _aureliaViewManager.Config;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_decoratorIndex) {
      var _exportObj = {};

      for (var _key in _decoratorIndex) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _decoratorIndex[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {
      _export('logger', logger = getLogger('aurelia-form'));

      _export('logger', logger);

      _export('config', config = {
        'aurelia-form': {
          defaultElement: 'input',
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
      });

      _export('config', config);
    }
  };
});