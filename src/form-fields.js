import {bindable, bindingMode} from 'aurelia-framework';

export class FormFieldsCustomElement {
  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model

  attached() {
    if (typeof this.model !== 'object') {
      // eslint-disable-next-line
      console.warn(`model is not an object`);
    }
  }
}
