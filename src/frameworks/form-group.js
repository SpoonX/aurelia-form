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

  /**
   * first check if a label was defined and if not fallback to the key property
   *
   * @returns {string}
   */
  @computedFrom('attribute')
  get labelText() {
    return this.attribute.label || this.attribute.key;
  }

}
