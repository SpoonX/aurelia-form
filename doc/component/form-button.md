# form-button
The `<form-buttom />` component allows you to render a button.
The label automatically gets translated if your project uses [aurelia-i18n](https://github.com/aurelia/i18n).

## Attributes
The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| label | string | `''` | The label to put in the element |
| type | string | `'submit'` | Button type |
| classes | string | `''` | Classes to add |
| disabled | boolean | `false` | Disable the button |
| options | Array / {} / string | `{}` | Options for the button (block, primary, size etc) |

## Examples

### Primary button
```html
<form-button options='primary' label="Click me!"></form-button>
```

### Primary button, small and block
```html
<form-button options='success, xs, block' label="Click me!"></form-button>
```
