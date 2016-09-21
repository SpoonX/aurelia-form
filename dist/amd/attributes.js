define(['exports', 'aurelia-framework', './logger'], function (exports, _aureliaFramework, _logger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AttributesCustomAttribute = undefined;
  exports.normalizedAttributes = normalizedAttributes;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  

  var _dec, _dec2, _class;

  var AttributesCustomAttribute = exports.AttributesCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.customAttribute)('attributes'), _dec(_class = _dec2(_class = function () {
    function AttributesCustomAttribute(element) {
      

      this.element = element;
    }

    AttributesCustomAttribute.prototype.valueChanged = function valueChanged() {
      var _this = this;

      var attributes = normalizedAttributes(this.value);

      Object.keys(attributes).forEach(function (attribute) {
        _this.element.setAttribute(attribute, attributes[attribute]);
      });
    };

    return AttributesCustomAttribute;
  }()) || _class) || _class);
  function normalizedAttributes(value) {
    var result = {};
    if (typeof value === 'string') {
      result[value] = true;
    }

    if (Array.isArray(value)) {
      value.forEach(function (string) {
        if (typeof string !== 'string') {
          _logger.logger.error('does not support ' + (typeof string === 'undefined' ? 'undefined' : _typeof(string)) + ' in a attributes array');
        }

        result[string] = true;
      });
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      result = value;
    }

    return result;
  }
});