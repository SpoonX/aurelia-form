import {Config as ViewManagerConfig,resolvedView} from 'aurelia-view-manager';
import {getLogger} from 'aurelia-logging';
import {metadata} from 'aurelia-metadata';
import {Homefront} from 'homefront';
import {bindable,customElement,bindingMode} from 'aurelia-framework';


export const logger = getLogger('aurelia-form');

export function configure(aurelia, config) {
  aurelia.aurelia.use.plugin('aurelia-view-manager');

  aurelia.container.get(ViewManagerConfig).configureNamespace('spoonx/form', {
    location: './view/{{framework}}/{{view}}.html'
  });

  let defaultComponents = [
    'aurelia-form',
    'form-element',
    'form-label',
    'form-button',
    'form-help',
    'form-error',
    'form-group',
    'entity-form'
  ];

  let defaultElements = [
    'input',
    'checkbox',
    'radio',
    'select',
    'textarea',
    'association'
  ];

  aurelia.globalResources(
    './attribute/prefixed',
    ...defaultComponents.map(component => `./component/${component}`),
    ...defaultElements.map(component => `./component/form-${component}`)
  );

  config.elements = config.elements || {};

  defaultElements.forEach(element => {
    config.elements[element] = config.elements[element] || `form-${element}`;
  });
}

export const config = {
  'aurelia-form': {
    defaultElement       : 'input',
    defaultBehavior      : 'regular',
    defaultLabelClasses  : '',
    defaultElementClasses: '',
    elements             : {},
    validation           : {},

    submitButton: {
      enabled: true,
      options: ['primary'],
      label  : 'Submit'
    },

    aliases: {
      enum   : 'radio',
      int    : 'input',
      integer: 'input',
      number : 'input',
      float  : 'input',
      string : 'input',
      bool   : 'checkbox',
      boolean: 'checkbox',
      text   : 'textarea'
    }
  }
};

export class Metadata {
  static forTarget(target) {
    if (typeof target !== 'function') {
      target = target.constructor;
    }

    return metadata.getOrCreateOwn('spoonx:form:metadata', Homefront, target, target.name);
  }
}

export function autofocus(value = true) {
  return field(value, 'autofocus');
}

export function disabled(value = true) {
  return field(value, 'disabled');
}

export function element(value) {
  return field(value, 'element');
}

export function field(value, option) {
  return function(target, property) {
    Metadata.forTarget(target.constructor).put(`fields.${property}.${option}`, value);
  };
}

export function inputType(value) {
  return field(value, 'type');
}

export function label(value) {
  return field(value, 'label');
}

export function noRender(value = true) {
  return field(value, 'noRender');
}

export function options(value = {}) {
  return field(value, 'options');
}

export function placeholder(value) {
  return field(value, 'placeholder');
}

export function position(value = -1) {
  return field(value, 'position');
}

export function readonly(value = true) {
  return field(value, 'readonly');
}

export function required(value = true) {
  return field(value, 'required');
}

/**
 * FormCheckbox should inherit FormInput, so the bindables don't need to be copied.
 *
 * To achieve this, we will need this pull request to be merged:
 * https://github.com/aurelia/templating/pull/507
 */
@resolvedView('spoonx/form', 'form-checkbox')
@customElement('form-checkbox')
export class FormCheckbox {
  @bindable name;

  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable({defaultBindingMode: bindingMode.twoWay}) option;

  @bindable type = 'text';

  @bindable classes = '';

  @bindable placeholder = '';

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable options = {};

  @bindable autofocus;

  @bindable required;
}
