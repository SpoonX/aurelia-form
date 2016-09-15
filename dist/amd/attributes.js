define(['exports', 'aurelia-dependency-injection'], function (exports, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AttributesCustomAttribute = undefined;

  

  var _dec, _class;

  var AttributesCustomAttribute = exports.AttributesCustomAttribute = (_dec = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = function () {
    function AttributesCustomAttribute(element) {
      

      this.element = element;
    }

    AttributesCustomAttribute.prototype.valueChanged = function valueChanged() {
      var _this = this;

      Object.keys(normalizeAtttibutes(this.value)).forEach(function (attribute) {
        _this.element.setAttribute(attribute, _this.value[attribute]);
      });
    };

    return AttributesCustomAttribute;
  }()) || _class);

  function normalizeAtttibutes(value) {
    var result = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (typeof this.value === 'string') {
      result[this.value] = true;

      return result;
    }

    if (Array.isArray(this.value)) {
      this.value.forEach(function (v) {
        result = normalizeAtttibutes(v, result);
      });

      return result;
    }

    return result;
  }
});