export let Collection = class Collection {

  activate(model) {
    this.models = model.value;
    this.element = model.element;

    this.schema = index => {
      return this.element.schema.map(element => {
        let el = Object.create(element);
        el.index = index;

        return el;
      });
    };
  }
};