import { getLogger } from 'aurelia-logging';
import { Config } from './config';
import { Config as ViewManagerConfig } from 'aurelia-view-manager';

import { AttributesCustomAttribute } from './attributes';
import { entitySchema } from './entity-schema';
import { Form } from './form';
import { normalizeOptions } from './utils';
import { normalizeOptionsValueConverter } from './converter/normalizeOptions';
import { EntityForm } from './component/entity-form';
import { SchemaForm } from './component/schema-form';
import { FormFields } from './component/form-fields';
import { FormField } from './component/form-field';
import { Options } from './component/framework/options';
import { FormGroup } from './component/framework/form-group';
import { Conditional } from './component/framework/conditional';
import { Collection } from './component/framework/collection';
import { Actions } from './component/framework/actions';
import { ActionsCustomElement } from './component/framework/bootstrap/actions';
import { CheckboxesElement } from './component/framework/bootstrap/checkboxes';
import { CollectionCustomElement } from './component/framework/bootstrap/collection';
import { ConditionalCustomElement } from './component/framework/bootstrap/conditional';
import { FormGroupCustomElement } from './component/framework/bootstrap/form-group';
import { RadiosElement } from './component/framework/bootstrap/radios';
import { SelectElement } from './component/framework/bootstrap/select';

export function configure(aurelia, configCOrConfigure) {
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

export var logger = getLogger('aurelia-form');

export { Config, Form, normalizeOptions, entitySchema };