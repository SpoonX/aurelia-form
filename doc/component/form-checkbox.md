# form-checkbox
The `<form-checkbox />` component allows you to render a checkbox.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| name | string | `''` | The name of the checkbox button |
| value | string/array | `false` | Value of the checkbox(es) _(use for deault, too)_ |
| option | string/array | `undefined` | The value of the checkbox |
| type | string | `text` | The input type |
| classes | string | `''` | Classes to add |
| placeholder | string | `''` | A short hint that describes the expected value |
| readonly | boolean | `false` | Specifies that the checkbox buttons should be read-only |
| disabled | boolean | `false` | Specifies that the checkbox buttons should be disabled |
| options | object | `{}` | Options to pass to the input element |
| autofocus | boolean | `false` | Specifies to autofocus the checkbox buttons |
| required | boolean | `false` | Required to select a value |

## Examples

### Boolean checkbox
Boolean checkboxes are the simplest.

```html
<form-checkbox name="rememberMe" value.bind="rememberMe"></form-checkbox>
```

### Multi-select
Here's an example that supports selecting multiple values.

**View**

```html
<form-checkbox name="city" value.bind="cities" option="Amsterdam"></form-checkbox>
<form-checkbox name="city" value.bind="cities" option="Paris"></form-checkbox>
<form-checkbox name="city" value.bind="cities" option="London"></form-checkbox>
<form-checkbox name="city" value.bind="cities" option="Moscow"></form-checkbox>
```

**ViewModel**

```js
class MyViewModel {
  // These are automatically checked
  @bindable cities = ['London'];
}
```

**Note:** The attribute `option` is _not_ the same as a label. You'll have to add labels to your checkboxes.
