import {bindable, customElement, bindingMode, computedFrom} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-select')
@customElement('form-select')
export class FormSelect {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable name = '';

  @bindable classes = '';

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable multiple = false;

  @bindable selectOptions = [];

  @bindable options = {};

  @bindable optionLabel = 'name';

  @computedFrom('selectOptions', 'optionLabel')
  get optionLabels() {
    return this.selectOptions.map(option => {
      if (typeof option === 'object' && this.optionLabel) {
        option.label = option[this.optionLabel] || '';
      }

      return option;
    });
  }


  getOptionLabel(option) {
    if (typeof option === 'object' && this.optionLabel) {
      return option[this.optionLabel] || option;
    }

    return option;
  }
}
