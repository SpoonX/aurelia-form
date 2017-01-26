# Usage

Aurelia form makes it possible for you to programmatically generate forms.

I assume you have done a `jspm install aurelia-form`. The next step is
registering aurelia-form as a plugin in your aurelia project.

## Configure

> main.js

```js

  .plugin('aurelia-form')

```

## Model

> page.js

```js

export class Page {
  constructor() {
    let schema = [{
      key: 'email',
      type: 'string'
    },{
      key: 'password',
      type: 'string'
    }];

    let credentials = {
      email: '',
      password: ''
    };

    let submit = (credentials) => {
      console.log(credentials);
    };

    this.loginForm = {schema, credentials, submit};
  }
}
```

## View

> page.html

```html
<template>

  <schema-form
    submit.delegate="loginForm.submit(loginForm.credentials)"
    schema.bind="loginForm.schema"
    model.bind="loginForm.credentials"
  ></schema-form>

<template>

```

