# Schema

Think of the schema as a standard way of describing what we want aurelia-form to
render. A schema is an **array** containing several elements. Imagine we would
want to create login form.

```js
    this.credentialsSchema = [
      {type:'text', key: 'username'},
      {type:'password', key: 'password'}
    ];
```

> To increase readability I like to define my `elements` outside of the schema
> array. It ends up being more lines but easier to read and edit.

```js
  let username = {
    type:'text',
    key: 'username'
  };

  let password = {
    type:'password',
    key: 'password'
  };

  this.credentialsSchema = [
    username,
    password
  ];
```

You can see that I'm using the 'password' and 'text' type. Aurelia-form
contains many more [types](./types.md)

Having a schema is not enough. We also need a [model](./model.md) to populate it. That is where
the key property in our schema definitions comes into play.
