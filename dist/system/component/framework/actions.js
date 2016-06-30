"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Actions;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("Actions", Actions = function () {
        function Actions() {
          _classCallCheck(this, Actions);
        }

        Actions.prototype.activate = function activate(model) {
          this.element = model.element;
          this.model = model.value;
        };

        return Actions;
      }());

      _export("Actions", Actions);
    }
  };
});