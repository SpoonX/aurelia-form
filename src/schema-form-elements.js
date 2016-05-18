import {bindable, bindingMode} from 'aurelia-framework';

export class SchemaFormElementsCustomElement {
  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model
}
