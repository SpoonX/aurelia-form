define(['exports', 'aurelia-dependency-injection'], function (exports, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AttributesCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AttributesCustomAttribute = exports.AttributesCustomAttribute = (_dec = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = function () {
    function AttributesCustomAttribute(element) {
      _classCallCheck(this, AttributesCustomAttribute);

      this.element = element;
    }

    AttributesCustomAttribute.prototype.valueChanged = function valueChanged() {
      $(this.element).attr(this.value || {});
    };

    return AttributesCustomAttribute;
  }()) || _class);
});