System.register(['extend', 'aurelia-dependency-injection', 'aurelia-view-manager'], function (_export) {
  'use strict';

  var extend, inject, ViewManagerConfig, DEFAULT_FRAMEWORK, Config;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_extend) {
      extend = _extend['default'];
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaViewManager) {
      ViewManagerConfig = _aureliaViewManager.Config;
    }],
    execute: function () {
      DEFAULT_FRAMEWORK = 'bootstrap';

      Config = (function () {
        function Config(viewManagerConfig) {
          _classCallCheck(this, _Config);

          this.configurations = {};

          viewManagerConfig.configureNamespace('aurelia-form', {
            base: './frameworks/{{framework}}',
            location: '{{base}}/{{view}}.html',
            framework: DEFAULT_FRAMEWORK,
            map: {
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

          this.configure({

            translate: false,

            aliases: {
              nested: 'fieldset',
              undefined: 'text',
              'null': 'text',
              int: 'number',
              integer: 'number',
              float: 'number',
              string: 'text',
              bool: 'checkbox',
              boolean: 'checkbox'
            }
          });
        }

        _createClass(Config, [{
          key: 'get',
          value: function get(props) {
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
        Config = inject(ViewManagerConfig)(Config) || Config;
        return Config;
      })();

      _export('Config', Config);
    }
  };
});