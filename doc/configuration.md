# Configuration

To get started some configurations are required. Aurelia-form leverages
aurelia-view-manager. Don't forget to also register `aurelia-view-manager`.
Using `.plugin('aurelia-view-manager')` in the main.js should do the trick.

An example of a the most basic setup possible.

```js
  aurelia.use
    .plugin('aurelia-form')
    .plugin('aurelia-view-manager')
    .standardconfiguration()
    .developmentlogging();
```

Besides the defaults aurelia-form allows you to configure the following
features.

## Views

Aurelia-form uses aurelia-view-manager to determine what view to load for what
type. You might want to add or overwrite a component so aurelia-form can load
that view (instead). This is done using the aurelia-view-manager
configurations.

```js

  aurelia.use
    .plugin('aurelia-view-manager', view => {
      view.configureNamespace('spoonx/form', {
        framework: 'bootstrap',
        map: {
          vector: '/component/vector'
          text: '/component/input.html'
        }
      });
    })

```

Notice the first argument of the `configureNamespace` method. It is called the
namespace. Aurelia-form's namespace is `spoonx/form`. You can set the framework
or change the view mapping. I added a vector type which points to a component
which enables some kind of user input.

The text type has also been altered. From now on aurelia-form will load the
`/component/input.html` view whenever wanting to render `text`. Aliases of the
`text` type will also load this view.

## Aliases

Let's say you have a longitude and latitude data type. You want them to be
shown as number fields in your form. Aliases are meant for cases where you want
to reuse a component. Aliases alter the type.

```js
  aurelia.use
    .plugin('aurelia-form', form => {
      form.configure({
        aliases: {
          longitude: 'number'
        }
      })
    })
    .plugin('aurelia-view-manager')
    .standardconfiguration()
    .developmentlogging();
```
