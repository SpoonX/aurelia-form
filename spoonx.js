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
    jsResources: [],

    // Other resources that need to get copied keeping their path
    resources: appRoot + '{**/*.css,**/*.html}',

    // Imports that are only used internally, eg 'extend'. no need to d.ts export them
    importsToIgnoreForDts: ['extend'],

    // sort when concating
    sort: false,

    // concat js files
    concat: false,
  }
};
