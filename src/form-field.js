import {Config} from './config';
import {component} from './component';
import {bindingMode, bindable, computedFrom, inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

@inject(Config, I18N, Element)
export class schemaFormElementCustomElement {

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

  valueChanged(a, b) {
    //TODO: this is where we could validate
    return a;
  }

  @computedFrom('schema')
  get label() {
    if (this.config.translate) {
      return this.i18n.tr(this.schema.name);
    }
    return this.schema.name;
  }

  @computedFrom('schema')
  get component() {
    return component(this.config, this.schema.type);
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
