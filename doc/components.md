# Components

Aurelia-form provides several components. They give different levels of
granularity when building a form. You might want to reuse the schema and the
model but would only want several of the form-fields to be rendered. Or you want
a fancy layout that requires you to have a form form-field here and there.
Aurelia-form let's you decide.

## <schema-form>

Generate a complete form using the schema

```html

  <schema-form
    schema="userSchema"
    model="userModel">
  </schema-form>

```

## <form-fields>

Generates all the form fields without the form and fieldset around it. Handy for
when you want more control when composing a single form.

```html

  <form-fields
    model.bind="userModel"
    schema.bind="userSchema">
  </form-fields>

```

## <form-field>

When things get really detailed you can choose to only generate a single form
field. Only generates a label (if hide_label is not true) and an "input" like
field.

```html

  <form-field
    value.bind="userSchema.name"
    attribute.bind="nameAttribute">
  </form-field>

```