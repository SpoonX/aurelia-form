//import {bindable, bindingMode} from 'aurelia-framework';
export class Actions {

  activate(model) {
    this.attribute = model.attribute;
    this.model = model.value;
  }

}
