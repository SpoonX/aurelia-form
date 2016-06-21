define(['exports', 'aurelia-dependency-injection'], function (exports, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var AttributesCustomAttribute = (function () {
    function AttributesCustomAttribute(element) {
      _classCallCheck(this, _AttributesCustomAttribute);

      this.element = element;
    }

    _createClass(AttributesCustomAttribute, [{
      key: 'valueChanged',
      value: function valueChanged() {
        $(this.element).attr(this.value || {});
      }
    }]);

    var _AttributesCustomAttribute = AttributesCustomAttribute;
    AttributesCustomAttribute = (0, _aureliaDependencyInjection.inject)(Element)(AttributesCustomAttribute) || AttributesCustomAttribute;
    return AttributesCustomAttribute;
  })();

  exports.AttributesCustomAttribute = AttributesCustomAttribute;
});