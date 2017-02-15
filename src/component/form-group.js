import {bindable, customElement, bindingMode} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-group')
@customElement('form-group')
export class FormGroup {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = null;

  @bindable classes;

  @bindable element;

  @bindable state;

  @bindable label;

  @bindable error;

  @bindable message;

  @bindable type;

  @bindable behavior;

  is(oneOf, then, source) {
    if (typeof oneOf === 'string') {
      oneOf = oneOf.split(',').map(one => one.trim());
    }

    source = source || this.element;
    then   = then || true;

    return oneOf.indexOf(source) > -1 ? then : false;
  }

  when(conditional, value, otherwise) {
    return conditional ? value : (otherwise || '');
  }
}
