# Components

Aurelia-form provides several components. They give different levels of
granularity when building a form. You might want to reuse the schema and the
model, but would only want several of the form-fields to be rendered. Or you
want a fancy layout that requires you to have a form form-field here and there.
Aurelia-form let's you decide.

## <schema-form>

Generate a complete form using the schema

```html

  <schema-form
    schema.bind="userSchema"
    model.bind="userModel">
  </schema-form>

```

## <entity-form>

Aurelia-form supports the *aurelia-orm* project. It does so by providing a public
custom component named `entity-form`. To use it you must create an entity and
pass it to the entity bindable. Read more about entities in the
[aurelia-orm docs](http://aurelia-orm.spoonx.org/entities.html).

```html

    <entity-form entity.bind="entity"></entity-form>

```

## <form-fields>

Generates all the form fields without the `<form>`  around it. Handy for
when you want more control when composing a single form.

```html

  <form-fields
    model.bind="userModel"
    schema.bind="userSchema">
  </form-fields>

```

## <form-field>

When things get really detailed you can choose to only generate a single form
field.

```html

  <form-field
    value.bind="model.name"
    element.bind="nameElement">
  </form-field>

```
