import {dynamicOptions, inject, customAttribute} from 'aurelia-framework';

@dynamicOptions
@inject(Element)
@customAttribute('attributes')
export class Attributes {
  constructor(element) {
    this.element = element;
  }

  propertyChanged(name, newValue) {
    this.element.setAttribute(name, newValue);
  }
}
