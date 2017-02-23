import {customElement, bindable, computedFrom} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';
import {Metadata} from '../metadata';

@resolvedView('spoonx/form', 'entity-form')
@customElement('entity-form')
export class EntityForm {

  @bindable entity;

  @bindable behavior;

  @bindable classes;

  @bindable skip = [];

  @bindable validated = true;

  @bindable buttonOptions;

  @bindable buttonLabel;

  @bindable buttonEnabled;

  @computedFrom('entity')
  get elements() {
    let types  = this.entity.getMeta().metadata.types;
    let fields = Metadata.forTarget(this.entity).fetch('fields', {});

    return Object.keys(types)
      .map(field => {
        return {
          element: types[field],
          field  : field,
          meta   : fields[field] || {}
        }
      })
      .sort((left, right) => {
        let leftPosition  = left.meta.position || 0;
        let rightPosition = right.meta.position || 0;

        if (leftPosition < rightPosition) {
          return -1;
        }

        if (leftPosition > rightPosition) {
          return 1;
        }

        return 0;
      });
  }

  isVisible(fieldName) {
    return this.skip.indexOf(fieldName) === -1;
  }
}
