//import {bindable, bindingMode} from 'aurelia-framework';

export class ActionsCustomComponent {

  constructor() {
    console.log('actions');
  }

  activate(model) {
    this.attribute = model.attribute;
    this.model = model.model;
  }

  onClick(action) {
    action.action(this.model);
  }

}
