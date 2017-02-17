import {customElement, bindable} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'entity-form')
@customElement('entity-form')
export class EntityForm {

  @bindable entity;

  @bindable behavior;

  @bindable skip = [];

  attached() {
    let types = this.entity.getMeta().metadata.types;

    this.elements = Object.keys(types).map(field => {
      return {
        element: types[field],
        field  : field
      }
    });
  }

  isVisible (fieldName) {
    return this.skip.indexOf(fieldName) === -1;
  }
}
