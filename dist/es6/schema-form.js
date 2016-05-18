import {bindable, bindingMode} from 'aurelia-framework';

export class schemaFormCustomElement {

  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model

  @bindable submit
}
