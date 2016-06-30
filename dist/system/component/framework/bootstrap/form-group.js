'use strict';

System.register(['./../form-group'], function (_export, _context) {
  "use strict";

  var FormGroup, FormGroupCustomElement;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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
    setters: [function (_formGroup) {
      FormGroup = _formGroup.FormGroup;
    }],
    execute: function () {
      _export('FormGroupCustomElement', FormGroupCustomElement = function (_FormGroup) {
        _inherits(FormGroupCustomElement, _FormGroup);

        function FormGroupCustomElement() {
          _classCallCheck(this, FormGroupCustomElement);

          return _possibleConstructorReturn(this, _FormGroup.apply(this, arguments));
        }

        return FormGroupCustomElement;
      }(FormGroup));

      _export('FormGroupCustomElement', FormGroupCustomElement);
    }
  };
});