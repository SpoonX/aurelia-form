import {Config} from './config';
import {component} from './component';
import {bindingMode, bindable, computedFrom, inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

@inject(Config, I18N, Element)
export class FormFieldCustomElement {

  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  value

  constructor(config, i18n, element) {
    this.i18n = i18n;
    this.config = config;
    this.element = element;
  }

  attached() {
    // consider: using aurelia DOM pal
    let attrsElmnt = $(this.element).find('[attrs]');
    if (attrsElmnt) {
      attrsElmnt.attr(this.schema.attributes || {});
    }
  }

  @computedFrom('schema')
  get label() {
    let str = this.schema.label || this.schema.name;
    if (this.config.translate) {
      return this.i18n.tr(str);
    }
    return str;
  }

  @computedFrom('schema')
  get component() {
    this.schema.type = aliasOf(this.config, this.schema.type);
    return component(this.config, this.schema);
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
    return (this.component.endsWith('.html'));
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
