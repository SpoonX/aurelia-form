/**
 * @class used to extend the association components for each and every render strategy(framework)
 */
export class Association {

  association;
  manyAssociation;

  activate(formField) {
    this.formField = formField;
    /* the form-fields view model */

    /* should observe for changes on either the model or the element */
    this.association     = toArray(this.formField.element.association).map(association => this.formField.model[association]);
    this.manyAssociation = this.formField.model[this.formField.element.manyAssociation];
  }
}

/**
 * converts something that is not an array into something that is wrapped by an
 * array. If value is not passed it returns an empty array
 *
 * @param {*} value
 *
 * @returns {*[]}
 */
function toArray(value) {
  if (typeof value === 'undefined') {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}
