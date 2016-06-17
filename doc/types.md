# Types

The type determines how a property in the model should be rendered. When not
defining a type, the form-field is defaulted to `text` type. The defaulting
behavior can be altered by letting the `undefined` value be the alias of your
preferred type.

Depending on the framework your using, the available types might differ. It is
the intention to keep the functionality between framework elements the same.

This document explains the types, what frameworks support what types and the
aliases of the types.

## `text` `button` `color` `date` `datetime` `'datetime-local'` `email` `month` `number` `password` `range` `search` `tel` `time` `url` `week`
> bootstrap

All these types fall under the same component, the input component. They
leverage the builtin functionality of the HTML input element.

```js
    /* model */

    let credentials: {
      email: '',
      password: ''
    };

    /* schema */

    let emailElement = {
      type: 'email',
      key: 'email'
    };

    let passwordElement = {
      type: 'password',
      key: 'password'
    };

    let credentialsSchema = [
      emailElement,
      passwordElement
    ];
```

## `collection`
> bootstrap

Collections are used when having a `one to many` relationship between "things". An
example would be a `shoppingCart` and `products`.

```js
    /* model */

    let shoppingCart = {
      name: 'Mario',
      products: [
        {name: 'cheesy pizza' 10, amount: 2},
        {name: 'meat pizza' 10, amount: 2},
        {name: 'hot-dog crust pizza' 10, amount: 2}
      ]
    }


    /* schema */

    let nameElement = {
      key: 'name',

      /* can be excluded as it defaults to string */
      type: 'string',
      attributes: {
        /* do not allow user to change the name of the pizza */
        readonly: true,
      }
    };

    let amountElement = {
      type: 'number',
      attributes: {
        min: 0,
        max: 99,
        step: 1
      }
    };

    let productSchema = [
      nameElement,
      amountElement
    ];

    let productElement = {
      type: 'collection',
      key: 'products'
      schema: productSchema
    };

    let shoppingCartSchema = [
      nameElement,
      productElement
    ];
```


## `fieldset` `nested`
> bootstrap

An example of nested data could be a business-card.

```js
    /* model */

    let card = {

      names: {
        first_name: 'Jimmy',
        middle_name: 'James',
        last_name: 'Joker'
      },

      addresses: {
        work: 'Wilbert Street 29, Wyoming',
        home: 'Floral Park 12, Cincinnati'
      }

    }

    /* schema */

    let namesElement = {
      key: 'names',
      type: 'nested',
      schema: [{
        key: 'first_name',
      },{
        key: 'middle_name',
      },{
        key: 'last_name'
      }]
    };

    let addressesElement = {
      key: 'addresses',
      type: 'nested',
      schema: [{
        key: 'work',
      },{
        key: 'home',
      }]
    };

    let cardSchema = [
      namesElement,
      addressesElement
    ];
```

## `checkboxes`
> bootstrap

Shows a list of items with checkboxes in front of it. Handy when wanting to
select multiple items.

Requires an array as value

```js
    var toppingsElement = {
      type: 'checkboxes',
      label: "Extra Toppings",
      options: {
        {value: 'cheese',    name: 'Extra cheese'},
        {value: 'pepperoni', name: 'Pepperoni'},
        {value: 'salsa',     name: 'Salsa'},
        {
          value: 'olives',
          name: 'Olives',
          attributes: {
            disabled: true,
          }
        }
      }
    };

    var pizza = {
      toppings: [
        'cheese' /* have cheese already be checked */
      ]
    };
```
## `radios`
> bootstrap

Radios is similar to the `checkboxes` type as it requires to define multiple
options a user can select between. The difference is that radios type enables
users to only select one of the options. This value is set on the property that
matches the models' key.

## `checkbox` `boolean` `bool`
> bootstrap

Subscriptions can be toggled on or off. In that case a checkbox followed by
a question might be what you want.

```js
    /* model */

    let subscriptions = {
      newsletter: false,
      specials: false
    }

    let newsletterElement = {
      type: 'bool',
      key: 'newsletter',
      label: "Would you like to receive information about your services?"
    };

    let specialsElement = {
      type: 'bool',
      type: 'specials',
      label: 'Receive information about money saving deals?'
    };

    let subscriptionsSchema = [
      newsletterElement,
      specialsElement
    ];
```

## `file`
> bootstrap

A file picker.

```js

  let title = {
    type: 'text',
    key: 'title'
  };

  let video = {
    type: 'file',
    key: 'video'
  };

  let submitVideoSchema = [
    title,
    video
  ];

```

## `select`
> bootstrap

It is possible to set multiple on the attribute, allowing users to select
multiple items provided by the options property.

```js

  let selectedCat = {
    type: 'string',
    attributes: {
      readonly: true
    }
  };

  let cats = {
    key: 'cat',
    type: 'select',
    options: [
      {name: "Thai",              value: "thai"},
      {name: "Napoleon",          value: "napoleon"},
      {name: "Peterbald",         value: "peterbald"},
      {name: "American Wirehair", value: "american wirehair"},
      {name: "Cymric",            value: "cymric"}
    ]
  };

  this.schema = [
    selectedCat,
    cats
  ];

```

## `submit`
> bootstrap

Convenient way of defining a submit button. Does nothing more then trigger
a bubbling submit event.

## `textarea`
> bootstrap

## `actions` `buttons`
> bootstrap

You might want to do something with your form. Buttons are ideal for doing
something when they are pressed.

This is how you define buttons.

```js
    let actionsElement = {
      type: 'buttons',

      /* each item in the array is a new button */
      actions: [{
        label: 'Console log the `this`',
        action: (event) => {console.log(this)}
        attributes: {
          class: 'btn-primary'
          disabled: true
        }
      }]
    };

    let bigSchema = [
      /* ... */
      actionsElement
    ];
```
