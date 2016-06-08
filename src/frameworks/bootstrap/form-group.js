import {FormGroup} from '../form-group';

export class FormGroupCustomElement extends FormGroup {

  /**
   * @returns {string} represents the error type for the bootstrap framework
   */
  messageChanged() {
    $(this.element).toggleClass('has-error', !!this.message);
  }

}
