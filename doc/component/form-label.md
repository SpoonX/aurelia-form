# form-label
The `<form-label />` component allows you to render a label block.

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| label | string | `null` | The text of the label |
| visible | boolean | `undefined` | Define whether the label is visible or not |
| classes | string | `''` | Classes to add |

## Examples

This is a simple component, with a simple example.

```html
<form-label label="My label" visible.bind="false" classes="custom-class other-class"></form-label>
```
