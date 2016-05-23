import extend from 'extend';
import frameworks from './frameworks/frameworks';

export class Config {
  constructor() {
    let defaultFramework = 'bootstrap';

    extend(this, {

      translate: false,

      components: {}, //custom components equals an empty object

      framework: defaultFramework, //bootstrap as default

      frameworkComponents: frameworks[defaultFramework] || {}, //consider throwing error when not giving a valid framework

      /***
       * Instead of defining a framework or custom component for every variant
       * on the name of a type, it is easier to alias that variant so the
       * variant is changed to the main type.
       */
      aliases: {
        int: 'number',
        integer: 'number',
        float: 'number',
        string: 'text',
        bool: 'checkbox',
        boolean: 'checkbox'
      }
    });
  }

  configure(configs) {
    /* perform a deep extend */
    return extend(true, this, configs);
  }
}
