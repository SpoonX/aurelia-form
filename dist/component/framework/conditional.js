import {BindingEngine, inject} from 'aurelia-framework';
import {logger}                from '../../logger';

@inject(BindingEngine)
export class Conditional {

  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  activate(field) {
    this.model  = field.value;
    this.schema = [];

    let calculateSchema = () => {
      let schema = field.element.schema(this.model);

      if (Array.isArray(schema)) {
        this.schema = schema;
        return schema;
      }

      if (isPromise(schema)) {
        return schema.then(resolved => {
          this.schema = resolved;
        });
      }

      logger.error(`${field.element.type} does not return a schema`);
    };

    calculateSchema();

    if (typeof this.model === 'object' && field.element.observe) {
      this.observer = this.bindingEngine
        .propertyObserver(this.model, field.element.observe)
        .subscribe(calculateSchema);
    }
  }

  deactivate() {
    this.observer && this.observer.dispose();
  }

}

function isPromise(value) {
  return (value instanceof Promise);
}
