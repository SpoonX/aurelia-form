'use strict';

System.register(['aurelia-framework', './logger'], function (_export, _context) {
  "use strict";

  var customAttribute, inject, logger, _typeof, _dec, _dec2, _class, AttributesCustomAttribute;

  

  function normalizedAttributes(value) {
    var result = {};
    if (typeof value === 'string') {
      result[value] = true;
    }

    if (Array.isArray(value)) {
      value.forEach(function (string) {
        if (typeof string !== 'string') {
          logger.error('does not support ' + (typeof string === 'undefined' ? 'undefined' : _typeof(string)) + ' in a attributes array');
        }

        result[string] = true;
      });
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      result = value;
    }

    return result;
  }

  _export('normalizedAttributes', normalizedAttributes);

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_logger) {
      logger = _logger.logger;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _export('AttributesCustomAttribute', AttributesCustomAttribute = (_dec = inject(Element), _dec2 = customAttribute('attributes'), _dec(_class = _dec2(_class = function () {
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
      }()) || _class) || _class));

      _export('AttributesCustomAttribute', AttributesCustomAttribute);
    }
  };
});