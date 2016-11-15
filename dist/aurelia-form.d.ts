import {customAttribute,inject,bindable,bindingMode,customElement,computedFrom,BindingEngine} from 'aurelia-framework';
import {Config as ViewManagerConfig,resolvedView,ViewManager} from 'aurelia-view-manager';
import {Validator,ValidationEngine} from 'aurelia-validatejs';
import {getLogger} from 'aurelia-logging';

/***
 * is only used internally. In future might make this a seperate plugin
 */
export declare class AttributesCustomAttribute {
  constructor(element?: any);
  valueChanged(): any;
}

/**
 * @param {object|string|string[]} value
 * @returns {object} where all the values are strings or boolean
 */
export declare function normalizedAttributes(value?: any): any;
// added for bundling and extending
export declare {
  AttributesCustomAttribute
} from 'aurelia-form/attributes';
export declare {
  entitySchema
} from 'aurelia-form/entity-schema';
export declare {
  Form
} from 'aurelia-form/form';
export declare {
  normalizeOptions
} from 'aurelia-form/utils';
export declare {
  normalizeOptionsValueConverter
} from 'aurelia-form/converter/normalizeOptions';
export declare {
  EntityForm
} from 'aurelia-form/component/entity-form';
export declare {
  SchemaForm
} from 'aurelia-form/component/schema-form';
export declare {
  FormFields
} from 'aurelia-form/component/form-fields';
export declare {
  FormField
} from 'aurelia-form/component/form-field';
export declare {
  Options
} from 'aurelia-form/component/framework/options';
export declare {
  FormGroup
} from 'aurelia-form/component/framework/form-group';
export declare {
  Conditional
} from 'aurelia-form/component/framework/conditional';
export declare {
  Collection
} from 'aurelia-form/component/framework/collection';
export declare {
  Actions
} from 'aurelia-form/component/framework/actions';
export declare {
  ActionsCustomElement
} from 'aurelia-form/component/framework/bootstrap/actions';
export declare {
  CheckboxesElement
} from 'aurelia-form/component/framework/bootstrap/checkboxes';
export declare {
  CollectionCustomElement
} from 'aurelia-form/component/framework/bootstrap/collection';
export declare {
  ConditionalCustomElement
} from 'aurelia-form/component/framework/bootstrap/conditional';
export declare {
  FormGroupCustomElement
} from 'aurelia-form/component/framework/bootstrap/form-group';
export declare {
  RadiosElement
} from 'aurelia-form/component/framework/bootstrap/radios';
export declare {
  SelectElement
} from 'aurelia-form/component/framework/bootstrap/select';
export declare function configure(aurelia?: any, configOrConfigure?: any): any;
export declare {
  Config
};
export declare class Config {
  configurations: any;
  constructor();
  
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
export declare const logger: any;

/**
 * Used to make options that are defined in schema element comply with a
 * specific format which is used to render them
 *
 * @param {object[]|string[]} options
 * @returns {array} which is transformed to an object with name and value
 * properties
 */
export declare function normalizeOptions(options?: any): any;
export declare class EntityForm {
  entity: any;
  model: any;
  messages: any;
  descriptions: any;
  bind(): any;
}
export declare class FormField {
  static elementCount: any;
  element: any;
  model: any;
  value: any;
  message: any;
  description: any;
  constructor(config?: any, viewManager?: any, element?: any);
  attached(): any;
  detached(): any;
  visible: any;
  label: any;
  view: any;
  hasViewModel: any;
  type: any;
  elementChanged(element?: any): any;
}
export declare class FormFields {
  schema: any;
  model: any;
  messages: any;
  descriptions: any;
  attached(): any;
  hasKeyProp(element?: any): any;
}
export declare class SchemaForm {
  schema: any;
  model: any;
  messages: any;
  descriptions: any;
}
export declare class normalizeOptionsValueConverter {
  toView(options?: any): any;
}
export declare class Actions {
  activate(vm?: any): any;
}

/**
 * @class used to extend the association components for each and every render strategy(framework)
 */
export declare class Association {
  association: any;
  manyAssociation: any;
  activate(formField?: any): any;
}
export declare class Collection {
  activate(vm?: any): any;
  
  /**
     * Generates a schema for each of the items in the collection. This is done
     * to add an index to the each of the schema elements of the collection.
     *
     * @param {number} index
     * @param {object[]} schema for a single item
     *
     * @returns {object[]} schema elements with an index property
     */
  itemSchema(schema?: any, index?: any): any;
}
export declare class Conditional {
  constructor(bindingEngine?: any);
  activate(field?: any): any;
  deactivate(): any;
}
export declare class FormGroup {
  element: any;
  message: any;
  description: any;
  constructor(config?: any);
  showsLabel: any;
  showsMessage: any;
  showsDescription: any;
  labelText: any;
}
export declare class Options {
  activate(model?: any): any;
}
export declare class ActionsCustomElement extends Actions {

}
export declare class AssociationElement extends Association {

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