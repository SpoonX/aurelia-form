import {bindable, bindingMode, customElement} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';
import {logger} from '../logger';

@customElement('form-fields')
@resolvedView('spoonx/form', 'form-fields')
export class FormFields {
  @bindable schema

  @bindable({defaultBindingMode: bindingMode.twoWay})
  model

  @bindable messages

  attached() {
    if (typeof this.model !== 'object') {
      logger.warn('model is not an object');
    }
  }

  hasKeyProp(element) {
    return Boolean(element.key);
  }
}
