'use strict';

System.register(['./config', 'aurelia-view-manager', './attributes', './entity-schema', './form', './utils', './converter/normalizeOptions', './component/entity-form', './component/schema-form', './component/form-fields', './component/form-field', './component/framework/options', './component/framework/form-group', './component/framework/conditional', './component/framework/collection', './component/framework/actions', './component/framework/bootstrap/actions', './component/framework/bootstrap/checkboxes', './component/framework/bootstrap/collection', './component/framework/bootstrap/conditional', './component/framework/bootstrap/form-group', './component/framework/bootstrap/radios', './component/framework/bootstrap/select'], function (_export, _context) {
  "use strict";

  var Config, ViewManagerConfig;
  function configure(aurelia, configOrConfigure) {
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

    if (typeof configOrConfigure === 'function') {
      configOrConfigure(formConfig);
    } else if (configOrConfigure) {
      formConfig.configure(configOrConfigure);
    }

    aurelia.globalResources('./component/entity-form', './component/schema-form', './component/form-fields', './component/form-field');
  }

  _export('configure', configure);

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_aureliaViewManager) {
      ViewManagerConfig = _aureliaViewManager.Config;
    }, function (_attributes) {
      var _exportObj = {};
      _exportObj.AttributesCustomAttribute = _attributes.AttributesCustomAttribute;

      _export(_exportObj);
    }, function (_entitySchema) {
      var _exportObj2 = {};
      _exportObj2.entitySchema = _entitySchema.entitySchema;

      _export(_exportObj2);
    }, function (_form) {
      var _exportObj3 = {};
      _exportObj3.Form = _form.Form;

      _export(_exportObj3);
    }, function (_utils) {
      var _exportObj4 = {};
      _exportObj4.normalizeOptions = _utils.normalizeOptions;

      _export(_exportObj4);
    }, function (_converterNormalizeOptions) {
      var _exportObj5 = {};
      _exportObj5.normalizeOptionsValueConverter = _converterNormalizeOptions.normalizeOptionsValueConverter;

      _export(_exportObj5);
    }, function (_componentEntityForm) {
      var _exportObj6 = {};
      _exportObj6.EntityForm = _componentEntityForm.EntityForm;

      _export(_exportObj6);
    }, function (_componentSchemaForm) {
      var _exportObj7 = {};
      _exportObj7.SchemaForm = _componentSchemaForm.SchemaForm;

      _export(_exportObj7);
    }, function (_componentFormFields) {
      var _exportObj8 = {};
      _exportObj8.FormFields = _componentFormFields.FormFields;

      _export(_exportObj8);
    }, function (_componentFormField) {
      var _exportObj9 = {};
      _exportObj9.FormField = _componentFormField.FormField;

      _export(_exportObj9);
    }, function (_componentFrameworkOptions) {
      var _exportObj10 = {};
      _exportObj10.Options = _componentFrameworkOptions.Options;

      _export(_exportObj10);
    }, function (_componentFrameworkFormGroup) {
      var _exportObj11 = {};
      _exportObj11.FormGroup = _componentFrameworkFormGroup.FormGroup;

      _export(_exportObj11);
    }, function (_componentFrameworkConditional) {
      var _exportObj12 = {};
      _exportObj12.Conditional = _componentFrameworkConditional.Conditional;

      _export(_exportObj12);
    }, function (_componentFrameworkCollection) {
      var _exportObj13 = {};
      _exportObj13.Collection = _componentFrameworkCollection.Collection;

      _export(_exportObj13);
    }, function (_componentFrameworkActions) {
      var _exportObj14 = {};
      _exportObj14.Actions = _componentFrameworkActions.Actions;

      _export(_exportObj14);
    }, function (_componentFrameworkBootstrapActions) {
      var _exportObj15 = {};
      _exportObj15.ActionsCustomElement = _componentFrameworkBootstrapActions.ActionsCustomElement;

      _export(_exportObj15);
    }, function (_componentFrameworkBootstrapCheckboxes) {
      var _exportObj16 = {};
      _exportObj16.CheckboxesElement = _componentFrameworkBootstrapCheckboxes.CheckboxesElement;

      _export(_exportObj16);
    }, function (_componentFrameworkBootstrapCollection) {
      var _exportObj17 = {};
      _exportObj17.CollectionCustomElement = _componentFrameworkBootstrapCollection.CollectionCustomElement;

      _export(_exportObj17);
    }, function (_componentFrameworkBootstrapConditional) {
      var _exportObj18 = {};
      _exportObj18.ConditionalCustomElement = _componentFrameworkBootstrapConditional.ConditionalCustomElement;

      _export(_exportObj18);
    }, function (_componentFrameworkBootstrapFormGroup) {
      var _exportObj19 = {};
      _exportObj19.FormGroupCustomElement = _componentFrameworkBootstrapFormGroup.FormGroupCustomElement;

      _export(_exportObj19);
    }, function (_componentFrameworkBootstrapRadios) {
      var _exportObj20 = {};
      _exportObj20.RadiosElement = _componentFrameworkBootstrapRadios.RadiosElement;

      _export(_exportObj20);
    }, function (_componentFrameworkBootstrapSelect) {
      var _exportObj21 = {};
      _exportObj21.SelectElement = _componentFrameworkBootstrapSelect.SelectElement;

      _export(_exportObj21);
    }],
    execute: function () {
      _export('Config', Config);
    }
  };
});