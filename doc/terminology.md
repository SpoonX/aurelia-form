# Terminology

## Form

An interactive user interface which enables users to input
and submit the inserted information. It also shows validation errors.

### Form Field

The form is composed out of form fields. A form field visualizes just one
property in the model. In Aurelia the form-fields are components. An example of
a form field is the input field with type `text` or `number`.

## Element

The element is an object representation of a form field. It contains all
information necessary to determine what to render and how to alter behavior of
that rendered thing. It is allowed and encouraged to put all data that
determines the look and feel of a rendered form-field in this object.

### Key

A string that is used to determine what property in the model to bind to. An
example of an element definition and a model would be.

```js

    /* the user model */

    let user = {
      name: 'John'
      email: 'john@jmail.tron'
    };

    /* element definition */
    let nameElement = {

      /* Hide the label when is false.
       */

      label: false,

      type: 'string',

      /* Having defined the key string, the element now knows what property to
       * alter in the user model.
       */

      key: 'name'

    }
```

### Types

A string which determines what component to use for a specific property on the model.
What it really does is determine what component to use to render a property of
the model. A boolean value could be a `checkbox` or a `light-switch`. They both
allow to alter a boolean value yet they differ in look and feel. Thus think of
types not as in data-types, but in form-field types. Examples would be
checkbox, number, date, time etc.

### Attributes

An object representation of the attributes to be put on a DOM-element. Many
`<input>` features are enabled by setting attributes on the `input` element. This is
why aurelia-form allows you to leverage this by defining the attributes object
in the element definitions.

```js
    let subscribe = {
      type: 'checkbox',
      key: 'name',
      attributes: {
        readonly: true,
      }
    };
```

## Aliases

It is possible to define aliases for types. Imagine you have a project that uses
the string 'dt' to represent 'date-time' type values. The `dt` string is not
supported by the `<input>` element. By defining an aliases, the dt string is
resolved to the 'date-time' type.

Use aliases when wanting to reuse an existing component for a different type.

## Schema

The schema is an **array** which is composed out of elements. It contains all
the information for rendering a form but does not contain the data to populate
the form.

## Model

The thing that contains the data is the model. The model is separate from the
form definition(schema). When rendering the form using the `<schema-form>`
component, it is required to provide both the schema as the element definition.


