import {Configuration} from 'aurelia-config';
import {inject, bindable, customElement, bindingMode, TemplatingEngine} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';
import {logger} from '../aurelia-form';
import {DOM} from 'aurelia-pal';

@resolvedView('spoonx/form', 'form-element')
@customElement('form-element')
@inject(Configuration.of('aurelia-form'), DOM.Element, TemplatingEngine)
export class FormElement {
  @bindable type = 'text';

  @bindable element = 'input';

  @bindable DOMElement;

  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable name = '';

  @bindable classes = '';

  @bindable placeholder = '';

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable options = {};

  proxyAttributes = [
    'value',
    'name',
    'classes',
    'placeholder',
    'readonly',
    'disabled',
    'options',
    'type'
  ];

  constructor(config, DOMElement, templatingEngine) {
    this.config           = config;
    this.DOMElement       = DOMElement;
    this.templatingEngine = templatingEngine;
  }

  attached() {
    let element = DOM.createElement(this.getElementName());

    this.setAttributes(element);
    this.DOMElement.appendChild(element);
    this.templatingEngine.enhance({element, bindingContext: this});
  }

  setAttributes(DOMElement) {
    this.proxyAttributes.forEach(attribute => DOMElement.setAttribute(`${attribute}.bind`, attribute));
  }

  getElementName() {
    let elementName = this.config.elements[this.config.aliases[this.element] || this.element];

    if (!elementName) {
      logger.warn(
        `Unable to find element for element '${this.element}'. Falling back to default '${this.config.defaultElement}'.`
      );

      elementName = this.config.elements[this.config.defaultElement];
    }

    return elementName;
  }
}
