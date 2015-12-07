import {bindable, inject} from 'aurelia-framework';

@inject(Element)
export class Form {
  @bindable data;

  @bindable working = false;

  @bindable type = false;

  constructor(formElement) {
    this.element = formElement;
  }

  attached () {
    if (this.data.hasValidation()) {
      this.validation = this.data.getValidation();
    }
  }

  submit () {
    return this.onSubmit();
  }

  onSubmit () {
    if (!this.data.hasValidation()) {
      return this.element.dispatchEvent(new CustomEvent('complete', this.data.asObject()));
    }

    this.validation.validate()
      .then(() => {
        this.element.dispatchEvent(new CustomEvent('complete', this.data.asObject()));
      })
      .catch(error => {});
  }
}
