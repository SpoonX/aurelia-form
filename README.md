# aurelia-form

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Makes working with forms just a tad more pleasant.

This library is an unofficial plugin for the [Aurelia](http://www.aurelia.io/) platform.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Features (currently)

- Generates forms based on a form schema
- Select what framework you would want to use
- Use the form elements belonging to the chosen framework or
- Overwrite the framework elements with a custom one.
- Custom elements for defining where and with what you would want to generate
  forms
- Always defaults to a input text element
- Two-way data binding by default.
- Nest schemas in schemas using the `fieldset` type

## Installation

Make sure to execute these commands from project root.

### webpack

`npm install aurelia-form`

### jspm

`jspm install github:spoonx/aurelia-form`

## Configure

To get started some configurations are required.

```js
  aurelia.use

    .plugin('aurelia-form', config => {
      config.configure({

        /* will only work if i18n is plugged in and uses attribute t */
        translate: true,

        /* choose what framework you want to use */
        framework: 'bootstrap',

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
      config.configureNamespace('aurelia-form', {

        /* used to determine what type points to what element */
        map: {

          /* you can overwrite the default elements aurelia-form uses */
          date: './my/awesome/datepicker',

        }
      })
    })

    .standardConfiguration()
    .developmentLogging();
```

## Types

They determine what custom element should be used when rendering a form field/element.

Depending on the framework your using, the available types might differ. It is
the intention to keep the functionality between framework elements the same.

Read more about the element types: [Types](https://github.com/bas080/aurelia-form/tree/master/src/components/bootstrap)

## Schema

Think of the schema as a standard way of describing what we want aurelia-form to
render. A schema is an array containing several attributes. The following is an
exaggerated example of a schema which shows all possible properties one could
define on the schema.

```js

  /* attributes of the schema are objects */
  let nameAttribute = {

    /* the name of the property in the model */
    key: 'name',

    /* read more if you want to know what types are supported */
    type: 'string',

    /* when defined shows this as the label instead of the key property */
    label: 'user.name',

    /* set label to false when hiding the the label */
    label: false,

    /* these are set as actual html attributes on the DOM element */
    attributes: {
      readonly: true
    }

  };

  let typeAttribute = {
    key: 'type',

    /* will create a select element with options */
    type: 'select',

    /***
     * types that enable users to select one of the options require for the
     * options property to be defined in the attribute.
     */
    options: [
      {value: 'ice', name: 'Ice man'},
      {value: 'fire', name: 'Fire girl'},
      {value: 'earth', name: 'Earh mirl'},
      {value: 'air', name: 'Air gam'}
    ],

    hide_label: false,
    label: 'user.name'
  };

  /* the schema is an array containing the element definitions */
  let userSchema = [
    nameAttribute,
    typeAttribute
  ];

  /***
   * Nesting schemas is a feature. The type that enables you to nest
   * schemas is the fieldset type. Let's assume that a user is part of a group
   */

  let groupName = {...};

  let groupOwner = {

    /***
     * fieldset knows it is not getting bound to a property of a model. It's
     * expecting a new model/object
     */
    type: 'fieldset',

    /* add the userSchema to the schema property (required) */
    schema: userSchema,

    attributes: {...}
  }

  let groupSchema = [
    groupName,
    groupOwner
  ];

```

Having a schema is not enough. We also need data to populate it. That is where
the key property in our schema definitions come into play. Let's make a simple
model for our view. Nothing new here, just JavaScript and Aurelia.

## Model

A schema is not enough though. If you define the model/object with properties
defined, the generated form will show these values and update the property
values. If the properties are not defined it will work too. **However**, if the
object is not defined, it will throw an error which means that the object of
which it was trying to set the property is undefined. Just like JavaScript
would. Makes sense?

```js
  /* ./person.js */

  export class Person {

    userSchema = userSchema // assuming we defined userSchema

    groupSchema = groupSchema  // assuming we defined groupSchema

    /* minimal required models (just the objects) */

    userModel = {}

    groupModel = {
      owner = {}
    }

  }
```

Now that we have both a schema to define what the form should look like, and the
view model that will bind to the form elements, we now can use a custom element
to generate this form.

## Elements

Aurelia-form provides several custom elements. They give different levels of
granularity when building a form. You might want to reuse the schema and the
model but would only want several of the elements to be rendered. Or you want
a fancy layout that requires you to have a form element here and there.
Aurelia-form let's you decide.

#### <schema-form>

Generate a complete form using the schema

```html

  <schema-form
    schema="userSchema"
    model="userModel">
  </schema-form>

```

#### <form-fields>

Generates all the form fields without the form and fieldset around it. Handy for
when you want more control when composing a single form.

```html

  <form-fields
    model.bind="userModel"
    schema.bind="userSchema">
  </form-fields>

```

#### <form-field>

When things get really detailed you can choose to only generate a single form
field. Only generates a label (if hide_label is not true) and an "input" like
field.

```html

  <form-field
    value.bind="userSchema.name"
    attribute.bind="nameAttribute">
  </form-field>

```

## Translations

Aurelia-form uses aurelia-i18n to perform translations. It uses the `label`
property, and if that property is not defined it defaults to the `key` property
to use as a key to perform translations. Read more about
[aurelia-i18n](https://github.com/aurelia/i18n).

Aurelia-form uses the `t` attribute for translations. To enable translations it
is required to set the translation attribute to "t"

## Validation

Aurelia-form does not have validation baked in. At most it has a class which
can (and should) be used to get some functionality you would otherwise have to
write yourself in each and every class or do something similar as I did and
extend that class.

To display error/help messages, we pass the custom elements bind to the
`messages` or `message` attribute of the elements. The messages object has the
same structure as the model, yet the values contain a string which is the help
message it shows. In the future we might also implement different types of
messages, making it easier to distinguish between errors, warnings and
notifications.

So let's see a very simple example where we only look if the password is long
enough. I advice you not to do form validation in this manner, but for example
sake I will. Instead leverage your preferred validation library.

```js
export class Welcome {

  constructor() {

    this.model = {
      name: '',
      password: ''
    };

    this.messages = {}

    let name = {
      type: 'string',
      key: 'name',
    };

    let password = {
      type: 'password',
      key: 'password',
    };

    this.schema = [
      name
      password
    ];

    /* check if password is long enough every second */
    setTimeout(() => {
      this.messages.password = '' /* clean the password message */
      if (this.model.password.length <= 5) { /* set password message when it is too short */
        this.messages.password = 'Your password is too short!';
      }
    }, 1000);
  }

}
```

```html

    <schema-form
      messages.bind="messages" <!-- just like that -->
      model.bind="model"
      schema.bind="schema">
    </form-fields>

```

## Form class

The `Form` class aurelia-form provides enables you to to get started a bit
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

## Contributing

Report bugs, request features, send pull requests for fixes and features and
read the [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

MIT
