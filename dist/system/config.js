System.register(['extend', './frameworks/frameworks'], function (_export) {
  'use strict';

  var extend, frameworks, Config;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_extend) {
      extend = _extend['default'];
    }, function (_frameworksFrameworks) {
      frameworks = _frameworksFrameworks['default'];
    }],
    execute: function () {
      Config = (function () {
        function Config() {
          _classCallCheck(this, Config);

          var defaultFramework = 'bootstrap';

          extend(this, {

            translate: false,

            components: {},

            framework: defaultFramework,

            frameworkComponents: frameworks[defaultFramework] || {},
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

        _createClass(Config, [{
          key: 'configure',
          value: function configure(configs) {
            return extend(true, this, configs);
          }
        }]);

        return Config;
      })();

      _export('Config', Config);
    }
  };
});