# Configuration
Configuration for aurelia-form is minimal and simple.

Aurelia-form uses [aurelia-config](https://aurelia-config.spoonx.org) for the configuration.
Click the link for more information and documentation on the plugin.

## Setup
First install aurelia-config, installation is simple:

`jspm i aurelia-config`

And then you can set up configuration as follows in main.js: 

```js
// Configure function
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-config', configure => {
      return configure([
        'aurelia-form'
        // Other plugins
      ], myConfiguration);
    });
}
```

### Options
The following is a piece of configuration with inline documentation explaining the options:

```js
const myConfiguration = {
  'aurelia-form': {
    // The default element used, probably best left unchanged.
    defaultElement: 'input',

    // Register your (custom) elements here.
    elements      : {},

    // Configured by aurelia-form-validation
    validation    : {},

    // Submit button configuration for <aurelia-form /> and <entity-form />
    submitButton: {
      enabled: true,        // Show the button
      options: ['primary'], // Options to pass to the button
      label  : 'Submit'     // Default (fallback) label of the button
    },

    // Alias these entity types to elements (used by aurelia-orm)
    aliases: {
      enum   : 'radio',
      int    : 'input',
      integer: 'input',
      number : 'input',
      float  : 'input',
      string : 'input',
      bool   : 'checkbox',
      boolean: 'checkbox',
      text   : 'textarea'
    }
  }
};

// Configure function
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-config', configure => {
      return configure([
        'aurelia-form'
        // Other plugins
      ], myConfiguration);
    });
}
```

## Additional
Read more about the plugins discussed in this article on the following links:

- [aurelia-config](https://aurelia-config.spoonx.org/)
- [aurelia-api](https://aurelia-api.spoonx.org/)
- [aurelia-orm](https://aurelia-orm.spoonx.org/)
- [aurelia-form-validation](https://aurelia-form-validation.spoonx.org/)
