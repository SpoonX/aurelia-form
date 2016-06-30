var _dec, _class;

import extend from 'extend';
import { inject } from 'aurelia-dependency-injection';
import { Config as ViewManagerConfig, ViewManager } from 'aurelia-view-manager';

export let Config = (_dec = inject(ViewManager, ViewManagerConfig), _dec(_class = class Config {

  constructor(viewManager, viewManagerConfig) {
    this.configurations = {};
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
}) || _class);