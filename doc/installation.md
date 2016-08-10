# Installation

## Aureli-Cli

Run `npm i aurelia-form --save` from your project root.

Aurelia-form needs an installation of [aurelia-view-manager](https://www.npmjs.com/package/aurelia-view-manager) and `aurelia-validatejs`. It also has submodules and makes use of `extend`. So, add following to the `build.bundles.dependencies` section of `aurelia-project/aurelia.json`.

```js
"dependencies": [
  // ...
  "extend",
  {
    "name": "aurelia-form",
    "path": "../node_modules/aurelia-form/dist/amd",
    "main": "aurelia-form",
    "resources": [
      "component/**/*.html"
    ]
  }
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

Aurelia-form needs an installation of [aurelia-api](https://www.npmjs.com/package/aurelia-api) and `aurelia-validation@0.6.6`. It also has submodules. They are imported in it's main file, so no further action is required.

If the installation results in having forks, try resolving them by running:

```sh
jspm inspect --forks
jspm resolve --only registry:package-name@version
```

E.g.

```sh
jspm inspect --forks
>     Installed Forks
>         npm:aurelia-dependency-injection 1.0.0-beta.1.2.3 1.0.0-beta.2.1.0

jspm resolve --only npm:aurelia-dependency-injection@1.0.0-beta.2.1.0
```

## Webpack

Run `npm i aurelia-form --save` from your project root.

Add `aurelia-form` in the `coreBundles.aurelia section` of your `webpack.config.js`.

aurelia-form needs an installation of [aurelia-api](https://www.npmjs.com/package/aurelia-api) and `aurelia-validation@0.6.6`. It also has submodules. They are listed as resources in the package.json. So, no further action is required.

## Typescript

Npm-based installations pick up the typings automatically. For Jspm-based installations, add to your `typings.json`:

```js
"aurelia-form": "github:spoonx/aurelia-form",
```

and run `typings i`

or run

```sh
typings i github:spoonx/aurelia-form
```
