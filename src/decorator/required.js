import {field} from './field';

export function required(value = true) {
  return field(value, 'required');
}
