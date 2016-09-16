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
    Object.keys(normalizeAtttibutes(this.value)).forEach(attribute => {
      this.element.setAttribute(attribute, this.value[attribute]);
    });
  }

}

/**
 * @param {object|string|string[]} value
 * @returns {object} where all the values are strings or boolean
 */
function normalizeAtttibutes(value, result = {}) {
  if (typeof value === 'string') {
    result[value] = true;

    return result;
  }

  if (Array.isArray(value)) {
    value.forEach(v => {
      result = normalizeAtttibutes(v, result);
    });

    return result;
  }

  return result;
}
