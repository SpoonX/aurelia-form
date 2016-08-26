'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entitySchema = exports.normalizeOptions = exports.Form = exports.Config = exports.logger = undefined;
exports.configure = configure;

var _aureliaLogging = require('aurelia-logging');

var _config = require('./config');

var _aureliaViewManager = require('aurelia-view-manager');

var _attributes = require('./attributes');

var _entitySchema = require('./entity-schema');

var _form = require('./form');

var _utils = require('./utils');

var _normalizeOptions = require('./converter/normalizeOptions');

var _entityForm = require('./component/entity-form');

var _schemaForm = require('./component/schema-form');

var _formFields = require('./component/form-fields');

var _formField = require('./component/form-field');

var _options = require('./component/framework/options');

var _formGroup = require('./component/framework/form-group');

var _conditional = require('./component/framework/conditional');

var _collection = require('./component/framework/collection');

var _actions = require('./component/framework/actions');

var _actions2 = require('./component/framework/bootstrap/actions');

var _checkboxes = require('./component/framework/bootstrap/checkboxes');

var _collection2 = require('./component/framework/bootstrap/collection');

var _conditional2 = require('./component/framework/bootstrap/conditional');

var _formGroup2 = require('./component/framework/bootstrap/form-group');

var _radios = require('./component/framework/bootstrap/radios');

var _select = require('./component/framework/bootstrap/select');

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

      association: '{{framepath}}/association',
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

exports.Config = _config.Config;
exports.Form = _form.Form;
exports.normalizeOptions = _utils.normalizeOptions;
exports.entitySchema = _entitySchema.entitySchema;