import {bindable, computedFrom} from 'aurelia-framework';

export class FormGroup {

  @bindable attribute

  @bindable message

  /**
   * users can set label to false if they do not want to show the label
   *
   * @returns {boolean} true label is not false
   */
  @computedFrom('label')
  get showsLabel() {
    return (this.attribute.label !== false);
  }

  /**
   * @returns {boolean} false if message is empty or null
   */
  @computedFrom('message')
  get showsMessage() {
    return (!!this.message);
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
