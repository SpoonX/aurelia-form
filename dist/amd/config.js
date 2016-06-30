define(['exports', 'extend', 'aurelia-dependency-injection', 'aurelia-view-manager'], function (exports, _extend, _aureliaDependencyInjection, _aureliaViewManager) {
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Config = exports.Config = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaViewManager.ViewManager, _aureliaViewManager.Config), _dec(_class = function () {
    function Config(viewManager, viewManagerConfig) {
      _classCallCheck(this, Config);

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
      return (0, _extend2.default)(true, this.configurations, configs);
    };

    return Config;
  }()) || _class);
});