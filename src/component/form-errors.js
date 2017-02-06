import {inject, customElement, bindable, containerless, computedFrom} from 'aurelia-framework';
import {Config} from '../config';

@customElement('form-errors')
@containerless
@inject(Config)
export class FormErrors {

  @bindable
  errors;

  constructor(config) {
    this.config = config.configurations;
  }

  @computedFrom('errors')
  get invalidErrors() {
    return this.errors ? this.errors.filter(error => !this.config.errorValid(error)) : [];
  }

  @computedFrom('errors')
  get messages() {
    return this.invalidErrors.map(this.config.errorMessage);
  }

}

