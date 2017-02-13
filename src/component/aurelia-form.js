import {bindable, customElement, children} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'aurelia-form')
@customElement('aurelia-form')
export class AureliaForm {
  @bindable behavior = '';

  @bindable classes = '';

  @bindable options = {};

  @children('form-group') formGroups = [];

  formGroupsChanged() {
    this.behaviorChanged();
  }

  behaviorChanged() {
    if (this.formGroups.length === 0) {
      return;
    }

    this.formGroups.forEach(group => {
      group.behavior = this.behavior;
    });
  }
}
