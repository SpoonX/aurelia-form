var _dec, _class;

import { BindingEngine, inject } from 'aurelia-framework';

export let Conditional = (_dec = inject(BindingEngine), _dec(_class = class Conditional {

  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  activate(field) {
    this.model = field.value;
    let calculateSchema = () => {
      this.schema = field.element.schema(this.model);
    };

    calculateSchema();

    if (typeof this.model === 'object' && field.element.observe) {
      this.observer = this.bindingEngine.propertyObserver(this.model, field.element.observe).subscribe(calculateSchema);
    }
  }

  deactivate() {
    this.observer && this.observer.dispose();
  }

}) || _class);