import {field} from './field';

export function required(value) {
  return field(value, 'required');
}
