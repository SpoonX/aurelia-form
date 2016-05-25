"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionsCustomComponent = (function () {
  function ActionsCustomComponent() {
    _classCallCheck(this, ActionsCustomComponent);
  }

  _createClass(ActionsCustomComponent, [{
    key: "activate",
    value: function activate(model) {
      this.attribute = model.attribute;
      this.model = model.model;
    }
  }, {
    key: "onClick",
    value: function onClick(action) {
      action.action();
    }
  }]);

  return ActionsCustomComponent;
})();

exports.ActionsCustomComponent = ActionsCustomComponent;