# form-input
The `<form-input />` component allows you to render a input field.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| value | string | `undefined` | The value of the input field |
| checked | string/array | `undefined` | The values that need to be checked, only on `radio` or `checkbox` |
| type | string | `'text'` | The input type |
| name | string | `''` | The name of the field |
| classes | string | `''` | Classes to add, adds `form-control` when `checkbox` or `radio` |
| placeholder | string | `''` | A short hint that describes the expected value |
| readonly | boolean | `false` | Specifies that the field should be read-only |
| disabled | boolean | `false` | Specifies that the field should be disabled |
| autofocus | boolean | `false` | Specifies to autofocus the radio buttons |
| required | boolean | `false` | Required to select a value |
| options | object | `{}` | Options to pass to the input element |
