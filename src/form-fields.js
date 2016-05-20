import {bindable, bindingMode} from 'aurelia-framework';

export class FormFieldsCustomElement {
  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model
}
