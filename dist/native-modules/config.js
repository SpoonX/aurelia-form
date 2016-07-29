var _dec, _class;



import extend from 'extend';
import { inject } from 'aurelia-dependency-injection';
import { Config as ViewManagerConfig, ViewManager } from 'aurelia-view-manager';

export var Config = (_dec = inject(ViewManager, ViewManagerConfig), _dec(_class = function () {
  function Config(viewManager, viewManagerConfig) {
    

    this.configurations = {};
  }

  Config.prototype.fetch = function fetch(props) {
    var result = this.configurations;

    for (var index in arguments) {
      var key = arguments[index];
      var value = result[key];

      if (!value) {
        return value;
      }
      result = result[key];
    }

    return result;
  };

  Config.prototype.configure = function configure(configs) {
    return extend(true, this.configurations, configs);
  };

  return Config;
}()) || _class);