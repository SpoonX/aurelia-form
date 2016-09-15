'use strict';

System.register(['aurelia-logging', './config', 'aurelia-view-manager', './attributes', './entity-schema', './form', './utils', './converter/normalizeOptions', './component/entity-form', './component/schema-form', './component/form-fields', './component/form-field', './component/framework/options', './component/framework/form-group', './component/framework/conditional', './component/framework/collection', './component/framework/actions', './component/framework/bootstrap/actions', './component/framework/bootstrap/checkboxes', './component/framework/bootstrap/collection', './component/framework/bootstrap/conditional', './component/framework/bootstrap/form-group', './component/framework/bootstrap/radios', './component/framework/bootstrap/select'], function (_export, _context) {
  "use strict";

  var getLogger, Config, ViewManagerConfig, AttributesCustomAttribute, entitySchema, Form, normalizeOptions, normalizeOptionsValueConverter, EntityForm, SchemaForm, FormFields, FormField, Options, FormGroup, Conditional, Collection, Actions, ActionsCustomElement, CheckboxesElement, CollectionCustomElement, ConditionalCustomElement, FormGroupCustomElement, RadiosElement, SelectElement, logger;
  return {
    setters: [function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_config) {
      Config = _config.Config;
    }, function (_aureliaViewManager) {
      ViewManagerConfig = _aureliaViewManager.Config;
    }, function (_attributes) {
      AttributesCustomAttribute = _attributes.AttributesCustomAttribute;
    }, function (_entitySchema) {
      entitySchema = _entitySchema.entitySchema;
    }, function (_form) {
      Form = _form.Form;
    }, function (_utils) {
      normalizeOptions = _utils.normalizeOptions;
    }, function (_converterNormalizeOptions) {
      normalizeOptionsValueConverter = _converterNormalizeOptions.normalizeOptionsValueConverter;
    }, function (_componentEntityForm) {
      EntityForm = _componentEntityForm.EntityForm;
    }, function (_componentSchemaForm) {
      SchemaForm = _componentSchemaForm.SchemaForm;
    }, function (_componentFormFields) {
      FormFields = _componentFormFields.FormFields;
    }, function (_componentFormField) {
      FormField = _componentFormField.FormField;
    }, function (_componentFrameworkOptions) {
      Options = _componentFrameworkOptions.Options;
    }, function (_componentFrameworkFormGroup) {
      FormGroup = _componentFrameworkFormGroup.FormGroup;
    }, function (_componentFrameworkConditional) {
      Conditional = _componentFrameworkConditional.Conditional;
    }, function (_componentFrameworkCollection) {
      Collection = _componentFrameworkCollection.Collection;
    }, function (_componentFrameworkActions) {
      Actions = _componentFrameworkActions.Actions;
    }, function (_componentFrameworkBootstrapActions) {
      ActionsCustomElement = _componentFrameworkBootstrapActions.ActionsCustomElement;
    }, function (_componentFrameworkBootstrapCheckboxes) {
      CheckboxesElement = _componentFrameworkBootstrapCheckboxes.CheckboxesElement;
    }, function (_componentFrameworkBootstrapCollection) {
      CollectionCustomElement = _componentFrameworkBootstrapCollection.CollectionCustomElement;
    }, function (_componentFrameworkBootstrapConditional) {
      ConditionalCustomElement = _componentFrameworkBootstrapConditional.ConditionalCustomElement;
    }, function (_componentFrameworkBootstrapFormGroup) {
      FormGroupCustomElement = _componentFrameworkBootstrapFormGroup.FormGroupCustomElement;
    }, function (_componentFrameworkBootstrapRadios) {
      RadiosElement = _componentFrameworkBootstrapRadios.RadiosElement;
    }, function (_componentFrameworkBootstrapSelect) {
      SelectElement = _componentFrameworkBootstrapSelect.SelectElement;
    }],
    execute: function () {
      function configure(aurelia, configCOrConfigure) {
        aurelia.aurelia.use.plugin('aurelia-view-manager');
        var viewManagerConfig = aurelia.container.get(ViewManagerConfig);
        var formConfig = aurelia.container.get(Config);

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

      _export('configure', configure);

      _export('logger', logger = getLogger('aurelia-form'));

      _export('logger', logger);

      _export('Config', Config);

      _export('Form', Form);

      _export('normalizeOptions', normalizeOptions);

      _export('entitySchema', entitySchema);
    }
  };
});