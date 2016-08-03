import { normalizeOptions } from '../utils';

export let normalizeOptionsValueConverter = class normalizeOptionsValueConverter {

  toView(options) {
    return normalizeOptions(options);
  }

};