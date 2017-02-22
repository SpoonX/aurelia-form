# Auto submit button
When generating an entire form, it might be nice to have it also generate a submit button for you.
Aurelia-form supports that through simple configuration.

## Example

### Configuration
You can configure these buttons using aurelia config. Read more about it in the [configuration guide](../configuration.md).

```js
const myConfiguration = {
  'aurelia-form': {
    // Alias these entity types to elements (used by aurelia-orm)
    aliases: {
      boolean: 'checkbox'
    }
  }
};
```

### Attributes
If you wish to override the defaults (from the config) for a specific form, that's possible through the `<aurelia-form />` or `<entity-form />` component.

These components expose [three attributes](../component/aurelia-form.md#attributes) that allow you to do this:

| attribute | type | default | description |
|---|---|---|---|
| buttonOptions | Array | `['primary']` | Options to pass to the button _(read more in [button docs](./form-button.md))_ |
| buttonLabel | string | `'Submit'` | Label for the button _(uses submitButton.label from config)_ |
| buttonEnabled | boolean | `true` | Show the button _(uses submitButton.enabled from config)_ |

This could look like:

```html
<entity-form button-enabled.one-time="false" button-label="You can't see me" entity.bind="entity">
</entity-form>
```
