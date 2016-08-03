'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.Form = exports.entitySchema = undefined;

var _entitySchema = require('./entity-schema');

Object.defineProperty(exports, 'entitySchema', {
  enumerable: true,
  get: function get() {
    return _entitySchema.entitySchema;
  }
});

var _form = require('./form');

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _form.Form;
  }
});

var _utils = require('./utils');

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _normalizeOptions = require('./converter/normalizeOptions');

Object.keys(_normalizeOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _normalizeOptions[key];
    }
  });
});
exports.configure = configure;

var _aureliaLogging = require('aurelia-logging');

var _config = require('./config');

var _aureliaViewManager = require('aurelia-view-manager');

function configure(aurelia, configCallback) {
  aurelia.aurelia.use.plugin('aurelia-view-manager');
  var viewManagerConfig = aurelia.container.get(_aureliaViewManager.Config);
  var formConfig = aurelia.container.get(_config.Config);

  viewManagerConfig.configureNamespace('spoonx/form', {
    framepath: '{{base}}/framework/{{framework}}',
    base: './../component',
    location: '{{framepath}}/{{view}}.html',
    map: {
      'form-field': './form-field.html',
      'form-fields': './form-fields.html',
      'schema-form': './schema-form.html',
      'entity-form': './schema-form.html',

      actions: '{{framepath}}/actions',
      collection: '{{framepath}}/collection',
      conditional: '{{framepath}}/conditional',
      select: '{{framepath}}/select',
      radios: '{{framepath}}/radios',
      checkboxes: '{{framepath}}/checkboxes',

      button: '{{framepath}}/input.html',
      color: '{{framepath}}/input.html',
      date: '{{framepath}}/input.html',
      datetime: '{{framepath}}/input.html',
      'datetime-local': '{{framepath}}/input.html',
      string: '{{framepath}}/input.html',
      email: '{{framepath}}/input.html',
      month: '{{framepath}}/input.html',
      number: '{{framepath}}/input.html',
      password: '{{framepath}}/input.html',
      range: '{{framepath}}/input.html',
      search: '{{framepath}}/input.html',
      tel: '{{framepath}}/input.html',
      time: '{{framepath}}/input.html',
      url: '{{framepath}}/input.html',
      week: '{{framepath}}/input.html'
    }
  });

  formConfig.configure({
    aliases: {
      options: 'select',
      buttons: 'actions',
      nested: 'fieldset',
      undefined: 'string',
      null: 'string',
      int: 'number',
      integer: 'number',
      float: 'number',
      bool: 'checkbox',
      boolean: 'checkbox',
      text: 'textarea'
    }
  });

  if (typeof configCallback === 'function') {
    configCallback(formConfig);
  }

  aurelia.globalResources('./component/entity-form', './component/schema-form', './component/form-fields', './component/form-field');
}

var logger = exports.logger = (0, _aureliaLogging.getLogger)('aurelia-form');