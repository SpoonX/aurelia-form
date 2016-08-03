import {normalizeOptions} from '../utils';

export class normalizeOptionsValueConverter {

  toView(options) {
    return normalizeOptions(options);
  }

}
