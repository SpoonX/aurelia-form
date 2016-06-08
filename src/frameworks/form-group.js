import {bindable, inject} from 'aurelia-framework';


@inject(Element)
export class FormGroup {

  constructor(element) {
    this.element = element;
  }

  @bindable
  attribute

  @bindable
  message

}
