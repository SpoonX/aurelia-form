import {inject, DOM} from 'aurelia-framework';

@inject(Element)
export class InputElement {
  constructor(element) {
    this.inputElement = element;
  }

  triggerEvent = (type) => this.inputElement.dispatchEvent(DOM.createCustomEvent(type));
}
