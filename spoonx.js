/************************************************/
/* spoonx-tools configuration                   */
/* @see https://github.com/SpoonX/spoonx-tools  */
/************************************************/

var appRoot = 'src/';

module.exports = {
  path: {
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

     importsToAdd: [],

    // js to be transpiled, but not be concated
    // (ValueConverters, CustomElements)

    jsResources: [],

    /* other resources that need to get copied keeping their path
     * resources: appRoot + '{** / *.css,** / *.html}',
     */
     resources: appRoot + '{**/*.css,**/*.html}',

    /* imports that are only used internally, eg 'extend'. no need to d.ts export them
     *
     * importsToIgnoreForDts: ['extend'],
     */

    /* sort when concating
     * sort: true,
     */
     sort: true,

    /* concat js files
     * concat: true,
     */
     concat: true,

    /* options overwrites for karma. defaults are in ./node_modules/spoonx-tools/karma.conf.js
     *
     * karma: {browsers: ['Chrome']}
     */
  }
};
