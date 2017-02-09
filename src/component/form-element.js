import {Configuration} from 'aurelia-config';
import {inject, bindable, customElement, computedFrom} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-element')
@customElement('form-element')
@inject(Configuration.of('aurelia-form'))
export class FormElement {
  config;

  constructor(config) {
    this.config = config;
  }

  @bindable type = 'text';

  @computedFrom('type')
  get viewPath() {
    // this.config.elements
    return `element/${this.type}`;
  }
}
