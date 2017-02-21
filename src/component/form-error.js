import {bindable, customElement} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-error')
@customElement('form-error')
export class FormError {
  @bindable error;

  @bindable classes;
}
