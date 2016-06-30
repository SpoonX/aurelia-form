'use strict';

System.register(['aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, AttributesCustomAttribute;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      _export('AttributesCustomAttribute', AttributesCustomAttribute = (_dec = inject(Element), _dec(_class = function () {
        function AttributesCustomAttribute(element) {
          _classCallCheck(this, AttributesCustomAttribute);

          this.element = element;
        }

        AttributesCustomAttribute.prototype.valueChanged = function valueChanged() {
          $(this.element).attr(this.value || {});
        };

        return AttributesCustomAttribute;
      }()) || _class));

      _export('AttributesCustomAttribute', AttributesCustomAttribute);
    }
  };
});