import {Config} from '../config';
import {bindingMode, bindable, computedFrom, inject, customElement} from 'aurelia-framework';
import {resolvedView, ViewManager} from 'aurelia-view-manager';

@customElement('form-field')
@resolvedView('spoonx/form', 'form-field')
@inject(Config, ViewManager)
export class FormField {

  @bindable element

  @bindable({defaultBindingMode: bindingMode.twoWay})
  value

  @bindable message

  constructor(config, viewManager) {
    this.config      = config;
    this.viewManager = viewManager;
  }

  /**
   * Used to determine the what to display
   *
   * @returns {string} the label and otherwise the key string
   */
  @computedFrom('element')
  get label() {
    return this.element.label || this.element.key;
  }

  /**
   * Returns the string that points to the template file of that specific form
   * element type.
   * @returns {string}
   */
  @computedFrom('element')
  get view() {
    let type          = this.type;
    this.element.type = type;

    return this.viewManager.resolve('spoonx/form', type);
  }

  /**
   * Calculates what component to use
   *
   * Checks if the user has defined a custom component and uses that one when
   * that is the case. Otherwise fallback to the framework it's components. If
   * none of them are defined it warns the developer of this.
   * @returns {boolean} true when has a viewModel
   */
  @computedFrom('view')
  get hasViewModel() {
    return (!this.view.endsWith('.html'));
  }

  /**
  * returns a string that represents the type of which it is an alias of. If it
  * is not registered as an alias it returns itself(identity).
  *
  * It also resolves recursively and makes sure it does not end up in a infinite
  * loop because of a malformed config.
  * @returns {string}
  */
  @computedFrom('element')
  get type() {
    let type     = this.element.type;
    let alias    = this.config.fetch('aliases', type); /* get an alias if it has one */
    let previous = []; /* used to avoid an infinite loop */

    /***
     * if it does have and alias, and has not resolved that alias previously,
     * check if that alias points to another type or alias.
     */
    while (alias && !(alias in previous)) {
      type  = alias;
      alias = this.config.fetch('aliases', type);

      previous.push(type);
    }

    return type;
  }

}
