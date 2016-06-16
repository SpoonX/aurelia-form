# Form

The `Form` class aurelia-form enables you to to get started a bit
faster. When using the `Form` class you do have to install aurelia-validatejs
as a dependency. Let's see what it gives us out of the box.

The class can be used in several ways. You can extend the view model or make new
instances that are part of the view model's state.

```js
    /* extends */

    class Welcome extends Form {
      constructor() {
        super();

        http('products.json').then(products => {

            /***
             * Model is reserved property on the Form class. It is used to
             * trigger the registration of the validator.
             */
            this.model = products;
        });
      }
    }
```

When used together with the schema-form element you get a nice synergy in which
it will call the validate method of the extending `Form` class instance. Now
that you have seen the extends version. Let's see the constructor version of
it.

```js

   /* constructor */

   import {Form} from 'aurelia-form';

   class Welcome extends {

      constructor() {

        /* a new form */

        let credentials = new Form();

        /* schema */

        let password = {
          type: 'password',
          key:  'password'
        };

        let username = {
          type: 'string',
          key:  'username'
        };

        credentials.schema = [
          username,
          password
        ];

        /* model */

        credentials.model = {
          username: '',
          password: ''
        };

        /* validation */

        credentials.validator
          .ensure('username')
          .required()
          .ensure('password')
          .required();

        /* avoid having `this` written everywhere */
        this.credentials = credentials
      }
   }

```

I like the latter method as it has this descriptive property to it.  All form
related state is scoped to the form instance. Seeing what data belongs to what
form is easy to discover. defining multiple forms in a view model is no
problem.

```html
    <schema-form
      messages.bind = "credentials.messages"
      schema.bind   = "credentials.schema"
      model.bind    = "credentials.model">
```
