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

        Actions.prototype.activate = function activate(vm) {
          this.vm = vm;
        };

        return Actions;
      }());

      _export("Actions", Actions);
    }
  };
});