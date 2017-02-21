import {bindable, customElement} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-button')
@customElement('form-button')
export class FormButton {
  @bindable label = null;

  @bindable type = 'submit';

  @bindable classes = '';

  @bindable disabled = false;

  @bindable options = {};
}
