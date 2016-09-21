'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = exports.SelectElement = exports.RadiosElement = exports.FormGroupCustomElement = exports.ConditionalCustomElement = exports.CollectionCustomElement = exports.CheckboxesElement = exports.ActionsCustomElement = exports.Actions = exports.Collection = exports.Conditional = exports.FormGroup = exports.Options = exports.FormField = exports.FormFields = exports.SchemaForm = exports.EntityForm = exports.normalizeOptionsValueConverter = exports.normalizeOptions = exports.Form = exports.entitySchema = exports.AttributesCustomAttribute = undefined;

var _attributes = require('./attributes');

Object.defineProperty(exports, 'AttributesCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _attributes.AttributesCustomAttribute;
  }
});

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

Object.defineProperty(exports, 'normalizeOptions', {
  enumerable: true,
  get: function get() {
    return _utils.normalizeOptions;
  }
});

var _normalizeOptions = require('./converter/normalizeOptions');

Object.defineProperty(exports, 'normalizeOptionsValueConverter', {
  enumerable: true,
  get: function get() {
    return _normalizeOptions.normalizeOptionsValueConverter;
  }
});

var _entityForm = require('./component/entity-form');

Object.defineProperty(exports, 'EntityForm', {
  enumerable: true,
  get: function get() {
    return _entityForm.EntityForm;
  }
});

var _schemaForm = require('./component/schema-form');

Object.defineProperty(exports, 'SchemaForm', {
  enumerable: true,
  get: function get() {
    return _schemaForm.SchemaForm;
  }
});

var _formFields = require('./component/form-fields');

Object.defineProperty(exports, 'FormFields', {
  enumerable: true,
  get: function get() {
    return _formFields.FormFields;
  }
});

var _formField = require('./component/form-field');

Object.defineProperty(exports, 'FormField', {
  enumerable: true,
  get: function get() {
    return _formField.FormField;
  }
});

var _options = require('./component/framework/options');

Object.defineProperty(exports, 'Options', {
  enumerable: true,
  get: function get() {
    return _options.Options;
  }
});

var _formGroup = require('./component/framework/form-group');

Object.defineProperty(exports, 'FormGroup', {
  enumerable: true,
  get: function get() {
    return _formGroup.FormGroup;
  }
});

var _conditional = require('./component/framework/conditional');

Object.defineProperty(exports, 'Conditional', {
  enumerable: true,
  get: function get() {
    return _conditional.Conditional;
  }
});

var _collection = require('./component/framework/collection');

Object.defineProperty(exports, 'Collection', {
  enumerable: true,
  get: function get() {
    return _collection.Collection;
  }
});

var _actions = require('./component/framework/actions');

Object.defineProperty(exports, 'Actions', {
  enumerable: true,
  get: function get() {
    return _actions.Actions;
  }
});

var _actions2 = require('./component/framework/bootstrap/actions');

Object.defineProperty(exports, 'ActionsCustomElement', {
  enumerable: true,
  get: function get() {
    return _actions2.ActionsCustomElement;
  }
});

var _checkboxes = require('./component/framework/bootstrap/checkboxes');

Object.defineProperty(exports, 'CheckboxesElement', {
  enumerable: true,
  get: function get() {
    return _checkboxes.CheckboxesElement;
  }
});

var _collection2 = require('./component/framework/bootstrap/collection');

Object.defineProperty(exports, 'CollectionCustomElement', {
  enumerable: true,
  get: function get() {
    return _collection2.CollectionCustomElement;
  }
});

var _conditional2 = require('./component/framework/bootstrap/conditional');

Object.defineProperty(exports, 'ConditionalCustomElement', {
  enumerable: true,
  get: function get() {
    return _conditional2.ConditionalCustomElement;
  }
});

var _formGroup2 = require('./component/framework/bootstrap/form-group');

Object.defineProperty(exports, 'FormGroupCustomElement', {
  enumerable: true,
  get: function get() {
    return _formGroup2.FormGroupCustomElement;
  }
});

var _radios = require('./component/framework/bootstrap/radios');

Object.defineProperty(exports, 'RadiosElement', {
  enumerable: true,
  get: function get() {
    return _radios.RadiosElement;
  }
});

var _select = require('./component/framework/bootstrap/select');

Object.defineProperty(exports, 'SelectElement', {
  enumerable: true,
  get: function get() {
    return _select.SelectElement;
  }
});
exports.configure = configure;

var _config = require('./config');

var _aureliaViewManager = require('aurelia-view-manager');

function configure(aurelia, configOrConfigure) {
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
      computed: 'conditional',
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

  if (typeof configOrConfigure === 'function') {
    configOrConfigure(formConfig);
  } else if (configOrConfigure) {
    formConfig.configure(configOrConfigure);
  }

  aurelia.globalResources('./component/entity-form', './component/schema-form', './component/form-fields', './component/form-field');
}

exports.Config = _config.Config;