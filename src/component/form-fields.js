import {bindable, bindingMode, customElement} from 'aurelia-framework';
import {getLogger} from 'aurelia-logging';
import {resolvedView} from 'aurelia-view-manager';

@customElement('form-fields')
@resolvedView('spoonx/form', 'form-fields')
export class FormFields {
  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model

  @bindable messages

  attached() {
    if (typeof this.model !== 'object') {
      getLogger('aurelia-form').warn(`model is not an object`);
    }
  }
}
