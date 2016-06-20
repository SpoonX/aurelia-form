# Model

A schema is not enough though. If you define the model/object with properties
defined, the generated form will show these values and update the property
values. If the properties are not defined it will work too. **However**, if the
object is not defined, it will throw an error saying that the property it was
trying to access was undefined. Just like JavaScript would.

```js
  /* ./person.js */

  export class Person {

    userSchema = userSchema; // assuming we defined userSchema

    groupSchema = groupSchema;  // assuming we defined groupSchema

    /* minimal required models (just the objects) */

    userModel = {};

    groupModel = {
      owner = userModel
    };

  }
```

Now that we have both a schema to define what the form should look like, and the
view model that will bind to the form elements, we now can use a custom element
to generate this form.
