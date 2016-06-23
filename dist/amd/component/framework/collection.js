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

  var Collection = exports.Collection = function () {
    function Collection() {
      _classCallCheck(this, Collection);
    }

    Collection.prototype.activate = function activate(model) {
      this.element = model.element;
      this.models = model.value;
    };

    return Collection;
  }();
});