'use strict';

System.register(['extend', 'aurelia-dependency-injection', 'aurelia-view-manager'], function (_export, _context) {
  "use strict";

  var extend, inject, ViewManagerConfig, ViewManager, _dec, _class, Config;

  

  return {
    setters: [function (_extend) {
      extend = _extend.default;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaViewManager) {
      ViewManagerConfig = _aureliaViewManager.Config;
      ViewManager = _aureliaViewManager.ViewManager;
    }],
    execute: function () {
      _export('Config', Config = (_dec = inject(ViewManager, ViewManagerConfig), _dec(_class = function () {
        function Config(viewManager, viewManagerConfig) {
          

          this.configurations = {};

          this.configure({
            labelFormat: function labelFormat(element) {
              return element.label || element.key;
            }
          });
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
      }()) || _class));

      _export('Config', Config);
    }
  };
});