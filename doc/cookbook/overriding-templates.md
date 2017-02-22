# Overriding templates
Aurelia-form uses [aurelia-view-manager](https://aurelia-view-manager.spoonx.org/) to manage views.
This allows us to support multiple css frameworks, and offer the flexibility of supplying your own views.

## Using aurelia-config
Overwriting templates is pretty simple. Here's an example overwriting the view for `<form-radio />`:

```js
// Configure function
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-config', configure => {
      return configure([
        'aurelia-form'
        // Other plugins
      ], {
        'aurelia-view-manager': {
          'spoonx/form': {
            map: {
              'form-checkbox': 'path/to/your/view.html'
            }
          }
        }
      });
    });
}
```

## Using view-manager
If for some reason you wish to use the view-manager directly:

```js
export function configure(aurelia) {
  aurelia.container.get(ViewManager).configureNamespace('spoonx/form', {
    map: {
      'form-checkbox': 'path/to/your/view.html'
    }
  });
}
```

## Resources
You can find more information on configuring your views in the [aurelia-view-manager documentation](https://aurelia-view-manager.spoonx.org/configuration.html#).
