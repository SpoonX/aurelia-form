import {bindable, customElement, bindingMode} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

/**
 * FormCheckbox should inherit FormInput, so the bindables don't need to be copied.
 *
 * To achieve this, we will need this pull request to be merged:
 * https://github.com/aurelia/templating/pull/507
 */
@resolvedView('spoonx/form', 'form-checkbox')
@customElement('form-checkbox')
export class FormCheckbox {
  @bindable name;

  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable({defaultBindingMode: bindingMode.twoWay}) option;

  @bindable type = 'text';

  @bindable classes = '';

  @bindable placeholder = '';

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable options = {};
}
