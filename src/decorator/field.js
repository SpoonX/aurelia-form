import {Metadata} from '../Metadata';

export function field(value, option) {
  return function(target, property) {
    Metadata.forTarget(target.constructor).put(`fields.${property}.${option}`, value);
  };
}
