'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Metadata = exports.config = exports.logger = undefined;
exports.configure = configure;
exports.autofocus = autofocus;
exports.disabled = disabled;
exports.element = element;
exports.field = field;
exports.inputType = inputType;
exports.label = label;
exports.noRender = noRender;
exports.options = options;
exports.placeholder = placeholder;
exports.position = position;
exports.readonly = readonly;
exports.required = required;

var _aureliaViewManager = require('aurelia-view-manager');

var _aureliaLogging = require('aurelia-logging');

var _aureliaMetadata = require('aurelia-metadata');

var _homefront = require('homefront');



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
};

var Metadata = exports.Metadata = function () {
  function Metadata() {
    
  }

  Metadata.forTarget = function forTarget(target) {
    if (typeof target !== 'function') {
      target = target.constructor;
    }

    return _aureliaMetadata.metadata.getOrCreateOwn('spoonx:form:metadata', _homefront.Homefront, target, target.name);
  };

  return Metadata;
}();

function autofocus() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return field(value, 'autofocus');
}

function disabled() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return field(value, 'disabled');
}

function element(value) {
  return field(value, 'element');
}

function field(value, option) {
  return function (target, property) {
    Metadata.forTarget(target.constructor).put('fields.' + property + '.' + option, value);
  };
}

function inputType(value) {
  return field(value, 'type');
}

function label(value) {
  return field(value, 'label');
}

function noRender() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return field(value, 'noRender');
}

function options() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return field(value, 'options');
}

function placeholder(value) {
  return field(value, 'placeholder');
}

function position() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

  return field(value, 'position');
}

function readonly() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return field(value, 'readonly');
}

function required() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return field(value, 'required');
}