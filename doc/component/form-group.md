# form-group
The `<form-group />` component allows you to render another a component and his label.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| behavior | string | `undefined` | The form behavior (horizontal, inline, etc) |
| element | string | `'input'` | The component to render (doesn't render element when empty) |
| type | string | `'text'` | The type of component to render (text, radio, ect...)|
| value | string | `undefined` | The value of the element |
| name | string | `''` | The name of the element |
| label  | string | `''` | The label of the element (doesn't render label when empty) |
| classes | string | `''` | Classes to add |
| labelClasses | string | `''` | Classes to be applied to the label container. (overrides defaultLabelClasses from config) |
| elementClasses | string | `''` | Classes to be applied to the element container (overrides defaultElementClasses from config) |
| state  | string | `undefined` | The state of the element, for instance "error" |
| error  | string | `undefined` | The error message to show (doesn't render error when empty) |
| message  | string | `undefined` | The message to show (doesn't render message when empty) |
| placeholder | string | `''` | A short hint that describes the expected value |
| readonly | boolean | `false` | Specifies that the select should be read-only |
| disabled | boolean | `false` | Specifies that the select should be disabled |
| autofocus | boolean | `false` | Specifies to enable the autofocus of the select |
| required | boolean | `false` | Make the select required |
| selectOptions | array | `[]` | The available options (for "select" element) |
| optionLabel | string | `'name'` | Which attribute to show in the option (for "select" element) |
| multiple | boolean | `false` | Make the select a multi-select block (for "select" element) |
| options | object | `{}` | Options to pass to the input element |

## Examples
```html
<form-group
  behavior="inline"
  label="My textbox"
  element="input"
  value="One"
  name="textbox">
</form-group>
```

```html
<form-group
  behavior="horizontal"
  label="My select"
  element="select"
  value="Two"
  name="selector"
  select-options.bind="[{name: 'One'}, {name: 'Two'}]"
  option-label="name"
  message="Select a number"
  state="error">
</form-group>
```

