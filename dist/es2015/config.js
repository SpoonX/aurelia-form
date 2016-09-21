import extend from 'extend';

export let Config = class Config {

  constructor() {
    this.configurations = {};

    this.configure({
      labelFormat: element => {
        return element.label || element.key;
      }
    });
  }

  fetch(props) {
    let result = this.configurations;

    for (let index in arguments) {
      let key = arguments[index];
      let value = result[key];

      if (!value) {
        return value;
      }
      result = result[key];
    }

    return result;
  }

  configure(configs) {
    return extend(true, this.configurations, configs);
  }
};