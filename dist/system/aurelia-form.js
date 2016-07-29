'use strict';

System.register(['aurelia-logging', './config', 'aurelia-view-manager', './entity-schema', './form', './utils'], function (_export, _context) {
  "use strict";

  var getLogger, Config, ViewManagerConfig, logger;
  return {
    setters: [function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_config) {
      Config = _config.Config;
    }, function (_aureliaViewManager) {
      ViewManagerConfig = _aureliaViewManager.Config;
    }, function (_entitySchema) {
      var _exportObj = {};
      _exportObj.entitySchema = _entitySchema.entitySchema;

      _export(_exportObj);
    }, function (_form) {
      var _exportObj2 = {};
      _exportObj2.Form = _form.Form;

      _export(_exportObj2);
    }, function (_utils) {
      var _exportObj3 = {};

      for (var _key in _utils) {
        if (_key !== "default") _exportObj3[_key] = _utils[_key];
      }

      _export(_exportObj3);
    }],
    execute: function () {
      function configure(aurelia, configCallback) {
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

      _export('configure', configure);

      _export('logger', logger = getLogger('aurelia-form'));

      _export('logger', logger);
    }
  };
});