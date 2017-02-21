import {field} from './field';

export function readonly(value = true) {
  return field(value, 'readonly');
}
