import {metadata} from 'aurelia-metadata';
import {Homefront} from 'homefront';

export class Metadata {
  static forTarget(target) {
    if (typeof target !== 'function') {
      target = target.constructor;
    }

    return metadata.getOrCreateOwn('spoonx:form:metadata', Homefront, target, target.name);
  }
}
