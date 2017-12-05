'use strict';

System.register(['aurelia-view-manager', 'aurelia-logging', 'aurelia-metadata', 'homefront'], function (_export, _context) {
  "use strict";

  var ViewManagerConfig, getLogger, metadata, Homefront, logger, config, Metadata;

  

  function configure(aurelia, config) {
    aurelia.aurelia.use.plugin('aurelia-view-manager');

    aurelia.container.get(ViewManagerConfig).configureNamespace('spoonx/form', {
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

  _export('configure', configure);

  function autofocus() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return field(value, 'autofocus');
  }

  _export('autofocus', autofocus);

  function disabled() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return field(value, 'disabled');
  }

  _export('disabled', disabled);

  function element(value) {
    return field(value, 'element');
  }

  _export('element', element);

  function field(value, option) {
    return function (target, property) {
      Metadata.forTarget(target.constructor).put('fields.' + property + '.' + option, value);
    };
  }

  _export('field', field);

  function inputType(value) {
    return field(value, 'type');
  }

  _export('inputType', inputType);

  function label(value) {
    return field(value, 'label');
  }

  _export('label', label);

  function noRender() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return field(value, 'noRender');
  }

  _export('noRender', noRender);

  function options() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return field(value, 'options');
  }

  _export('options', options);

  function placeholder(value) {
    return field(value, 'placeholder');
  }

  _export('placeholder', placeholder);

  function position() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

    return field(value, 'position');
  }

  _export('position', position);

  function readonly() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return field(value, 'readonly');
  }

  _export('readonly', readonly);

  function required() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return field(value, 'required');
  }

  _export('required', required);

  return {
    setters: [function (_aureliaViewManager) {
      ViewManagerConfig = _aureliaViewManager.Config;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_homefront) {
      Homefront = _homefront.Homefront;
    }],
    execute: function () {
      _export('logger', logger = getLogger('aurelia-form'));

      _export('logger', logger);

      _export('config', config = {
        'aurelia-form': {
          defaultElement: 'input',
          defaultBehavior: 'regular',
          defaultLabelClasses: '',
          defaultElementClasses: '',
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

      _export('Metadata', Metadata = function () {
        function Metadata() {
          
        }

        Metadata.forTarget = function forTarget(target) {
          if (typeof target !== 'function') {
            target = target.constructor;
          }

          return metadata.getOrCreateOwn('spoonx:form:metadata', Homefront, target, target.name);
        };

        return Metadata;
      }());

      _export('Metadata', Metadata);
    }
  };
});