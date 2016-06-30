define(['exports', './entity-schema', './form', './config', 'aurelia-view-manager'], function (exports, _entitySchema, _form, _config, _aureliaViewManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Config = exports.Form = exports.entitySchema = undefined;
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
  exports.configure = configure;
  function configure(aurelia, configCallback) {
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

        text: '{{framepath}}/input.html',
        button: '{{framepath}}/input.html',
        color: '{{framepath}}/input.html',
        date: '{{framepath}}/input.html',
        datetime: '{{framepath}}/input.html',
        'datetime-local': '{{framepath}}/input.html',
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
        undefined: 'text',
        null: 'text',
        int: 'number',
        integer: 'number',
        float: 'number',
        string: 'text',
        bool: 'checkbox',
        boolean: 'checkbox'
      }
    });

    if (typeof configCallback === 'function') {
      configCallback(formConfig);
    }

    aurelia.globalResources('./component/entity-form', './component/schema-form', './component/form-fields', './component/form-field');
  }

  exports.Config = _config.Config;
});