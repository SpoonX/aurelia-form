
export let Association = class Association {

  activate(formField) {
    this.formField = formField;

    this.association = toArray(this.formField.element.association).map(association => this.formField.model[association]);
    this.manyAssociation = this.formField.model[this.formField.element.manyAssociation];
  }
};

function toArray(value) {
  if (typeof value === 'undefined') {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}