import {bindable, customElement} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-group')
@customElement('form-group')
export class FormGroup {
  @bindable classes;

  @bindable state;

  @bindable label;

  @bindable error;

  @bindable message;

  @bindable type;

  @bindable behavior;
}
