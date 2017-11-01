import {customElement, bindable, computedFrom} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';
import {Metadata} from '../aurelia-form';

@resolvedView('spoonx/form', 'entity-form')
@customElement('entity-form')
export class EntityForm {

  @bindable form;

  @bindable entity;

  @bindable behavior;

  @bindable classes;

  @bindable elementClasses;

  @bindable labelClasses;

  @bindable skip = [];

  @bindable validated = true;

  @bindable buttonOptions;

  @bindable buttonLabel;

  @bindable buttonEnabled;

  @computedFrom('entity')
  get elements() {
    let entityMeta = {};

    if (typeof this.entity.getMeta === 'function') {
      entityMeta = this.entity.getMeta().metadata;
    }

    let types        = entityMeta.types || {};
    let associations = entityMeta.associations || {};
    let fields       = Metadata.forTarget(this.entity).fetch('fields', {});

    return Object.keys(this.entity)
      .map(name => {
        let field       = fields[name] || {};
        let association = associations[name];
        let options     = field.options || {};
        let element     = types[name] || 'input';

        if (association) {
          element          = 'association';
          options.resource = association.entity;
          options.multiple = association.type === 'collection';
        }

        if (field.element) {
          element = field.element;
        }

        return {
          element: element,
          field  : name,
          meta   : field,
          options: options
        };
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

  submit() {
    this.form.submit();
  }
}
