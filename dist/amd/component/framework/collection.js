define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var Collection = exports.Collection = function () {
    function Collection() {
      
    }

    Collection.prototype.activate = function activate(vm) {
      this.vm = vm;
    };

    Collection.prototype.itemSchema = function itemSchema(schema, index) {
      return schema.map(function (element) {
        var el = Object.create(element);
        el.index = index;

        return el;
      });
    };

    return Collection;
  }();
});