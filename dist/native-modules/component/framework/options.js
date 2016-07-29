var _dec, _class;



import { normalizeOptions } from '../../utils';
import { logger } from '../../aurelia-form';
import { BindingEngine, inject } from 'aurelia-framework';

export var Options = (_dec = inject(BindingEngine), _dec(_class = function () {
  function Options(bindingEngine) {
    

    this.bindingEngine = bindingEngine;
  }

  Options.prototype.activate = function activate(model) {
    var _this = this;

    if (!Array.isArray(model.element.options)) {
      logger.error('element \'s options should be an array');
    }

    this.value = model.value;
    this.element = model.element;
    this.options = normalizeOptions(model.element.options);

    this.optionsObserver = this.bindingEngine.collectionObserver(model.element.options).subscribe(function () {
      _this.options = normalizeOptions(model.element.options);
    });
  };

  Options.prototype.unbind = function unbind() {
    this.optionsObserver.dispose();
  };

  return Options;
}()) || _class);