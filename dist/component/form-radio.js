import {bindable, customElement, bindingMode} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-radio')
@customElement('form-radio')
export class FormRadio {
  @bindable name;

  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable({defaultBindingMode: bindingMode.twoWay}) option;

  @bindable type = 'text';

  @bindable classes = '';

  @bindable placeholder = '';

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable options = {};

  @bindable autofocus;

  @bindable required;
}
