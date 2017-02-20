import {Metadata} from '../Metadata';

export function noRender(value = true) {
  return function(target, property) {
    Metadata.forTarget(target.constructor).put(`fields.${property}.noRender`, value);
  };
}
