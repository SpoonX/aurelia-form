import {BindingEngine, inject} from 'aurelia-framework';

@inject(BindingEngine)
export class Conditional {

  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  activate(field) {
    this.model            = field.value;
    const calculateSchema = () => {
      this.schema = field.element.schema(this.model);
    };

    calculateSchema();

    if (typeof this.model === 'object' && field.element.observe) {
      this.observer = this.bindingEngine.propertyObserver(this.model, field.element.observe)
        .subscribe(calculateSchema);
    }
  }

  deactivate() {
    this.observer && this.observer.dispose();
  }

}
