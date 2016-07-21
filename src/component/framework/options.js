import {normalizeOptions} from '../../utils';
import {logger} from '../../aurelia-form';
import {BindingEngine, inject} from 'aurelia-framework';

@inject(BindingEngine)
export class Options {

  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  activate(model) {
    if (!Array.isArray(model.element.options)) {
      logger.error('element \'s options should be an array');
    }

    this.value   = model.value;
    this.element = model.element;
    this.options = normalizeOptions(model.element.options);

    /* when options change they have to be renormalized */
    this.optionsObserver = this.bindingEngine.collectionObserver(model.element.options)
      .subscribe(() => {
        this.options = normalizeOptions(model.element.options);
      });
  }

  unbind() {
    this.optionsObserver.dispose();
  }

}
