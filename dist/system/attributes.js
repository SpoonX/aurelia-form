System.register(['aurelia-dependency-injection'], function (_export) {
  'use strict';

  var inject, AttributesCustomAttribute;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      AttributesCustomAttribute = (function () {
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
        AttributesCustomAttribute = inject(Element)(AttributesCustomAttribute) || AttributesCustomAttribute;
        return AttributesCustomAttribute;
      })();

      _export('AttributesCustomAttribute', AttributesCustomAttribute);
    }
  };
});