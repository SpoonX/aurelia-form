import {Metadata} from '../Metadata';

export function placeholder(value) {
  return function(target, property) {
    Metadata.forTarget(target.constructor).put(`fields.${property}.placeholder`, value);
  };
}
