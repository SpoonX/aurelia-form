import {Metadata} from '../Metadata';

export function element(value) {
  return function(target, property) {
    Metadata.forTarget(target.constructor).put(`fields.${property}.element`, value);
  };
}
