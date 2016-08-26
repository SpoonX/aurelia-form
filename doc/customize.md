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

## Adding an element

Not only can you can customize existing form elements, but you can use the
power of `aurelia-view-manager` to add new elements.

> main.js

```js

    .plugin('aurelia-view-manager', view => {
      view.configureNamespace('spoonx/form', {
        templates: '/elements',
        map: {

          /*
           * This registers the image-select type and the path to the location
           * of the component
           */
          image-select: '{{templates}}/image-select'
        }
      });
    })

```

Besides registering the `image-select` component we also need to create it in
the '/elements' directory.

> /elements/image-select.js

```js

export class ImageSelectElement {

  _data = null;

  selectedColor = '#286090';

  @computedFrom('selectedColor')
  get style () {
    return `border-color: ${this.selectedColor};`;
  }

  load() {
    // whatever
  }

  doSelect(item) {

   //whatever
  }

  activate (model) {
    this.model = model;
    this.load();
  }

}

```

> /elements/image-select.html

```html

<template>
  <require from="aurelia-form/attributes"></require>
  <require from="aurelia-form/component/framework/bootstrap/form-group"></require>
  <form-group role="group" element.bind="element" message.bind="message">
      <option  value.bind="category.id" repeat.for="category of categories">${category.name}</option>
    </select>
    <div class="row">
      <div class="col-xs-6 col-sm-4" repeat.for="item of _data">
        <a click.delegate="doSelect(item)">
          <img src.bind="item.whatever" style="border-width: 2px;" class="img-responsive img-thumbnail" style.bind="item.selected ? style : ''">
        </a>
      </div>
    </div>
    <span class="help-block">${messages[element.key]}</span>
  </form-group>
</template>

```

You can now use this component when defining your schema.

> someViewModel.js

```js

  this.userSettings = [{
    key:  'nickname',
    type: 'string',
  }, {
    key:  'email',
    type:  'email'
  }, {
    key:  'picture',
    type  'image-select'
  }];

  this.userSettingsModel = {/* ... */};

```

> someViewModelView.html

```html

  <schema-form
    schema.bind="userSettingsSchema"
    model.bind ="userSettingsModel">
  </schema-form>

```
