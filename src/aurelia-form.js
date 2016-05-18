import {Config} from './config';

function configure(aurelia, configCallback) {
  let config = aurelia.container.get(Config);

  configCallback(config);

  aurelia.globalResources(
    './schema-form',
    './schema-form-elements',
    './schema-form-element'
  );
}

export {
  configure
};
