# aurelia-form

[![Build Status](https://travis-ci.org/SpoonX/aurelia-form.svg?branch=master)](https://travis-ci.org/SpoonX/aurelia-form)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

> Form generation, validation and fun. This is a plugin for the [Aurelia](http://www.aurelia.io/) platform.

- Easy to use with clear [documentation](http://aurelia-form.spoonx.org/)
- [Form validation](https://aurelia-form-validation.spoonx.org/)
- Support for multiple css frameworks enabled by [aurelia view manager](https://aurelia-view-manager.spoonx.org/)
- Configuration simplified through [aurelia-config](https://aurelia-config.spoonx.org/)
- Automatic forms for [aurelia-orm](https://aurelia-orm.spoonx.org/) entities
- Built inside-out (everything is optional)
- Auto translations (if [aurelia-i18n](https://github.com/aurelia/i18n) is configured)
- Declarative way of building forms
- Multi css-framework support ([is your framework missing](https://github.com/SpoonX/aurelia-form/tree/master/src/component/view)? Submit a PR!)
- Aliases for types so you can reuse elements for similar or different types

## Documentation

You can find detailed documentation over at the [aurelia-form documentation](http://aurelia-form.spoonx.org/).

The [changelog](https://aurelia-form.spoonx.org/CHANGELOG.html) provides you with information about important changes made over releases.

# Installation

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

## Contributing

Report bugs, request features, send pull requests for fixes and features and
read the [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

MIT
