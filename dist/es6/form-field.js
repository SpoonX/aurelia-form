import {bindable, bindingMode} from 'aurelia-framework';

/***
 * Extendable class to more easily write your own form elements that have
 * a view model.
 */

export class FormField {

  @bindable element

  @bindable message

  @bindable({defaultBindingMode: bindingMode.twoWay})
  value

  activate(model) {
    this.element = model.element;
    this.value   = model.value;
  }

}
