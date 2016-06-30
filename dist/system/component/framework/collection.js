"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Collection;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("Collection", Collection = function () {
        function Collection() {
          _classCallCheck(this, Collection);
        }

        Collection.prototype.activate = function activate(model) {
          this.element = model.element;
          this.models = model.value;
        };

        return Collection;
      }());

      _export("Collection", Collection);
    }
  };
});