import {inject} from 'aurelia-dependency-injection';
import {getLogger} from 'aurelia-logging';
import {Config as ViewManagerConfig,ViewManager,resolvedView} from 'aurelia-view-manager';
import {Validator,ValidationEngine} from 'aurelia-validatejs';
import {bindable,bindingMode,customElement,computedFrom,inject,BindingEngine} from 'aurelia-framework';

/***
 * is only used internally. In future might make this a seperate plugin
 */
export declare class AttributesCustomAttribute {
  constructor(element?: any);
  valueChanged(): any;
}
export declare {
  entitySchema
} from 'aurelia-form/entity-schema';
export declare {
  Form
} from 'aurelia-form/form';
export * from 'aurelia-form/utils';
export * from 'aurelia-form/converter/normalizeOptions';
export declare function configure(aurelia?: any, configCallback?: any): any;
export declare const logger: any;
export declare class Config {
  configurations: any;
  constructor(viewManager?: any, viewManagerConfig?: any);
  
  /**
     * convenient for getting a (nested) property in the configurations
     * object.
     *
     * @param {...string} props when prop is falsy it returns the whole
     * configurations object
     *
     * @returns {*} the value of that property
     */
  fetch(props?: any): any;
  
  /**
     * extend the config to your liking. A convenient function when you would want
     * more control over the configs.
     */
  configure(configs?: any): any;
}
/**
 * Takes an entity and uses it's metadata to generate a form-schema. Entities
 * behave like normal objects in the way one can get and set the values on
 * it's properties.
 *
 * @param {object} entity
 *
 * @returns {object[]} a schema consisting out of element objects
 */
export declare function entitySchema(entity?: any): any;
/***
 * Some functionalities are desired in a view model of a form. Responsibilites
 * include validation and submit.
 *
 * This class is optional and serves as a convenience class.
 *
 * - creates a messages property for storing error strings
 * - allows you to set the model which
 * - automatically triggers validation
 * - convenient methods that can be overwritten to perform action on submit and
 *   change
 */
export declare class Form {
  messages: any;
  isValid: any;
  
  /***
     * Used to get access to onSubmit and model changes could also wrap the
     * change and submit methods instead
     */
  onChange(): any;
  onSubmit(): any;
  constructor();
  validate(): any;
  detached(): any;
  submit(): any;
  change(): any;
}
export declare function normalizeOptions(options?: any): any;
export declare class EntityForm {
  entity: any;
  model: any;
  bind(): any;
}
export declare class FormField {
  element: any;
  value: any;
  message: any;
  constructor(config?: any, viewManager?: any);
  attached(): any;
  visible: any;
  label: any;
  view: any;
  hasViewModel: any;
  type: any;
}
export declare class FormFields {
  schema: any;
  model: any;
  messages: any;
  attached(): any;
  hasKeyProp(element?: any): any;
}
export declare class SchemaForm {
  schema: any;
  model: any;
  messages: any;
}
export declare class normalizeOptionsValueConverter {
  toView(options?: any): any;
}
export declare class Actions {
  activate(model?: any): any;
}
export declare class Collection {
  activate(model?: any): any;
}
export declare class Conditional {
  constructor(bindingEngine?: any);
  activate(field?: any): any;
  deactivate(): any;
}
export declare class FormGroup {
  element: any;
  message: any;
  showsLabel: any;
  showsMessage: any;
  labelText: any;
}
export declare class Options {
  activate(model?: any): any;
}
export declare class ActionsCustomElement extends Actions {

}
export declare class CheckboxesElement extends Options {

}
export declare class CollectionCustomElement extends Collection {

}
export declare class ConditionalCustomElement extends Base {

}
/***
 * in case behaviour has to be altered
 */
export declare class FormGroupCustomElement extends FormGroup {

}
export declare class RadiosElement extends Options {

}
export declare class SelectElement extends Options {

}