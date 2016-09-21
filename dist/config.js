import extend from 'extend';

export class Config {

  configurations = {}

  constructor() {
    this.configure({
      labelFormat: element => {
        return element.label || element.key;
      }
    });
  }

  /**
   * convenient for getting a (nested) property in the configurations
   * object.
   *
   * @param {...string} props when prop is falsy it returns the whole
   * configurations object
   *
   * @returns {*} the value of that property
   */
  fetch(props) {
    let result = this.configurations;

    for (let index in arguments) {
      let key   = arguments[index];
      let value = result[key];

      if (!value) {
        return value;
      }
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
