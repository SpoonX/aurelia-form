import {bindable, bindingMode} from 'aurelia-framework';

export class FormFieldsCustomElement {
  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model

  @bindable messages

  attached() {
    if (typeof this.model !== 'object') {
      // eslint-disable-next-line
      console.warn(`model is not an object`);
    }
  }
}
