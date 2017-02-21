# form-select
The `<form-select />` component allows you to render a select block.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| name | string | `''` | The name of the select |
| classes | string | `''` | Classes to add |
| readonly | boolean | `false` | Specifies that the select should be read-only |
| disabled | boolean | `false` | Specifies that the select should be disabled |
| multiple | boolean | `false` | Make the select a multi-select block |
| selectOptions | array | `[]` | The available options |
| value | string/array | `undefined` | The selected values |
| optionLabel | string | `'name'` | Which attribute to show in the option |
| autofocus | boolean | `false` | Specifies to enable the autofocus of the select |
| required | boolean | `false` | Make the select required |

## Examples
```html
<form-select
  value.bind="[1,3]"
  selectOptions.bind="[{id: 55}, {id: 120}, {id: 99}]"
  optionLabel.bind="id">
</form-select>
```

```html
<form-select
  multiple.bind="true"
  value.bind="['bob', 'John']"
  selectOptions.bind="[{name: 'Bob'}, {name: 'Kees'}, {name: 'John'}]">
</form-select>
```
