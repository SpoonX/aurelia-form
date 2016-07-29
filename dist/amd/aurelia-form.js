define(['exports', './entity-schema', './form', './utils', 'aurelia-logging', './config', 'aurelia-view-manager'], function (exports, _entitySchema, _form, _utils, _aureliaLogging, _config, _aureliaViewManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.logger = exports.Form = exports.entitySchema = undefined;
  Object.defineProperty(exports, 'entitySchema', {
    enumerable: true,
    get: function () {
      return _entitySchema.entitySchema;
    }
  });
  Object.defineProperty(exports, 'Form', {
    enumerable: true,
    get: function () {
      return _form.Form;
    }
  });
  Object.keys(_utils).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _utils[key];
      }
    });
  });
  exports.configure = configure;
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
});