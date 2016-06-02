import extend from 'extend';
import {inject} from 'aurelia-dependency-injection';
import {Config as ViewManagerConfig} from 'aurelia-view';

const DEFAULT_FRAMEWORK = 'bootstrap';

@inject(ViewManagerConfig)
export class Config {
  constructor(viewManagerConfig) {

    /* should these configs be moved? Maybe in a*/
    viewManagerConfig.register('aurelia-form', {
      base: './frameworks/{{framework}}',
      location: '{{base}}/{{view}}.html',
      framework: DEFAULT_FRAMEWORK,
      map: {

        /* custom elements with a view model do not end with .html */
        actions: '{{base}}/actions',
        collection: '{{base}}/collection',

        text: '{{base}}/input.html',
        button: '{{base}}/input.html',
        color: '{{base}}/input.html',
        date: '{{base}}/input.html',
        datetime: '{{base}}/input.html',
        'datetime-local': '{{base}}/input.html',
        email: '{{base}}/input.html',
        month: '{{base}}/input.html',
        number: '{{base}}/input.html',
        password: '{{base}}/input.html',
        range: '{{base}}/input.html',
        search: '{{base}}/input.html',
        tel: '{{base}}/input.html',
        time: '{{base}}/input.html',
        url: '{{base}}/input.html',
        week: '{{base}}/input.html'
      }
    });

    /***
     * defaults that are part of aurelia-form out of the box. They do need to be
     * documented and maybe moved into a seperate file named defaults.js
     */
    this.configure({

      translate: false,

      /***
       * Instead of defining a framework or custom component for every variant
       * on the name of a type, it is easier to alias that variant so the
       * variant is changed to the main type.
       */
      aliases: {
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
  }

  configurations = {}

 /**
  * convenient for getting a (nested) property in the configurations
  * object.
  *
  * @param {...string} props when prop is falsy it returns the whole
  * configurations object
  *
  * @returns {*} the value of that property
  */
  get(props) {
    let result = this.configurations;
    for (let index in arguments) {
      let key = arguments[index];
      let value = result[key];
      if (!value) { return value; }
      result = result[key];
    }
    return result;
  }

  /**
   * extend the config to your liking. A convenient function when you would want
   * more control over the configs.
   */
  configure(configs) {
    /* perform a deep extend and returns this*/
    return extend(true, this.configurations, configs);
  }
}
