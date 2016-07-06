import {computedFrom} from 'aurelia-framework';
export class Collection {

  activate(model) {
    this.models   = model.value;
    this.element  = model.element;

    /* @note the collection element sets index on every element, consider the
     * index property on the schema reserved for the collection element */
    this.schema = (index) => {
      return this.element.schema.map(element => {
        let el = Object.create(element);
        el.index = index;

        return el;
      });
    };
  }
}
