# aurelia-form

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Makes working with forms just a tad more pleasant. 

This library is an unofficial plugin for the [Aurelia](http://www.aurelia.io/) platform.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Features (currently)

- Generates forms based on a form schema
- Select what framework you would want to use (currently only bootstrap)
- Use the form elements belonging to the chosen framework or
- Quickly overwrite the framework elements with a custom one.
- Custom elements for defining where and with what you would want to generate
  forms
- Always defaults to a input text element
- Two-way data binding by default.

## Configure

To get started some configurations are required. You could skip this step and
use the defaults that might not fit your project's needs.

```js
  aurelia.use
    .plugin('aurelia-form', config => {
      config.configure({
        translate: true,
        framework: 'bootstrap',
        components: {}
      });
    })
    .standardConfiguration()
    .developmentLogging();
```

## Usage

### Schema

Think of the schema as a standard way of describing what we want aurelia-form to
render. The shape of aurelia-form's schema is as follows.

```js
  var schema = [        //is always an array
    {
      name: 'firstName', // points to the property in the view model
      type: 'text',     // the type of element to render
    },{
      name: 'lastName',  // points to the property in the view model
      type: 'text',     // the type of element to render
    }
  ];
```

Having a schema is not enough. We also need data to populate it. That is where
the name property in our schema definitions come into play. Let's make a simple
model for our view. Nohing new here, just javascript and Aurelia

### Model

```js
  /* ./person.js */

  export class Person {
    @bindable firstName
    @bindable lastName
  }

  /* ./page.js */

  export class Page {
    constructor() {
      this.person = new Person();
    }
  }
```

Now that we have both a schema to define what the form should look like, and the
view model that will bind to the form elements, we now can use a custom element
to generate this form.

### View

Aurelia-form provides several custom elements. They give different levels of
granularity when building a form. You might want to reuse the schema and the
model but would only want several of the elements to be rendered. Or you want
a fancy layout that requires you to have a form element here and there.
Aurelia-form let's you decide.

```html
  <schema-form
    schema="schema"
    model="person">
  </schema-form>
```
But what about validation?

### Validation 

This section is a work in progress. It might contain some suggestions as the
aurelia-form might not have validation builtin.

### schema-form-element

Creates just a single element which is part of a larger form. This element
should be placed in a form element.

```html

  <schema-form-element
    value.bind="prop"
    schema.bind="schema">

  <schema-form
    schemas=""
    model=""
    validation="">
  </schema-form>

```

```html
<schema-form-elements
  model.bind="instanceOrObject"
  schema.bind="schema">

</schema-form-elements>
```

## Used By

This library is used directly by applications only.

## Platform Support

This library can be used in the **browser** only.

## Installation

**webpack**
TODO: does this really work?
`npm install aurelia-form`

**jspm**
*from your project root*

`jspm install github:spoonx/aurelia-form`

## Roadmap

- define two-way databinding in the view model and not make users have to write
  two-way all the time
- check if everything works when validation is not being used
- Could rename the name property in the schema to key which makes more sense

## Usage
[TBD]
