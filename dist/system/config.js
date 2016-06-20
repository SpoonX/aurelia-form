System.register(['extend', 'aurelia-dependency-injection', 'aurelia-view-manager'], function (_export) {
  'use strict';

  var extend, inject, ViewManagerConfig, ViewManager, Config;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_extend) {
      extend = _extend['default'];
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaViewManager) {
      ViewManagerConfig = _aureliaViewManager.Config;
      ViewManager = _aureliaViewManager.ViewManager;
    }],
    execute: function () {
      Config = (function () {
        function Config(viewManager, viewManagerConfig) {
          _classCallCheck(this, _Config);

          this.configurations = {};
        }

        _createClass(Config, [{
          key: 'fetch',
          value: function fetch(props) {
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
          }
        }, {
          key: 'configure',
          value: function configure(configs) {
            return extend(true, this.configurations, configs);
          }
        }]);

        var _Config = Config;
        Config = inject(ViewManager, ViewManagerConfig)(Config) || Config;
        return Config;
      })();

      _export('Config', Config);
    }
  };
});