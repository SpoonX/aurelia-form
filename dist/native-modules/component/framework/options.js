

import { logger } from '../../logger';

export var Options = function () {
  function Options() {
    
  }

  Options.prototype.activate = function activate(model) {
    if (!Array.isArray(model.element.options)) {
      logger.error('element \'s options should be an array');
    }

    this.model = model;
  };

  return Options;
}();