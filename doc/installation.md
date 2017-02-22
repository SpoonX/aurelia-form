# Installation

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
