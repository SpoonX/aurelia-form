define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var Actions = exports.Actions = function () {
    function Actions() {
      
    }

    Actions.prototype.activate = function activate(model) {
      this.value = model.value;
    };

    return Actions;
  }();
});