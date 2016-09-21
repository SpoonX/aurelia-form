define(['exports', './attributes', './entity-schema', './form', './utils', './converter/normalizeOptions', './component/entity-form', './component/schema-form', './component/form-fields', './component/form-field', './component/framework/options', './component/framework/form-group', './component/framework/conditional', './component/framework/collection', './component/framework/actions', './component/framework/bootstrap/actions', './component/framework/bootstrap/checkboxes', './component/framework/bootstrap/collection', './component/framework/bootstrap/conditional', './component/framework/bootstrap/form-group', './component/framework/bootstrap/radios', './component/framework/bootstrap/select', './config', 'aurelia-view-manager'], function (exports, _attributes, _entitySchema, _form, _utils, _normalizeOptions, _entityForm, _schemaForm, _formFields, _formField, _options, _formGroup, _conditional, _collection, _actions, _actions2, _checkboxes, _collection2, _conditional2, _formGroup2, _radios, _select, _config, _aureliaViewManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Config = exports.SelectElement = exports.RadiosElement = exports.FormGroupCustomElement = exports.ConditionalCustomElement = exports.CollectionCustomElement = exports.CheckboxesElement = exports.ActionsCustomElement = exports.Actions = exports.Collection = exports.Conditional = exports.FormGroup = exports.Options = exports.FormField = exports.FormFields = exports.SchemaForm = exports.EntityForm = exports.normalizeOptionsValueConverter = exports.normalizeOptions = exports.Form = exports.entitySchema = exports.AttributesCustomAttribute = undefined;
  Object.defineProperty(exports, 'AttributesCustomAttribute', {
    enumerable: true,
    get: function () {
      return _attributes.AttributesCustomAttribute;
    }
  });
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
  Object.defineProperty(exports, 'normalizeOptions', {
    enumerable: true,
    get: function () {
      return _utils.normalizeOptions;
    }
  });
  Object.defineProperty(exports, 'normalizeOptionsValueConverter', {
    enumerable: true,
    get: function () {
      return _normalizeOptions.normalizeOptionsValueConverter;
    }
  });
  Object.defineProperty(exports, 'EntityForm', {
    enumerable: true,
    get: function () {
      return _entityForm.EntityForm;
    }
  });
  Object.defineProperty(exports, 'SchemaForm', {
    enumerable: true,
    get: function () {
      return _schemaForm.SchemaForm;
    }
  });
  Object.defineProperty(exports, 'FormFields', {
    enumerable: true,
    get: function () {
      return _formFields.FormFields;
    }
  });
  Object.defineProperty(exports, 'FormField', {
    enumerable: true,
    get: function () {
      return _formField.FormField;
    }
  });
  Object.defineProperty(exports, 'Options', {
    enumerable: true,
    get: function () {
      return _options.Options;
    }
  });
  Object.defineProperty(exports, 'FormGroup', {
    enumerable: true,
    get: function () {
      return _formGroup.FormGroup;
    }
  });
  Object.defineProperty(exports, 'Conditional', {
    enumerable: true,
    get: function () {
      return _conditional.Conditional;
    }
  });
  Object.defineProperty(exports, 'Collection', {
    enumerable: true,
    get: function () {
      return _collection.Collection;
    }
  });
  Object.defineProperty(exports, 'Actions', {
    enumerable: true,
    get: function () {
      return _actions.Actions;
    }
  });
  Object.defineProperty(exports, 'ActionsCustomElement', {
    enumerable: true,
    get: function () {
      return _actions2.ActionsCustomElement;
    }
  });
  Object.defineProperty(exports, 'CheckboxesElement', {
    enumerable: true,
    get: function () {
      return _checkboxes.CheckboxesElement;
    }
  });
  Object.defineProperty(exports, 'CollectionCustomElement', {
    enumerable: true,
    get: function () {
      return _collection2.CollectionCustomElement;
    }
  });
  Object.defineProperty(exports, 'ConditionalCustomElement', {
    enumerable: true,
    get: function () {
      return _conditional2.ConditionalCustomElement;
    }
  });
  Object.defineProperty(exports, 'FormGroupCustomElement', {
    enumerable: true,
    get: function () {
      return _formGroup2.FormGroupCustomElement;
    }
  });
  Object.defineProperty(exports, 'RadiosElement', {
    enumerable: true,
    get: function () {
      return _radios.RadiosElement;
    }
  });
  Object.defineProperty(exports, 'SelectElement', {
    enumerable: true,
    get: function () {
      return _select.SelectElement;
    }
  });
  exports.configure = configure;
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
});