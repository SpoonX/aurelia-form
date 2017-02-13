import {bindable, inject, customAttribute} from "aurelia-framework";

@inject(Element)
@customAttribute('prefixed')
export class Prefixed {
  @bindable attribute = 'class';
  @bindable options   = [];
  @bindable prefix;

  constructor(element) {
    this.element = element;
  }

  optionsChanged() {
    this.updateAttribute();
  }

  updateAttribute() {
    if (!this.options || !this.options.length || !this.prefix) {
      return;
    }

    let options = this.options;

    if (typeof options === 'string') {
      options = options.split(',').map(value => value.trim());
    }

    let attributeValue = this.element.getAttribute(this.attribute).split(' ');

    options.forEach(value => attributeValue.push(this.prefix + value));

    this.element.setAttribute(this.attribute, attributeValue.join(' '));
  }

  prefixChanged(next, previous) {
    if (previous) {
      this.resetAttribute(previous, this.attribute);
    }

    this.updateAttribute();
  }

  attributeChanged(next, previous) {
    this.resetAttribute(this.prefix, previous);

    this.updateAttribute();
  }

  resetAttribute(prefix, attribute) {
    if (!this.element) {
      return this;
    }

    let attributeValue = this.element.getAttribute(attribute);

    if (!attributeValue) {
      return this;
    }

    // remove all prefixed attributes based on given prefix
    attributeValue = attributeValue
      .split(' ')
      .filter(value => value.indexOf(prefix) !== 0)
      .join(' ');

    this.element.setAttribute(attribute, attributeValue);

    return this;
  }
}
