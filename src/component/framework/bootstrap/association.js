import {inject, BindingEngine, bindable} from 'aurelia-framework';
import {Association} from '../association';

@inject(BindingEngine)
export class AssociationElement extends Association {
  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }
}
