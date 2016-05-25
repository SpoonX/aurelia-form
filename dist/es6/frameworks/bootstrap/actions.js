//import {bindable, bindingMode} from 'aurelia-framework';

export class ActionsCustomComponent {

  activate(model) {
    this.attribute = model.attribute;
    this.model = model.model;
  }

  onClick(action) {
    action.action();
  }

}
