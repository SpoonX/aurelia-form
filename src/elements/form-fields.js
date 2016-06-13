import {bindable, bindingMode} from 'aurelia-framework';
import {getLogger} from 'aurelia-logging';

export class FormFieldsCustomElement {
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
