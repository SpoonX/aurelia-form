"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Collection;

  

  return {
    setters: [],
    execute: function () {
      _export("Collection", Collection = function () {
        function Collection() {
          
        }

        Collection.prototype.activate = function activate(model) {
          var _this = this;

          this.models = model.value;
          this.element = model.element;

          this.schema = function (index) {
            return _this.element.schema.map(function (element) {
              var el = Object.create(element);
              el.index = index;

              return el;
            });
          };
        };

        return Collection;
      }());

      _export("Collection", Collection);
    }
  };
});