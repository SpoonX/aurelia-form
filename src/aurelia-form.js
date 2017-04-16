import {Config as ViewManagerConfig} from 'aurelia-view-manager';
import {getLogger} from 'aurelia-logging';

export const logger = getLogger('aurelia-form');

export * from './decorator/index';

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
