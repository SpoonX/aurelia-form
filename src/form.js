import {bindable, inject} from 'aurelia-framework';

@inject(Element)
export class Form {
  @bindable data;

  @bindable working = false;

  @bindable type = false;

  constructor(formElement) {
    this.element = formElement;
  }

  submit () {
    return this.onSubmit();
  }

  onSubmit () {
    if (!this.data.validation) {
      return this.element.dispatchEvent(new CustomEvent('complete', this.data.asObject()));
    }

    this.data.validation.validate()
      .then(result => {
        this.element.dispatchEvent(new CustomEvent('complete', this.data.asObject()));
      })
      .catch(error => {});
  }
}
