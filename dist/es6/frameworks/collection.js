import {computedFrom} from 'aurelia-framework';

export class Collection {

  constructor() {}

  /* damn biolerplate */
  activate(model) {
    this.attribute = model.attribute;
    this.models = model.value;
  }

  @computedFrom('attribute')
  get schema() {
    return this.attribute.schema;
  }

}
