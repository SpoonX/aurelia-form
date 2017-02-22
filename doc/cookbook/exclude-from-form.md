# Exclude from form
It's possible to exclude some specific properties on an entity from being rendered [`<entity-form />`](../component/entity-form.md). The way you'd go about doing this is by using the [`@noRender()` decorator](../decorators.md#norender).

There's very little to explain on the subject, so here's an example that shows you how to use it.

## Example
```js
import {noRender} from 'aurelia-form';

export class User {
  @type('number')
  @noRender()
  id;

  username;

  password;

  email;
}
```
