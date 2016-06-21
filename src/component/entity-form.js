import {entitySchema} from '../entity-schema';
import {bindable, bindingMode, customElement} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@customElement('entity-form')
@resolvedView('spoonx/form', 'entity-form')
export class EntityForm {

  @bindable({defaultBindingMode: bindingMode.oneTime})
  entity

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model

  bind() {
    this.schema = entitySchema(this.entity);
    this.model = this.entity; /* enables the reuse of the schema-form.html */
  }

}
