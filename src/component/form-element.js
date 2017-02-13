import {Configuration} from 'aurelia-config';
import {inject, bindable, customElement, bindingMode, TemplatingEngine} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';
import {logger} from '../aurelia-form';

@resolvedView('spoonx/form', 'form-element')
@customElement('form-element')
@inject(Configuration.of('aurelia-form'), Element, TemplatingEngine)
export class FormElement {
  @bindable type = 'input';
  @bindable model;
  @bindable element;
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  constructor(config, element, templatingEngine) {
    this.config           = config;
    this.element          = element;
    this.templatingEngine = templatingEngine;
    this.model            = this;
  }

  attached() {
    let element = document.createElement(this.getElementName());

    element.setAttribute('value.bind', 'value');

    this.element.appendChild(element);
    this.templatingEngine.enhance({element, bindingContext: this});
  }

  getElementName() {
    let elementName = this.config.elements[this.type];

    if (!elementName) {
      logger.warn(
        `Unable to find element for type '${this.type}'. Falling back to default '${this.config.defaultElement}'.`
      );

      elementName = this.config.elements[this.config.defaultElement];
    }

    return elementName;
  }
}
