import {bindable, bindingMode} from 'aurelia-framework';

export class SchemaFormCustomElement {
  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model
}
