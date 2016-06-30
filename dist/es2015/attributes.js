var _dec, _class;

import { inject } from 'aurelia-dependency-injection';

export let AttributesCustomAttribute = (_dec = inject(Element), _dec(_class = class AttributesCustomAttribute {

  constructor(element) {
    this.element = element;
  }

  valueChanged() {
    $(this.element).attr(this.value || {});
  }

}) || _class);