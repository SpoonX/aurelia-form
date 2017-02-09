import {bindable, customElement, bindingMode} from "aurelia-framework";
import {resolvedView} from "aurelia-view-manager";

@resolvedView('spoonx/form', 'form-input')
@customElement('form-input')
export class FormInput {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable type = 'text';

  @bindable name = '';

  @bindable classes = '';

  @bindable placeholder = '';

  @bindable readonly = false;

  @bindable disabled = false;
}
