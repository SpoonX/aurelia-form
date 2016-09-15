define(['exports', 'aurelia-logging', './config', 'aurelia-view-manager', './attributes', './entity-schema', './form', './utils', './converter/normalizeOptions', './component/entity-form', './component/schema-form', './component/form-fields', './component/form-field', './component/framework/options', './component/framework/form-group', './component/framework/conditional', './component/framework/collection', './component/framework/actions', './component/framework/bootstrap/actions', './component/framework/bootstrap/checkboxes', './component/framework/bootstrap/collection', './component/framework/bootstrap/conditional', './component/framework/bootstrap/form-group', './component/framework/bootstrap/radios', './component/framework/bootstrap/select'], function (exports, _aureliaLogging, _config, _aureliaViewManager, _attributes, _entitySchema, _form, _utils, _normalizeOptions, _entityForm, _schemaForm, _formFields, _formField, _options, _formGroup, _conditional, _collection, _actions, _actions2, _checkboxes, _collection2, _conditional2, _formGroup2, _radios, _select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.entitySchema = exports.normalizeOptions = exports.Form = exports.Config = exports.logger = undefined;
  exports.configure = configure;
  function configure(aurelia, configCOrConfigure) {
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

    if (typeof configCOrConfigure === 'function') {
      configCOrConfigure(formConfig);
    } else if (configCOrConfigure) {
      formConfig.configure(configCOrConfigure);
    }

    aurelia.globalResources('./component/entity-form', './component/schema-form', './component/form-fields', './component/form-field');
  }

  var logger = exports.logger = (0, _aureliaLogging.getLogger)('aurelia-form');

  exports.Config = _config.Config;
  exports.Form = _form.Form;
  exports.normalizeOptions = _utils.normalizeOptions;
  exports.entitySchema = _entitySchema.entitySchema;
});