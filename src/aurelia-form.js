import {Config} from './config';
import {Config as ViewManagerConfig} from 'aurelia-view-manager';

// added for bundling and extending
export {AttributesCustomAttribute}      from './attributes';
export {entitySchema}                   from './entity-schema';
export {Form}                           from './form';
export {normalizeOptions}               from './utils';
export {normalizeOptionsValueConverter} from './converter/normalizeOptions';
export {EntityForm}                     from './component/entity-form';
export {SchemaForm}                     from './component/schema-form';
export {FormFields}                     from './component/form-fields';
export {FormField}                      from './component/form-field';
export {Options}                        from './component/framework/options';
export {FormGroup}                      from './component/framework/form-group';
export {Conditional}                    from './component/framework/conditional';
export {Collection}                     from './component/framework/collection';
export {Actions}                        from './component/framework/actions';
export {ActionsCustomElement}           from './component/framework/bootstrap/actions';
export {CheckboxesElement}              from './component/framework/bootstrap/checkboxes';
export {CollectionCustomElement}        from './component/framework/bootstrap/collection';
export {ConditionalCustomElement}       from './component/framework/bootstrap/conditional';
export {FormGroupCustomElement}         from './component/framework/bootstrap/form-group';
export {RadiosElement}                  from './component/framework/bootstrap/radios';
export {SelectElement}                  from './component/framework/bootstrap/select';

export function configure(aurelia, configOrConfigure) {
  aurelia.aurelia.use.plugin('aurelia-view-manager');
  let viewManagerConfig = aurelia.container.get(ViewManagerConfig);
  let formConfig = aurelia.container.get(Config);

  viewManagerConfig.configureNamespace('spoonx/form', {
    framepath: '{{base}}/framework/{{framework}}', // framework path
    base: './../component',
    location: '{{framepath}}/{{view}}.html',
    map: {
      /* aurelia-form specific view are also overridable */
      'form-field': './form-field.html',
      'form-fields': './form-fields.html',
      'schema-form': './schema-form.html',
      'entity-form': './schema-form.html',

      /* custom elements with a view model do not end with .html */
      association: '{{framepath}}/association',
      actions: '{{framepath}}/actions',
      collection: '{{framepath}}/collection',
      conditional: '{{framepath}}/conditional',
      select: '{{framepath}}/select',
      radios: '{{framepath}}/radios',
      checkboxes: '{{framepath}}/checkboxes',

      /* all input components */
      button: '{{framepath}}/input',
      color: '{{framepath}}/input',
      date: '{{framepath}}/input',
      datetime: '{{framepath}}/input',
      'datetime-local': '{{framepath}}/input',
      string: '{{framepath}}/input',
      email: '{{framepath}}/input',
      month: '{{framepath}}/input',
      number: '{{framepath}}/input',
      password: '{{framepath}}/input',
      range: '{{framepath}}/input',
      search: '{{framepath}}/input',
      tel: '{{framepath}}/input',
      time: '{{framepath}}/input',
      url: '{{framepath}}/input',
      week: '{{framepath}}/input'
    }
  });

  formConfig.configure({
    /*
     * Instead of defining a framework or custom component for every variant
     * on the name of a type, it is easier to alias that variant so the
     * variant is changed to the main type.
     */
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

  aurelia.globalResources(
    './component/entity-form',
    './component/schema-form',
    './component/form-fields',
    './component/form-field'
  );
}

export {
  Config
};
