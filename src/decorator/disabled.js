import {field} from './field';

export function disabled(value = true) {
  return field(value, 'disabled');
}
