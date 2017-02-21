import {field} from './field';

export function readonly(value) {
  return field(value, 'readonly');
}
