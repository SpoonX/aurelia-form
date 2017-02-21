# form-radio
The `<form-radio />` component allows you to render a radio buttons.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| name | string | `''` | The name of the radio button |
| value | string/array | `false` | The value(s) to be checked |
| option | string/array | `undefined` | The value of the radio button |
| type | string | `text` | The input type |
| classes | string | `''` | Classes to add |
| placeholder | string | `''` | A short hint that describes the expected value |
| readonly | boolean | `false` | Specifies that the radio buttons should be read-only |
| disabled | boolean | `false` | Specifies that the radio buttons should be disabled |
| options | object | `{}` | Options to pass to the input element |
| autofocus | boolean | `false` | Specifies to autofocus the radio buttons |
| required | boolean | `false` | Required to select a value |

## Examples
```js
  genderValue = 'female';
```


```html
  <form-radio name="gender" value.bind="genderValue" option="male"></form-radio>
  <form-radio name="gender" value.bind="genderValue" option="female"></form-radio> <!-- selected -->
```
