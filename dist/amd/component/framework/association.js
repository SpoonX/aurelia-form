define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var Association = exports.Association = function () {
    function Association() {
      
    }

    Association.prototype.activate = function activate(formField) {
      var _this = this;

      this.formField = formField;

      this.association = toArray(this.formField.element.association).map(function (association) {
        return _this.formField.model[association];
      });
      this.manyAssociation = this.formField.model[this.formField.element.manyAssociation];
    };

    return Association;
  }();

  function toArray(value) {
    if (typeof value === 'undefined') {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  }
});