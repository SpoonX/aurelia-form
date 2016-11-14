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
      }());

      _export("Collection", Collection);
    }
  };
});