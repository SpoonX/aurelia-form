"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Actions;

  

  return {
    setters: [],
    execute: function () {
      _export("Actions", Actions = function () {
        function Actions() {
          
        }

        Actions.prototype.activate = function activate(model) {
          this.value = model.value;
        };

        return Actions;
      }());

      _export("Actions", Actions);
    }
  };
});