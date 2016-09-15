import {getLogger} from 'aurelia-logging';
import {Config} from './config';
import {Config as ViewManagerConfig} from 'aurelia-view-manager';

// added for bundling
import {AttributesCustomAttribute} from './attributes'; // eslint-disable-line no-unused-vars
import {entitySchema} from './entity-schema'; // eslint-disable-line no-unused-vars
import {Form} from './form'; // eslint-disable-line no-unused-vars
import {normalizeOptions} from './utils'; // eslint-disable-line no-unused-vars
import {normalizeOptionsValueConverter} from './converter/normalizeOptions'; // eslint-disable-line no-unused-vars
import {EntityForm} from './component/entity-form'; // eslint-disable-line no-unused-vars
import {SchemaForm} from './component/schema-form'; // eslint-disable-line no-unused-vars
import {FormFields} from './component/form-fields'; // eslint-disable-line no-unused-vars
import {FormField} from './component/form-field'; // eslint-disable-line no-unused-vars
import {Options} from './component/framework/options';// eslint-disable-line no-unused-vars
import {FormGroup} from './component/framework/form-group';// eslint-disable-line no-unused-vars
import {Conditional} from './component/framework/conditional';// eslint-disable-line no-unused-vars
import {Collection} from './component/framework/collection';// eslint-disable-line no-unused-vars
import {Actions} from './component/framework/actions';// eslint-disable-line no-unused-vars
import {ActionsCustomElement} from './component/framework/bootstrap/actions';// eslint-disable-line no-unused-vars
import {CheckboxesElement} from './component/framework/bootstrap/checkboxes';// eslint-disable-line no-unused-vars
import {CollectionCustomElement} from './component/framework/bootstrap/collection';// eslint-disable-line no-unused-vars
import {ConditionalCustomElement} from './component/framework/bootstrap/conditional';// eslint-disable-line no-unused-vars
import {FormGroupCustomElement} from './component/framework/bootstrap/form-group';// eslint-disable-line no-unused-vars
import {RadiosElement} from './component/framework/bootstrap/radios';// eslint-disable-line no-unused-vars
import {SelectElement} from './component/framework/bootstrap/select';// eslint-disable-line no-unused-vars

export function configure(aurelia, configCOrConfigure) {
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

  if (typeof configCOrConfigure === 'function') {
    configCOrConfigure(formConfig);
  } else if (configCOrConfigure) {
    formConfig.configure(configCOrConfigure);
  }

  aurelia.globalResources(
    './component/entity-form',
    './component/schema-form',
    './component/form-fields',
    './component/form-field'
  );
}

export const logger = getLogger('aurelia-form');

export {
  Config,
  Form,
  normalizeOptions,
  entitySchema
};
