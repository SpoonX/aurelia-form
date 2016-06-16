# Customize

It is possible to overwrite existing form fields or add new ones. Great for
when you want to alter the behavior or styling.

A form field is is a piece of a form. The text input field is an example of
this. The default form field has a label at the top, an input field in the
middle and a help block at the bottom of the input field. To populate the
elements with the correct data we use aurelia's bindables.

**value** is the value of the property on the model that matches the key
property value in the schema. This is what one uses to populate the input
element.

**element** is an item of the schema. The element object describes the form
field.

**messages** just a string which enables one to update the user about invalid
data or anything really.

When putting it all together you get this.

> example of a custom html element that works with aurelia-form. An example of
> a different type of options select. *Not tested*

```html
    <template>
      <div class="form-group">
        <label>${label}
        <div class="btn-group">
          <button repeat.for="option in element.options"
            class="btn-group ${value === option.value && btn-default } ${!(value === option.value) && btn-primary}"
            click.delegate="value = options.value">
        </div>
        <div class="help-block">${message}</div>
      </div>
    </template>
```

## Registering your custom element

Aurelia form uses `aurelia-view-manager` to resolve what view it is going to use,
allowing you to alter the view it will require for a `type`. Let's say you have
a custom select element which you would like to use instead. Open your main.js
and reconfigure the `aurelia-form` namespace.

```js
    .plugin('aurelia-view-manager', view => {
      view.configureNamespace('spoonx/form', {
        templates: '/elements',
        map: {
          select: '{{templates}}/select.html'
        }
      });
    })
```

Next time when aurelia-view-manager tries to resolve what view to use for
`select` It will return your template.

We have now overwritten the select type. Let's use it by adding it to and
element definition, adding that element to the schema, and render that schema
by passing both the schema, model and messages object to the `<schema-form>`
component.


```js

export class SomeForm extends Form {

    constructor() {
      let maleOrFemale = {
        key: 'sex',
        type: 'select',
        options: {
          {name: "Male", value: 'male'},
          {name: "Female", value: 'female'}
        }
      };

      let schema = {
        maleOrFemale
      };

      this.schema = schema;
      this.model = {sex: male};
    }

}

```

```html

    <schema-form
      model.bind="model"
      schema.bind="schema"
    ></schema-form>

```

This should render a form with only a select form field
