## Configuration

To get started some configurations are required. Aurelia-form leverages
aurelia-view-manager. Don't forget to also register `aurelia-view-manager`.

```js
  aurelia.use

    .plugin('aurelia-form', config => {
      config.configure({

        /***
         * Aliases are used to avoid having to define a custom component because
         * there is no component registered for that type. When interpreting the
         * schema, it checks if the type is an alias, and uses the aliased type
         * instead when rendering the forms.
         *
         * It is also necessary to leverage the input field to it's fullest. The
         * input field needs a valid type-attribute value. Imagine you use the
         * letter 's' to define that a value is a string value. 's' is not a
         * valid type for the input field. In that case it would be best to
         * define the alias `s: 'text'`.
         */
        aliases: {

          s: 'text',
          /* or */
          b: 'boolean'

        }
      });
    })

    /* aurelia-form leverages aurelia-view-manager to select elements */
    .plugin('aurelia-view-manager', config => {
      config.configureNamespace('spoonx/form', {

        framework: 'bootstrap',

        /* used to determine what type points to what element */
        map: {

          /* you can overwrite the default elements aurelia-form uses */
          date: './my/awesome/datepicker',

        }
      });
    })

    .standardConfiguration()
    .developmentLogging();
```
