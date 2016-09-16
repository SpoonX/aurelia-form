'use strict';

System.register(['aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, AttributesCustomAttribute;

  

  function normalizeAtttibutes(value) {
    var result = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (typeof value === 'string') {
      result[value] = true;

      return result;
    }

    if (Array.isArray(value)) {
      value.forEach(function (v) {
        result = normalizeAtttibutes(v, result);
      });

      return result;
    }

    return result;
  }
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

          Object.keys(normalizeAtttibutes(this.value)).forEach(function (attribute) {
            _this.element.setAttribute(attribute, _this.value[attribute]);
          });
        };

        return AttributesCustomAttribute;
      }()) || _class));

      _export('AttributesCustomAttribute', AttributesCustomAttribute);
    }
  };
});