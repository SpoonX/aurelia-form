# aurelia-form
The `<aurelia-form />` component provides basic features for your forms.
It adds validation, a submit button and passes information such as behavior to your form-groups.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| behavior | string | `''` | The form behavior (horizontal, inline, etc) |
| classes | string | `''` | Classes to add |
| validated | boolean | `true` | Enable / disable validation on this form |
| entity | {} / Entity | `undefined` | The entity to validate |
| buttonOptions | Array | `['primary']` | Options to pass to the button _(read more in [button docs](./form-button.md))_ |
| buttonLabel | string | `'Submit'` | Label for the button _(uses submitButton.label from config)_ |
| buttonEnabled | boolean | `true` | Show the button _(uses submitButton.enabled from config)_ |

## Events
This component emits custom events. These events only fire if validation is enabled.

| event | details | description |
|---|---|---|
| valid | None | Fired on submit, if form is valid |
| invalid | validation result | Fired on submit, if form is invalid |

## Examples

### Horizontal

```html
<aurelia-form behavior="horizontal">
  <form-group name="username" label="Username"></form-group>
  <form-group name="password" type="password" label="Password"></form-group>
</aurelia-form>
```

### No validation, no button

```html
<aurelia-form validated.one-time="false" button-enabled.one-time="false">
  <form-group name="username" label="Username"></form-group>
  <form-group name="password" type="password" label="Password"></form-group>
</aurelia-form>
```

### On valid form

```js
export class SomeViewmodel {
  user = {
    username: null,
    password: null
  };
  
  login() {
    // Perform login logic.
  }
}
```

```html
<aurelia-form valid.delegate="login()">
  <form-group name="username" label="Username" value.bind="user.username"></form-group>
  <form-group name="password" type="password" label="Password" value.bind="password"></form-group>
</aurelia-form>
```

## Additional
To use validation, it has to be set up first.
You can read how to do this in the [setting up validation recipe](../cookbook/setting-up-validation.md).
