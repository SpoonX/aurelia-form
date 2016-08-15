export class Association {

  association;
  manyAssociation;

  activate(vm) {
    this.vm = vm; /* the form-fields view model */

    /* should observe for changes on either the model or the element */
    this.modelSubscription = this.bindingEngine.propertyObserver(this.vm, 'model').subscribe(this.modelChanged);
  }

  modelChanged(model) {
    /* could do checks if are valid associations */
    this.association     = arrayify(this.vm.element.association).map(association => model[association]);
    this.manyAssociation = model.manyAssociation;
  }

  deactive() {
    this.modelSubscription.dispose();
  }

}

function arrayify(value) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}
