import {bindable, customElement, bindingMode} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-group')
@customElement('form-group')
export class FormGroup {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = null;

  @bindable classes;

  @bindable element;

  @bindable state;

  @bindable label;

  @bindable error;

  @bindable message;

  @bindable type;

  @bindable behavior;
}
