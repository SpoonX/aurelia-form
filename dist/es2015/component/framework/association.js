
export let Association = class Association {

  activate(formField) {
    this.formField = formField;

    let element = this.formField.element;

    element.property = element.property || 'name';

    if (this.association) {
      this.association = toArray(this.formField.element.association).map(association => this.formField.model[association]);
    }

    if (this.manyAssociation) {
      this.manyAssociation = this.formField.model[this.formField.element.manyAssociation];
    }

    element.hidePlaceholder = element.hidePlaceholder || false;
    element.selectablePlaceholder = element.selectablePlaceholder || false;
    element.placeholderValue = element.placeholderValue || 0;
  }
};

function toArray(value) {
  if (typeof value === 'undefined') {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}