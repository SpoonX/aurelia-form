import {Metadata} from '../Metadata';

export function label(value) {
  return function(target, property) {
    Metadata.forTarget(target.constructor).put(`fields.${property}.label`, value);
  };
}
