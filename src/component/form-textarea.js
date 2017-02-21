import {bindable, customElement, bindingMode} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-textarea')
@customElement('form-textarea')
export class FormTextarea {
  @bindable name;

  @bindable classes;

  @bindable({defaultBindingMode: bindingMode.twoWay}) value;
}
