import {bindable, customElement} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-help')
@customElement('form-help')
export class FormHelp {
  @bindable message;

  @bindable classes;
}
