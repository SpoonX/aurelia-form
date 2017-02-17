# Installation

## Validation
For validation, take a look at the [validation plugin](https://github.com/SpoonX/aurelia-form-validation) for aurelia-form.
All it requires is installation, and you'll have validation!

## Enabling the plugin
The following code snippets illustrate how to set up aurelia-form for your project.

In your main.js file, add the following:

### Using aurelia-config
[Aurelia-config](https://aurelia-config.spoonx.org/) makes it easy to register plugins and configure them.

```js
aurelia.use.plugin('aurelia-config', configure => {
  return configure([
    'aurelia-form'
  ]);
});
```

Here's an example including validation, and aurelia-orm (for `<entity-form />`):

```js
aurelia.use.plugin('aurelia-config', configure => {
  return configure([
    'aurelia-api',
    'aurelia-orm',
    'aurelia-form',
    'aurelia-form-validation'
  ], yourConfiguration);
});
```

### Without aurelia-config
Aurelia-config is optional (but recommended!).
Without aurelia-config, registering the plugins works exactly like expected:

```js
aurelia.use.plugin('aurelia-form');
```

Configurations can be supplied using the second argument.

## Aurelia-Cli

Run `npm i aurelia-form --save` from your project root.

```js
"dependencies": [
  {
    "name": "aurelia-form",
    "path": "../node_modules/aurelia-form/dist/amd",
    "main": "aurelia-form",
    "resources": [
      "**/*.html",
      "**/*.js"      
    ]
  },
  // ...
],
```

## Jspm

Run `jspm i aurelia-form` from your project root.

Add following to the desired `includes` section of `build/bundles.js`, eg:

```js
"aurelia": {
  "includes": [
    //...
    "aurelia-form",
    "[aurelia-form/**/*.js]",
    "aurelia-form/**/*.html!text",
    //...
  ]
}
```

If the installation results in having forks, try resolving them by running:

```sh
jspm inspect --forks
jspm resolve --only registry:package-name@version
```

## Webpack

Run `npm i aurelia-form --save` from your project root.

And add `aurelia-form` in the `coreBundles.aurelia` section of your `webpack.config.js`.

## Typescript

Npm-based installations pick up the typings automatically. For Jspm-based installations, run `typings i github:spoonx/aurelia-form` or add `"aurelia-form": "github:spoonx/aurelia-form",` to your `typings.json` and run `typings i`.
