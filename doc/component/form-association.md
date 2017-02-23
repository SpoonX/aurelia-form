# form-association
The `<form-association />` component allows you to render an [`<association-select />`](https://aurelia-orm.spoonx.org/components.html).

## Attributes

The following attributes (bindables) are available for this component.

| attribute | type | default | description |
|---|---|---|---|
| value | string | `undefined` | The value of the selected relation |
| name | string | `''` | The name of the field |
| placeholder | string | `''` | A short hint that describes the expected value |
| disabled | boolean | `false` | Specifies that the field should be disabled |
| options | object | `{}` | Options for association-select |

## Options
The options attribute allows you to pass in the following options:

- resource
- multiple
- property
- identifier
- criteria
- hidePlaceholder
- selectablePlaceholder

## Note
This component is mainly useful when using `<entity-form />` in combination with an aurelia-orm entity.
It sets up an association select for you, making it easier to link entities together.

You can read more about the association-select in the [docs](https://aurelia-orm.spoonx.org/components.html).
