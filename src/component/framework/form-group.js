import {inject, bindable, computedFrom} from 'aurelia-framework';
import {Config}                         from '../../config';

@inject(Config)
export class FormGroup {

  @bindable element

  @bindable message

  @bindable description

  @bindable errors = []

  constructor(config) {
    this.config      = config.configurations;
    this.labelFormat = config.fetch('labelFormat');
  }

  @computedFrom('errors')
  get isValid() {
    if (!this.errors || this.errors.length === 0) {
      return true;
    }

    return !this.errors.some(error => !this.config.errorValid(error));
  }

  /**
   * users can set label to false if they do not want to show the label
   *
   * @returns {boolean} true label is not false
   */
  @computedFrom('element')
  get showsLabel() {
    return (this.element.label !== false);
  }

  /**
   * @returns {boolean} false if message is empty or null
   */
  @computedFrom('message')
  get showsMessage() {
    return (!!this.message);
  }

  /**
   * @returns {boolean} false if description is empty or null
   */
  @computedFrom('description')
  get showsDescription() {
    return (!!this.description);
  }

  /**
   * first check if a label was defined and if not fallback to the key property
   *
   * @returns {string}
   */
  @computedFrom('element')
  get labelText() {
    return this.labelFormat(this.element);
  }

}
