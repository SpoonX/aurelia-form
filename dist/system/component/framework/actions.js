System.register([], function (_export) {
  "use strict";

  var Actions;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Actions = (function () {
        function Actions() {
          _classCallCheck(this, Actions);
        }

        _createClass(Actions, [{
          key: "activate",
          value: function activate(model) {
            this.element = model.element;
            this.model = model.value;
          }
        }]);

        return Actions;
      })();

      _export("Actions", Actions);
    }
  };
});