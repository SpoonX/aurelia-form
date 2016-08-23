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
    Object.keys(this.value).forEach(attr => {
      let value = this.value[attr];
      this.element.setAttribute(attr, value);
    });
  }

}
