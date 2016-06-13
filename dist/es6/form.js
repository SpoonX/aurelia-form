import {BindingSignaler} from 'aurelia-templating-resources';

/***
 * This class is meant to be used for extending a view model that has form
 * behaviour. It's features include checking if a field is dirty. Dirty meaning
 * that it has bee touched/changed by the user. It also has a method that can be
 * overwritten to enable on submit behavior.
 *
 * Usage of this class should stay optional.
 */
@inject(BindingSignaler)
export class Form {

  constructor(signaler) {
    this.signaler = signaler;
    this.dirtyProperties = {};

    this.validator = new Validator();
    this.reporter = ValidationEngine.getValidationReporter(this.user);
    this.observer = this.reporter.subscribe(result => {
      this.errors = result.reduce(function(acc, item) {
        acc[item.propertyName] = [item.message];
        return acc;
      }, {});
    });
  }

  onSubmit() {
    console.warn('onSubmit');
  }

  validate() {
    this.signaler.signal('aurelia-form:validate');
  }

}
