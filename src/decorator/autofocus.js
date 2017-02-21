import {field} from './field';

export function autofocus(value = true) {
  return field(value, 'autofocus');
}
