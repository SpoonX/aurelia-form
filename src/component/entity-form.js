import {customElement, bindable, computedFrom} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';
import {Metadata} from '../Metadata';

@resolvedView('spoonx/form', 'entity-form')
@customElement('entity-form')
export class EntityForm {

  @bindable entity;

  @bindable behavior;

  @bindable skip = [];

  @computedFrom('entity')
  get elements() {
    let types  = this.entity.getMeta().metadata.types;
    let fields = Metadata.forTarget(this.entity).fetch('fields');

    return Object.keys(types).map(field => {
      return {
        element: types[field],
        field  : field,
        meta   : fields[field]
      }
    });
  }

  isVisible(fieldName) {
    return this.skip.indexOf(fieldName) === -1;
  }
}
