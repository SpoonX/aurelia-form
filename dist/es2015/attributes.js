var _dec, _dec2, _class;

import { customAttribute, inject } from 'aurelia-framework';
import { logger } from './logger';

export let AttributesCustomAttribute = (_dec = inject(Element), _dec2 = customAttribute('attributes'), _dec(_class = _dec2(_class = class AttributesCustomAttribute {

  constructor(element) {
    this.element = element;
  }

  valueChanged() {
    let attributes = normalizedAttributes(this.value);

    Object.keys(attributes).forEach(attribute => {
      this.element.setAttribute(attribute, attributes[attribute]);
    });
  }

}) || _class) || _class);

export function normalizedAttributes(value) {
  let result = {};
  if (typeof value === 'string') {
    result[value] = true;
  }

  if (Array.isArray(value)) {
    value.forEach(string => {
      if (typeof string !== 'string') {
        logger.error(`does not support ${ typeof string } in a attributes array`);
      }

      result[string] = true;
    });
  } else if (typeof value === 'object') {
    result = value;
  }

  return result;
}