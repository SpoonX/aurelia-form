# Element sorting
It's possible to change the order in which form elements get rendered by [`<entity-form />`](../component/entity-form.md). The way you'd go about doing this is by using the [`@position()` decorator](../decorators.md#position).

There's very little to explain on the subject, so here's an example that shows you how to use it.

## Example
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
