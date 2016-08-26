'use strict';

System.register(['aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, AttributesCustomAttribute;

  

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      _export('AttributesCustomAttribute', AttributesCustomAttribute = (_dec = inject(Element), _dec(_class = function () {
        function AttributesCustomAttribute(element) {
          

          this.element = element;
        }

        AttributesCustomAttribute.prototype.valueChanged = function valueChanged() {
          var _this = this;

          Object.keys(this.value).forEach(function (attribute) {
            _this.element.setAttribute(attribute, _this.value[attribute]);
          });
        };

        return AttributesCustomAttribute;
      }()) || _class));

      _export('AttributesCustomAttribute', AttributesCustomAttribute);
    }
  };
});