define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Actions = exports.Actions = function () {
    function Actions() {
      _classCallCheck(this, Actions);
    }

    Actions.prototype.activate = function activate(model) {
      this.element = model.element;
      this.model = model.value;
    };

    return Actions;
  }();
});