import {inject} from 'aurelia-dependency-injection';

/***
 * is only used internally. In future might make this a seperate plugin
 */

@inject(Element)
export class AttributesCustomAttribute {

  constructor(element) {
    console.log('attributes');
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
  console.log(value, result);

  if (typeof this.value === 'string') {
    result[this.value] = true;

    return result;
  }

  if (Array.isArray(this.value)) {
    this.value.forEach(v => {
      result = normalizeAtttibutes(v, result);
    });

    return result;
  }

  return result;
}
