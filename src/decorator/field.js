import {Metadata} from '../metadata';

export function field(value, option) {
  return function(target, property) {
    Metadata.forTarget(target.constructor).put(`fields.${property}.${option}`, value);
  };
}
