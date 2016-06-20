# Validation

Aurelia-form does not have validation baked in. At most it has the `Form` class
which can (and should) be used to get some functionality you would otherwise
have to write yourself in each and every class or do something similar as I did
and extend that class.

To display error/help messages, we pass the custom elements bind to the
`messages` or `message` attribute of the components. The messages object has
the same structure as the model, yet the values contain a string which is the
help message it shows. In the future we might also implement different types of
messages, making it easier to distinguish between errors, warnings and
notifications.

So let's see a very simple example where we only look if the password is long
enough. I advice you not to do form validation in this manner, but for example
sake I will. Instead leverage your preferred validation library.

```js
export class Welcome {

  constructor() {

    this.model = {
      name: '',
      password: ''
    };

    this.messages = {}

    let name = {
      type: 'string',
      key: 'name',
    };

    let password = {
      type: 'password',
      key: 'password',
    };

    this.schema = [
      name
      password
    ];

    /* check if password is long enough every second */
    setTimeout(() => {
      this.messages.password = '' /* clean the password message */
      if (this.model.password.length <= 5) { /* set password message when it is too short */
        this.messages.password = 'Your password is too short!';
      }
    }, 1000);
  }

}
```

```html

    <schema-form
      messages.bind="messages" <!-- just like that -->
      model.bind="model"
      schema.bind="schema">
    </form-fields>

```

It is as simple as populating the messages object and binding it to the
`<schema-form>` component.
