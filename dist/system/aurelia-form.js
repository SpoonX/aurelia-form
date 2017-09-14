'use strict';

System.register(['aurelia-view-manager', 'aurelia-logging', 'aurelia-metadata', 'homefront', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var ViewManagerConfig, resolvedView, getLogger, metadata, Homefront, bindable, customElement, bindingMode, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, logger, config, Metadata, FormCheckbox;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  

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
      resolvedView = _aureliaViewManager.resolvedView;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_homefront) {
      Homefront = _homefront.Homefront;
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
      bindingMode = _aureliaFramework.bindingMode;
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

      _export('FormCheckbox', FormCheckbox = (_dec = resolvedView('spoonx/form', 'form-checkbox'), _dec2 = customElement('form-checkbox'), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function FormCheckbox() {
        

        _initDefineProp(this, 'name', _descriptor, this);

        _initDefineProp(this, 'value', _descriptor2, this);

        _initDefineProp(this, 'option', _descriptor3, this);

        _initDefineProp(this, 'type', _descriptor4, this);

        _initDefineProp(this, 'classes', _descriptor5, this);

        _initDefineProp(this, 'placeholder', _descriptor6, this);

        _initDefineProp(this, 'readonly', _descriptor7, this);

        _initDefineProp(this, 'disabled', _descriptor8, this);

        _initDefineProp(this, 'options', _descriptor9, this);

        _initDefineProp(this, 'autofocus', _descriptor10, this);

        _initDefineProp(this, 'required', _descriptor11, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'option', [_dec4], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'text';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return {};
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'autofocus', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('FormCheckbox', FormCheckbox);
    }
  };
});