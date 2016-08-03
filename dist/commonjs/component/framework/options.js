'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = undefined;

var _aureliaForm = require('../../aurelia-form');



var Options = exports.Options = function () {
  function Options() {
    
  }

  Options.prototype.activate = function activate(model) {
    if (!Array.isArray(model.element.options)) {
      _aureliaForm.logger.error('element \'s options should be an array');
    }

    this.model = model;
  };

  return Options;
}();