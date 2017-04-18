import {bindable, customElement, bindingMode, inject} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';
import {Configuration} from 'aurelia-config';

@resolvedView('spoonx/form', 'form-group')
@customElement('form-group')
@inject(Configuration.of('aurelia-form'))
export class FormGroup {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = null;

  @bindable classes;

  @bindable elementClasses = this.config.defaultElementClasses;

  @bindable labelClasses = this.config.defaultLabelClasses;

  @bindable element = 'input';

  @bindable placeholder = '';

  @bindable state;

  @bindable name;

  @bindable label;

  @bindable error;

  @bindable message;

  @bindable type = 'text';

  @bindable behavior;

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable autofocus;

  @bindable required;

  @bindable options;

  @bindable multiple = false;

  @bindable selectOptions = [];

  @bindable optionLabel;

  @bindable translate;

  config;

  constructor(config) {
    this.config   = config;
    this.behavior = config.defaultBehavior;
  }

  is(oneOf, then, source) {
    if (typeof oneOf === 'string') {
      oneOf = oneOf.split(',').map(one => one.trim());
    }

    source = source || this.element;
    then   = then || true;

    return oneOf.indexOf(source) > -1 ? then : false;
  }

  byPattern(pattern, defaults, overrides = '') {
    let regex = new RegExp(pattern, 'gi');

    if (regex.test(overrides)) {
      defaults = defaults.replace(regex, '');
    }

    return `${defaults} ${overrides}`.replace('  ', ' ').trim();
  }

  when(conditional, value, otherwise) {
    return conditional ? value : (otherwise || '');
  }
}
