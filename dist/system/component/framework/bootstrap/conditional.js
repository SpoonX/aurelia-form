'use strict';

System.register(['aurelia-framework', '../conditional'], function (_export, _context) {
  "use strict";

  var customElement, Base, _dec, _class, ConditionalCustomElement;

  

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
    }, function (_conditional) {
      Base = _conditional.Conditional;
    }],
    execute: function () {
      _export('ConditionalCustomElement', ConditionalCustomElement = (_dec = customElement('conditional'), _dec(_class = function (_Base) {
        _inherits(ConditionalCustomElement, _Base);

        function ConditionalCustomElement() {
          

          return _possibleConstructorReturn(this, _Base.apply(this, arguments));
        }

        return ConditionalCustomElement;
      }(Base)) || _class));

      _export('ConditionalCustomElement', ConditionalCustomElement);
    }
  };
});