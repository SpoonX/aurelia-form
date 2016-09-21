define(['exports', 'extend'], function (exports, _extend) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Config = undefined;

  var _extend2 = _interopRequireDefault(_extend);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  

  var Config = exports.Config = function () {
    function Config() {
      

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
      return (0, _extend2.default)(true, this.configurations, configs);
    };

    return Config;
  }();
});