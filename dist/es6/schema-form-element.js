import {Config} from './config';
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
    if (!this.schema.type) { /* use text when type is not defined */
      this.schema.type = 'text';
    }

    return customComponent(this.config, this.schema) || frameworkComponent(this.config, this.schema) || defaultComponent(this.config, this.schema);

    function defaultComponent(config, schema) {
      schema.type = 'text';
      return frameworkComponent(config, schema);
    }

    function customComponent(config, schema) {
      let component = config.components[schema.type]; // has custom component?
      return component ? component.replace('{{location}}', config.location) : false;
    }

    function frameworkComponent(config, schema) {
      let components = config.frameworkComponents[schema.type];
      return components ? `${frameworkDir(config.framework)}/${components}` : false;
    }
  }

  @computedFrom('config')
  get errorsComponent() {
    return `${frameworkDir(this.config.framework)}/errors.html`;
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

  @computedFrom('value')
  get errors() {
    if (!this.value) {
      return [];
    }
    return this.value.validate ? this.value.validate() : [];
  }
}

function frameworkDir(framework) {
  return `./components/${framework}`;
}
