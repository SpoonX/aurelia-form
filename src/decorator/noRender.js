import {field} from './field';

export function noRender(value = true) {
  return field(value, 'noRender');
}
