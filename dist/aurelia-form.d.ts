import {Config as ViewManagerConfig,resolvedView} from 'aurelia-view-manager';
import {getLogger} from 'aurelia-logging';
import {metadata} from 'aurelia-metadata';
import {Homefront} from 'homefront';
import {bindable,inject,customAttribute,customElement,children,computedFrom,bindingMode,TemplatingEngine} from 'aurelia-framework';
import {Configuration} from 'aurelia-config';
import {DOM} from 'aurelia-pal';

export declare const logger: any;
export * from 'aurelia-form/decorator/index';
export declare function configure(aurelia?: any, config?: any): any;
export declare const config: any;
export declare class Metadata {
  static forTarget(target?: any): any;
}
export declare class Prefixed {
  attribute: any;
  options: any;
  prefix: any;
  constructor(element?: any);
  optionsChanged(): any;
  updateAttribute(): any;
  prefixChanged(next?: any, previous?: any): any;
  attributeChanged(next?: any, previous?: any): any;
  resetAttribute(prefix?: any, attribute?: any): any;
}
export declare class AureliaForm {
  behavior: any;
  classes: any;
  entity: any;
  validated: any;
  buttonOptions: any;
  buttonLabel: any;
  buttonEnabled: any;
  formGroups: any;
  validationController: any;
  mapped: any;
  element: any;
  validateTrigger: any;
  constructor(config?: any, element?: any);
  submit(): any;
  changed(trigger?: any, event?: any): any;
  validate(property?: any): any;
  emit(event?: any, data?: any): any;
  formGroupsChanged(): any;
  behaviorChanged(newValue?: any): any;
  updateFormGroups(): any;
}
export declare class EntityForm {
  entity: any;
  behavior: any;
  classes: any;
  skip: any;
  validated: any;
  buttonOptions: any;
  buttonLabel: any;
  buttonEnabled: any;
  elements: any;
  isVisible(fieldName?: any): any;
}
export declare class FormAssociation {
  value: any;
  name: any;
  options: any;
  disabled: any;
  placeholder: any;
}
export declare class FormButton {
  label: any;
  type: any;
  classes: any;
  disabled: any;
  options: any;
}
/**
 * FormCheckbox should inherit FormInput, so the bindables don't need to be copied.
 *
 * To achieve this, we will need this pull request to be merged:
 * https://github.com/aurelia/templating/pull/507
 */
export declare class FormCheckbox {
  name: any;
  value: any;
  option: any;
  type: any;
  classes: any;
  placeholder: any;
  readonly: any;
  disabled: any;
  options: any;
  autofocus: any;
  required: any;
}
export declare class FormElement {
  type: any;
  element: any;
  DOMElement: any;
  value: any;
  name: any;
  classes: any;
  placeholder: any;
  readonly: any;
  disabled: any;
  multiple: any;
  options: any;
  selectOptions: any;
  optionLabel: any;
  autofocus: any;
  required: any;
  proxyAttributes: any;
  constructor(config?: any, DOMElement?: any, templatingEngine?: any);
  attached(): any;
  setAttributes(DOMElement?: any): any;
  getElementName(): any;
}
export declare class FormError {
  error: any;
  classes: any;
}
export declare class FormGroup {
  value: any;
  classes: any;
  element: any;
  placeholder: any;
  state: any;
  name: any;
  label: any;
  error: any;
  message: any;
  type: any;
  behavior: any;
  readonly: any;
  disabled: any;
  autofocus: any;
  required: any;
  options: any;
  multiple: any;
  selectOptions: any;
  optionLabel: any;
  config: any;
  constructor(config?: any);
  is(oneOf?: any, then?: any, source?: any): any;
  when(conditional?: any, value?: any, otherwise?: any): any;
}
export declare class FormHelp {
  message: any;
  classes: any;
}
export declare class FormInput {
  value: any;
  checked: any;
  type: any;
  name: any;
  classes: any;
  placeholder: any;
  readonly: any;
  disabled: any;
  options: any;
  autofocus: any;
  required: any;
}
export declare class FormLabel {
  label: any;
  visible: any;
  classes: any;
}
export declare class FormRadio {
  name: any;
  value: any;
  option: any;
  type: any;
  classes: any;
  placeholder: any;
  readonly: any;
  disabled: any;
  options: any;
  autofocus: any;
  required: any;
}
export declare class FormSelect {
  value: any;
  name: any;
  classes: any;
  readonly: any;
  disabled: any;
  multiple: any;
  selectOptions: any;
  options: any;
  optionLabel: any;
  autofocus: any;
  required: any;
  optionLabels: any;
  getOptionLabel(option?: any): any;
}
export declare class FormTextarea {
  name: any;
  classes: any;
  value: any;
  placeholder: any;
  autofocus: any;
  required: any;
  cols: any;
  rows: any;
  disabled: any;
  maxlength: any;
  readonly: any;
  wrap: any;
}
export declare function autofocus(value?: any): any;
export declare function disabled(value?: any): any;
export declare function element(value?: any): any;
export declare function field(value?: any, option?: any): any;
export declare {
  placeholder
} from 'aurelia-form/placeholder';
export declare {
  label
} from 'aurelia-form/label';
export declare {
  element
} from 'aurelia-form/element';
export declare {
  position
} from 'aurelia-form/position';
export declare {
  autofocus
} from 'aurelia-form/autofocus';
export declare {
  disabled
} from 'aurelia-form/disabled';
export declare {
  readonly
} from 'aurelia-form/readonly';
export declare {
  required
} from 'aurelia-form/required';
export declare {
  noRender
} from 'aurelia-form/noRender';
export declare {
  inputType
} from 'aurelia-form/inputType';
export declare {
  options
} from 'aurelia-form/options';
export declare function inputType(value?: any): any;
export declare function label(value?: any): any;
export declare function noRender(value?: any): any;
export declare function options(value?: any): any;
export declare function placeholder(value?: any): any;
export declare function position(value?: any): any;
export declare function readonly(value?: any): any;
export declare function required(value?: any): any;