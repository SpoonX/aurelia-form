import {Config} from './config';
import {Config as ViewManagerConfig} from 'aurelia-view-manager';
export {entitySchema} from './entity-schema';
export {Form} from './form';

export function configure(aurelia, configCallback) {
  let viewManagerConfig = aurelia.container.get(ViewManagerConfig);
  let formConfig = aurelia.container.get(Config);

  viewManagerConfig.configureNamespace('spoonx/form', {
    framepath: '{{base}}/framework/{{framework}}', // framework path
    base     : './../component',
    location : '{{framepath}}/{{view}}.html',
    map      : {
      /* aurelia-form specific view are also overridable */
      'form-field'    : './form-field.html',
      'form-fields'   : './form-fields.html',
      'schema-form'   : './schema-form.html',
      'entity-form'   : './schema-form.html',

      /* custom elements with a view model do not end with .html */
      actions         : '{{framepath}}/actions',
      collection      : '{{framepath}}/collection',

      /* all input components */
      text            : '{{framepath}}/input.html',
      button          : '{{framepath}}/input.html',
      color           : '{{framepath}}/input.html',
      date            : '{{framepath}}/input.html',
      datetime        : '{{framepath}}/input.html',
      'datetime-local': '{{framepath}}/input.html',
      email           : '{{framepath}}/input.html',
      month           : '{{framepath}}/input.html',
      number          : '{{framepath}}/input.html',
      password        : '{{framepath}}/input.html',
      range           : '{{framepath}}/input.html',
      search          : '{{framepath}}/input.html',
      tel             : '{{framepath}}/input.html',
      time            : '{{framepath}}/input.html',
      url             : '{{framepath}}/input.html',
      week            : '{{framepath}}/input.html'
    }
  });

  formConfig.configure({
    /*
     * Instead of defining a framework or custom component for every variant
     * on the name of a type, it is easier to alias that variant so the
     * variant is changed to the main type.
     */
    aliases  : {
      options  : 'select',
      buttons  : 'actions',
      nested   : 'fieldset',
      undefined: 'text',
      null     : 'text',
      int      : 'number',
      integer  : 'number',
      float    : 'number',
      string   : 'text',
      bool     : 'checkbox',
      boolean  : 'checkbox'
    }
  });

  if (typeof configCallback === 'function') {
    configCallback(formConfig);
  }

  aurelia.globalResources(
    './component/entity-form',
    './component/schema-form',
    './component/form-fields',
    './component/form-field'
  );
}

export {Config};
