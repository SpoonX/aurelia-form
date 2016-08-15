

import { normalizeOptions } from '../utils';

export var normalizeOptionsValueConverter = function () {
  function normalizeOptionsValueConverter() {
    
  }

  normalizeOptionsValueConverter.prototype.toView = function toView(options) {
    return normalizeOptions(options);
  };

  return normalizeOptionsValueConverter;
}();