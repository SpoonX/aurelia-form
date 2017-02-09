import {bindable, customElement} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-label')
@customElement('form-label')
export class FormLabel {
  @bindable value;

  @bindable classes;
}
