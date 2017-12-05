/************************************************/
/* spoonx-tools configuration                   */
/* @see https://github.com/SpoonX/spoonx-tools  */
/************************************************/

const appRoot = 'src/';

module.exports = {
  path: {
    root: appRoot,

    importsToAdd: [],

    // JS to be transpiled, but not be concated (ValueConverters, CustomElements)
    jsResources: [
       appRoot + 'attribute/prefixed.js',
       appRoot + 'component/aurelia-form.js',
       appRoot + 'component/entity-form.js',
       appRoot + 'component/form-association.js',
       appRoot + 'component/form-button.js',
       appRoot + 'component/form-checkbox.js', 
       appRoot + 'component/form-element.js',
       appRoot + 'component/form-error.js',
       appRoot + 'component/form-group.js',
       appRoot + 'component/form-help.js',
       appRoot + 'component/form-input.js',
       appRoot + 'component/form-label.js',
       appRoot + 'component/form-radio.js',
       appRoot + 'component/form-select.js',
       appRoot + 'component/form-textarea.js'
    ],

    // Other resources that need to get copied keeping their path
    resources: appRoot + '{**/*.css,**/*.html}',

    // Imports that are only used internally, eg 'extend'. no need to d.ts export them
    importsToIgnoreForDts: ['extend'],

    // sort when concating
    sort: false,

    // concat js files
    concat: true,
  }
};
