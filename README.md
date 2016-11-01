# aurelia-form

[![Build Status](https://travis-ci.org/SpoonX/aurelia-form.svg?branch=master)](https://travis-ci.org/SpoonX/aurelia-form)
[![Known Vulnerabilities](https://snyk.io/test/npm/name/badge.svg)](https://snyk.io/test/npm/aurelia-form)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

> This library is a plugin for the [Aurelia](http://www.aurelia.io/) platform.

Makes working with forms just a tad more pleasant.

- A standardized schema for describing forms
- Elements for generating forms with two way databinding by default
- Support for multiple css frameworks enabled by view manager
- Ability to define your own custom elements and overwrite the default elements
- Aliases for types so you can reuse elements for similar or different types
- A descent amount of types so you can start generating forms out of the box

## Documentation

You can find usage examples and the documentation at [aurelia-form](http://aurelia-form.spoonx.org/).

The [changelog](doc/CHANGELOG.md) provides you with information about important changes.

## Uses

Aurelia-form needs following plugins installed and configured:

- [aurelia-view-manager](https://www.npmjs.com/package/aurelia-view-manager)
- [aurelia-validatejs](https://www.npmjs.com/package/aurelia-validatejs)

## Installation

### Aureli-Cli

Run `npm i aurelia-form --save` from your project root.

Aurelia-form makes use of `extend`. So, add following to the `build.bundles.dependencies` section of `aurelia-project/aurelia.json`.

```js
"dependencies": [
  // ...
  "extend",
  {
    "name": "aurelia-form",
    "path": "../node_modules/aurelia-form/dist/amd",
    "main": "aurelia-form",
    "resources": [
      "attributes.html",
      "component/form-field.html",
      "component/form-fields.html",
      "component/schema-form.html",
      "component/framework/bootstrap/actions.html",
      "component/framework/bootstrap/association.html",
      "component/framework/bootstrap/checkbox.html",
      "component/framework/bootstrap/checkboxes.html",
      "component/framework/bootstrap/collection.html",
      "component/framework/bootstrap/conditional.html",
      "component/framework/bootstrap/fieldset.html",
      "component/framework/bootstrap/file.html",
      "component/framework/bootstrap/form-group.html",
      "component/framework/bootstrap/input.html",
      "component/framework/bootstrap/radios.html",
      "component/framework/bootstrap/select.html",
      "component/framework/bootstrap/submit.html",
      "component/framework/bootstrap/textarea.html"            
    ]
  },
  // ...
],
```

### Jspm

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

### Webpack

Run `npm i aurelia-form --save` from your project root.

And add `aurelia-form` in the `coreBundles.aurelia` section of your `webpack.config.js`.

### Typescript

Npm-based installations pick up the typings automatically. For Jspm-based installations, run `typings i github:spoonx/aurelia-form` or add `"aurelia-form": "github:spoonx/aurelia-form",` to your `typings.json` and run `typings i`.

## Contributing

Report bugs, request features, send pull requests for fixes and features and
read the [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

MIT
