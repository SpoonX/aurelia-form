import {Config} from './config';
import {entitySchema} from './entity-schema';

function configure(aurelia, configCallback) {
  let config = aurelia.container.get(Config);

  configCallback(config);

  aurelia.globalResources(
    './schema-form',
    './form-fields',
    './form-field'
  );
}

export {
  configure,
  entitySchema
};
