import {Config} from './config';
import {component} from './component';
import {bindingMode, bindable, computedFrom, inject} from 'aurelia-framework';

@inject(Config, Element)
export class FormFieldCustomElement {

  @bindable attribute

  @bindable({defaultBindingMode: bindingMode.twoWay})
  value

  constructor(config, element) {
    this.config = config;
    this.element = element;
  }

  attached() {
    // consider: using aurelia DOM pal
    let attrsElmnt = $(this.element).find('[attrs]');
    if (attrsElmnt) {
      attrsElmnt.attr(this.attribute.attributes || {});
    }
  }

  @computedFrom('attribute')
  get label() {
    return this.attribute.label || this.attribute.key;
  }

  @computedFrom('attribute')
  get component() {
    this.attribute.type = aliasOf(this.config, this.attribute.type);
    return component(this.config, this.attribute);
  }

  /**
   * Calculates what to use for component.
   *
   * Checks if the user has defined a custom component and uses that one when
   * that is the case. Otherwise fallback to the framework it's components. If
   * none of them are defined it warns the developer of this.
   */
  @computedFrom('component')
  get isHtmlComponent() {
    return this.component ? (this.component.endsWith('.html')) : true;
  }
}

/**
 * returns a string that represents the type of which it is an alias of. If it
 * is not registered as an alias it returns itself(identity).
 *
 *
 * @param {object} config
 * @param {string} type
 * @returns {string}
 */
function aliasOf(config, type) {
  if (type === undefined) {
    return 'text';
  }
  return (config.aliases[type] !== undefined) ? config.aliases[type] : type;
}
