import {customAttribute, inject} from 'aurelia-framework';
import {logger} from './logger';

/***
 * is only used internally. In future might make this a seperate plugin
 */

@inject(Element)
@customAttribute('attributes')
export class AttributesCustomAttribute {

  constructor(element) {
    this.element = element;
  }

  valueChanged() {
    let attributes = normalizedAttributes(this.value);

    Object.keys(attributes).forEach(attribute => {
      this.element.setAttribute(attribute, attributes[attribute]);
    });
  }

}

/**
 * @param {object|string|string[]} value
 * @returns {object} where all the values are strings or boolean
 */
export function normalizedAttributes(value) {
  let result = {};
  if (typeof value === 'string') {
    result[value] = true;
  }

  if (Array.isArray(value)) {
    value.forEach(string => {
      if (typeof string !== 'string') {
        logger.error(`does not support ${typeof string} in a attributes array`);
      }

      result[string] = true;
    });
  } else if (typeof value === 'object') {
    result = value;
  }

  return result;
}

