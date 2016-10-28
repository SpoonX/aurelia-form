/************************************************/
/* spoonx-tools configuration                   */
/* @see https://github.com/SpoonX/spoonx-tools  */
/************************************************/

var appRoot = 'src/';

module.exports = {
  path : {
    root: appRoot,

    /* options and their defaults */

    /* js files to ignore
     *
     *  ignore: [],
     */

    /* future use: use TypeScript or Babel for transpiling
     *
     * useTypeScriptForDTS: false,
     */

    /* Imports to append to the import block of the main file. 
     * Add here eg. non-concated local imports in the main file as they will 
     * get removed during the build process (ValueConverters, CustomElements).
     *  
     * importsToAdd: ["import {AssociationSelect} from './association-select';"],
     */
    importsToAdd: ["import {Config} from './config';"],

    /* js to be transpiled, but not be concated
     * (ValueConverters, CustomElements)
     *
     * jsResources: [appRoot + 'association-select.js'],
     */
    jsResources: [
      appRoot + "aurelia-form/attributes.js",
      appRoot + "aurelia-form/config.js",
      appRoot + "aurelia-form/entity-schema.js",
      appRoot + "aurelia-form/form.js",
      appRoot + "aurelia-form/utils.js",
      appRoot + "aurelia-form/converter/normalizeOptions.js",
      appRoot + "aurelia-form/component/entity-form.js",
      appRoot + "aurelia-form/component/form-field.js",
      appRoot + "aurelia-form/component/form-fields.js",
      appRoot + "aurelia-form/component/schema-form.js",
      appRoot + "aurelia-form/component/framework/actions.js",
      appRoot + "aurelia-form/component/framework/collection.js",
      appRoot + "aurelia-form/component/framework/conditional.js",
      appRoot + "aurelia-form/component/framework/form-group.js",
      appRoot + "aurelia-form/component/framework/options.js",
      appRoot + "aurelia-form/component/framework/bootstrap/actions.js",
      appRoot + "aurelia-form/component/framework/bootstrap/checkboxes.js",
      appRoot + "aurelia-form/component/framework/bootstrap/collection.js",
      appRoot + "aurelia-form/component/framework/bootstrap/conditional.js",
      appRoot + "aurelia-form/component/framework/bootstrap/form-group.js",
      appRoot + "aurelia-form/component/framework/bootstrap/radios.js",
      appRoot + "aurelia-form/component/framework/bootstrap/select.js"
	],

    /* other resources that need to get copied keeping their path
     * resources: appRoot + '{** / *.css,** / *.html}',
     */
    resources: appRoot + '{**/*.css,**/*.html}',
  
    /* imports that are only used internally, eg 'extend'. no need to d.ts export them
     *
     * importsToIgnoreForDts: ['extend'],
     */
    importsToIgnoreForDts: ['extend'],

    /* sort when concating
     * sort: true,
     */
    sort: true,

    /* concat js files
     * concat: true,
     */
    concat: true,

    /* default options overwrites for karma
     * karma: {browsers: ['Chrome']}
     */
  }
};
