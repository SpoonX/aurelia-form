import {bindable, inject, computedFrom} from 'aurelia-framework';

@inject(Element)
export class FormGroup {

  @bindable
  attribute

  @bindable
  message

  constructor(element) {
    this.element = element;
  }

  @computedFrom('message')
  get showsLabel() {
    return (this.message !== false);
  }

}
