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

## Examples

### Input field
```html
  <form-input value.bind="42"></form-input>
```

### Radio buttons

```js
  gender = 'male';
```

```html
  <form-input 
    option="male" 
    value.bind="gender" 
    name="gender" 
    type="radio">
  </form-input>

  <form-input 
    option="female" 
    value.bind="gender" 
    name="gender" 
    type="radio">
  </form-input>
```

### Checkboxes
```js
  selectedToppings = ['cheese', 'bacon'];
```

```html
  <form-input 
    option="cheese" 
    value.bind="selectedToppings" 
    name="pizza-toppings" 
    type="checkbox">
  </form-input>

  <form-input 
    option="bacon" 
    value.bind="selectedToppings" 
    name="pizza-toppings" 
    type="checkbox">
  </form-input>

  <form-input 
    option="ansjovis" 
    value.bind="selectedToppings" 
    name="pizza-toppings" 
    type="checkbox">
  </form-input>

  <form-input 
    option="pineapple" 
    value.bind="selectedToppings" 
    name="pizza-toppings" 
    type="checkbox">
  </form-input>
```
