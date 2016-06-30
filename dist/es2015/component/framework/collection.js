export let Collection = class Collection {

  activate(model) {
    this.element = model.element;
    this.models = model.value;
  }

};