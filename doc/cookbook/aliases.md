# Aliases

Aliases allow you to direct element types to other elements.

The [`<form-element />`](../component/form-element.md) component generates a form element dynamically for you based on data passed in.
One of the attributes it has is `element`, which allows you to specify as which element it should render (radion, checkbox, input etc).

This is being used by entity-form to automatically generate entire forms for you.
Which is great! But you might want to use some dynamic values for the `element`.

A great example of this is aurelia-orm. Aurelia-orm has an entity mapping that can be used to create forms.
One of the types, though, is `boolean`. This works well for entities, but not for forms.

Enter aliases! With aliases you can tell [`<form-element />`](../component/form-element.md) to map the given element to another.

## Example

You can configure aliases using aurelia config. Read more about it in the [configuration guide](../configuration.md).

```js
const myConfiguration = {
  'aurelia-form': {
    // Alias these entity types to elements (used by aurelia-orm)
    aliases: {
      boolean: 'checkbox'
    }
  }
};
```

Now, a form element of type boolean will render as a checkbox.

**Note:** This alias is already part of the defaults, and pure used for demonstration.
