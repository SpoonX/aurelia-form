# Changing css framework
Aurelia-form uses [aurelia-view-manager](https://aurelia-view-manager.spoonx.org/) to manage views.

Changing the framework is a matter of changing the default configuration for aurelia-view-manager.

You can read how to do so in the [aurelia-view-manager documentation](https://aurelia-view-manager.spoonx.org/defaults.html).

## Example
In this example we'll change the framework from the default `bootstrap` to `foundation`.

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
          'defaults': {
            framework: 'foundation'
          }
        }
      });
    });
}
```
