'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = undefined;

var _dec, _class;

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaViewManager = require('aurelia-view-manager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var Config = exports.Config = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaViewManager.ViewManager, _aureliaViewManager.Config), _dec(_class = function () {
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
    return (0, _extend2.default)(true, this.configurations, configs);
  };

  return Config;
}()) || _class);