# Custom elements
Sometimes you might want to write your own elements. These can be used by `<entity-form />` to render your unique element.

## Globalize
One requirement for using custom elements, is that they need to be global.
You can read how to do that in the [aurelia hub](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/5). Here's an example:

```js
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources('resources/my-element');

  aurelia.start().then(() => aurelia.setRoot());
}
```

## Your element
Once you've built your awesome element, and made it global, you can add it to aurelia form.
This can easily be done through [aurelia-config](https://aurelia-config.spoonx.org). Here's an example:

```js
const myConfiguration = {
  'aurelia-form': {
    elements: {
      // Example
      datepicker: 'form-datepicker'
    }
  }
};

// Configure function
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-config', configure => {
      return configure(['aurelia-form'], myConfiguration);
    });
}
```

### Using
To use your element, you can use the [@element decorator](https://aurelia-form.spoonx.org/decorators.html#element).
Because the element is available in the config, `<entity-form />` will know what component to use.

## Resources
If you wish to register your custom element to an alias, you can read how to do so in the [aliases](./aliases.md) recipe.
