import {inject} from 'aurelia-dependency-injection';

/***
 * is only used internally. In future might make this a seperate plugin
 */

@inject(Element)
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
  if (typeof value === 'string') {
    value = {};
    value[value] = true;
  }

  if (Array.isArray(value)) {
    let obj = value.reduce(string => {
      if (typeof value !== 'string') {
        logger.error(`does not support ${typeof string} in a attributes array`);
      }

      value[string] = true;
    });

    value = obj;
  }

  return value;
}

