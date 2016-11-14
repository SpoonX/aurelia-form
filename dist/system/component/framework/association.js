'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Association;

  

  function toArray(value) {
    if (typeof value === 'undefined') {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  }
  return {
    setters: [],
    execute: function () {
      _export('Association', Association = function () {
        function Association() {
          
        }

        Association.prototype.activate = function activate(formField) {
          var _this = this;

          this.formField = formField;

          var element = this.formField.element;

          element.property = element.property || 'name';

          if (this.association) {
            this.association = toArray(this.formField.element.association).map(function (association) {
              return _this.formField.model[association];
            });
          }

          if (this.manyAssociation) {
            this.manyAssociation = this.formField.model[this.formField.element.manyAssociation];
          }
        };

        return Association;
      }());

      _export('Association', Association);
    }
  };
});