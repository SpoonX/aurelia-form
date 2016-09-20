import {logger} from '../../logger';

export class Options {

  activate(model) {
    if (!Array.isArray(model.element.options)) {
      logger.error('element \'s options should be an array');
    }

    this.model = model;
  }

}
