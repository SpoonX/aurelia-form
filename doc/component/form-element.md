# form-element
The `<form-element />` component allows you to render another component based on the given `element`/`type`.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| element | string | `'input'` | The component to render |
| type | string | `'text'` | The type of component to render (text, radio, ect...)|
| value | string | `undefined` | The value of the element |
| name | string | `''` | The name of the element |
| classes | string | `''` | Classes to add |
| readonly | boolean | `false` | Specifies that the select should be read-only |
| disabled | boolean | `false` | Specifies that the select should be disabled |
| autofocus | boolean | `false` | Specifies to enable the autofocus of the select |
| required | boolean | `false` | Make the select required |
| selectOptions | array | `[]` | The available options (for "select" element) |
| optionLabel | string | `'name'` | Which attribute to show in the option (for "select" element) |
| options | object | `{}` | Options to pass to the input element |

## Examples
```html
<form-element
  type="text"
  name="My textbox"
  label="One"
  value="Foo">
</form-element>
```

```html
<form-element
  element="input"
  type="checkbox"
  name="My checkbox"
  label="Two"
  disabled.bind="true">
</form-element>
```

