import {Config} from './config';
export {entitySchema} from './entity-schema';
export {Form} from './form';
export {FormField} from './form-field';

export function configure(aurelia, configCallback) {
  if (typeof configCallback === 'function') {
    /* only perform configurations when providing a configCallback */
    let config = aurelia.container.get(Config);
    configCallback(config);
  }

  aurelia.globalResources(
    './elements/schema-form',
    './elements/form-fields',
    './elements/form-field'
  );
}

export {Config};
