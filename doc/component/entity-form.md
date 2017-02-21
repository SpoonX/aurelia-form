# entity-form
The `<entity-form />` component allows you to provide an object to generate the [`<form-group />`](./form-group.md) components for, making it really simple to generate a complete form.

You can use the same attributes and events available in `<aurelia-form />` for this component.

**This document does not include those options**. You can find those options in the documentation for the [`<aurelia-form />`](./aurelia-form.md) component.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| entity | {} / Entity | `undefined` | Entity to generate form for and perform validation on |
| skip | Array | `[]` | An array of field names to skip rendering for |

## Events
This component has the same events as the `<aurelia-form />` component.

## Examples

### Render order and elements
It's possible to change the order in which form elements get rendered.
The following example is not a typical case in which you'd use this decorator, it's purely to demonstrate what it does.

**entity/person.js**

```js
import {position, inputType} from 'aurelia-form';

export class Person {
  @position(2)
  lastName;

  @position(0)
  firstName;

  @position(1)
  middleName;

  @position(3)  
  @inputType('number')
  age;
  
  @position(4)
  @inputType('email')
  email;
}
```

**page/person.js**

```js
export class SomeViewmodel {
  constructor() {
    this.person = new Person;
  }
}
```

**page/person.html**

```html
<!-- Yes, this renders the entire form. Awesome right!? -->
<entity-form entity.bind="person">
</entity-form>
```

### Using aurelia-orm
Using [aurelia-orm entities](https://aurelia-orm.spoonx.org/entities.html).

```js
import {Entity} from 'aurelia-orm'
import {position, inputType} from 'aurelia-form';

export class Person extends Entity {
  @type('text')
  username;

  @inputType('password')
  @type('text')
  password;

  @inputType('email')
  @type('text')
  email;
}
```

**page/person.js**

```js
export class SomeViewmodel {
  constructor() {
    this.person = new Person;
  }
}
```

**page/person.html**

```html
<!-- Yes, this renders the entire form. Awesome right!? -->
<entity-form entity.bind="person">
</entity-form>
```

### Append / prepend to form
There are two slots available for you to add your own form-groups to:

1. before
2. after

To demonstrate usage, we'll be adding a "remember me" checkbox to a login form.

```html
<!-- Yes, this renders the entire form. Awesome right!? -->
<entity-form entity.bind="user">
  <form-group slot="after" label="Remember me" element="checkbox" value.bind="rememberMe">
  </form-group>
</entity-form>
```

## Additional
In case you skipped reading the intro of this document, the rest of the docs can be found in the [`<aurelia-form />`](./aurelia-form.md) component documentation as all behavior is inherited.
