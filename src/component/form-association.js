import {bindable, customElement, bindingMode} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-association')
@customElement('form-association')
export class FormAssociation {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable name;

  @bindable options;

  @bindable disabled;

  @bindable placeholder;
}
