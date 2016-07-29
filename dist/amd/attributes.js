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
      $(this.element).attr(this.value || {});
    };

    return AttributesCustomAttribute;
  }()) || _class);
});