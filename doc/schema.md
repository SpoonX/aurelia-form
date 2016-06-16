# Schema

Think of the schema as a standard way of describing what we want aurelia-form to
render. A schema is an array containing several attributes. The following is an
exaggerated example of a schema which shows all possible properties one could
define on the schema.

```js

  /* attributes of the schema are objects */
  let nameElement = {

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

  let typeElement = {
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
    nameElement,
    typeElement
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
