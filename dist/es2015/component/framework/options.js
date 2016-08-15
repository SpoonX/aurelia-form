import { logger } from '../../aurelia-form';

export let Options = class Options {

  activate(model) {
    if (!Array.isArray(model.element.options)) {
      logger.error('element \'s options should be an array');
    }

    this.model = model;
  }

};