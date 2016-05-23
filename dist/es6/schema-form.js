import {bindable, bindingMode} from 'aurelia-framework';

export class schemaFormCustomElement {

  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model

  // constructor(formElement) {
  //   this.element = formElement;
  // }

  // attached () {
  //   if (this.model.hasValidation && this.model.hasValidation()) {
  //     this.validation = this.model.getValidation();
  //   }
  // }

  // submit () {
  //   return this.onSubmit();
  // }

  // onSubmit () {
  //   if (this.model.hasValidation && !this.model.hasValidation()) {
  //     return this.element.dispatchEvent(new CustomEvent('complete', this.model.asObject()));
  //   }

  //   this.validation.validate()
  //     .then(() => {
  //       this.element.dispatchEvent(new CustomEvent('complete', this.model.asObject()));
  //     })
  //     .catch(error => {});
  // }

}
