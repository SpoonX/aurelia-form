export class Association {

  association;
  manyAssociation;

  activate(vm) {
    this.vm = vm; /* the form-fields view model */

    this.modelChanged(this.vm.model);

    /* should observe for changes on either the model or the element */
    this.modelSubscription = this.bindingEngine
      .propertyObserver(this.vm, 'model')
      .subscribe(() => {
        console.log('called');
        this.modelChanged(this.vm.model)
      });
  }

  modelChanged(model) {
    /* could do checks if are valid associations */
    this.association     = toArray(this.vm.element.association).map(association => model[association]);
    this.manyAssociation = model.manyAssociation;

    console.log(this);
  }

  deactive() {
    this.modelSubscription.dispose();
  }

}

function toArray(value) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}
