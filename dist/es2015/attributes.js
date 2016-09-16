var _dec, _class;

import { inject } from 'aurelia-dependency-injection';

export let AttributesCustomAttribute = (_dec = inject(Element), _dec(_class = class AttributesCustomAttribute {

  constructor(element) {
    this.element = element;
  }

  valueChanged() {
    Object.keys(normalizeAtttibutes(this.value)).forEach(attribute => {
      this.element.setAttribute(attribute, this.value[attribute]);
    });
  }

}) || _class);

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