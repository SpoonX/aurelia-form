export let Collection = class Collection {

  activate(vm) {
    this.vm = vm;
  }

  itemSchema(schema, index) {
    return schema.map(element => {
      let el = Object.create(element);
      el.index = index;

      return el;
    });
  }

};