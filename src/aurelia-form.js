import {Config as ViewManagerConfig} from "aurelia-view-manager";
import {getLogger} from "aurelia-logging";

export const logger = getLogger('aurelia-form');

export function configure(aurelia) {
  aurelia.aurelia.use.plugin('aurelia-view-manager');

  aurelia.container.get(ViewManagerConfig).configureNamespace('spoonx/form', {
    location: './view/{{framework}}/{{view}}.html'
  });

  aurelia.globalResources(
    './component/form-label',
    './component/form-input',
    './component/form-help',
    './component/form-error',
  );
}

export const config = {
  'aurelia-form': {
    // Nothing yet.
  }
};
