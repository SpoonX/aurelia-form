export class Collection {

  activate(vm) {
    this.vm = vm;
  }

  /**
   * Generates a schema for each of the items in the collection. This is done
   * to add an index to the each of the schema elements of the collection.
   *
   * @param {number} index
   * @param {object[]} schema for a single item
   *
   * @returns {object[]} schema elements with an index property
   */
  itemSchema(schema, index) {
    return schema.map(element => {
      let el = Object.create(element);
      el.index = index;

      return el;
    });
  }

}
