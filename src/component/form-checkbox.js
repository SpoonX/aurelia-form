import {bindable, customElement, bindingMode} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-checkbox')
@customElement('form-checkbox')
export class FormCheckbox {
  @bindable name;

  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable({defaultBindingMode: bindingMode.twoWay}) option;

  @bindable type = 'text';

  @bindable classes = '';

  @bindable placeholder = '';

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable options = {};
}
