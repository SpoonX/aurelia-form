'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaViewManager = require('aurelia-view-manager');

var Config = (function () {
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
      return (0, _extend2['default'])(true, this.configurations, configs);
    }
  }]);

  var _Config = Config;
  Config = (0, _aureliaDependencyInjection.inject)(_aureliaViewManager.ViewManager, _aureliaViewManager.Config)(Config) || Config;
  return Config;
})();

exports.Config = Config;