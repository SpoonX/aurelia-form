# Contributing

Aurelia-form is a project of the SpoonX organization. Which is why Aurelia-form
follows the same guidelines as SpoonX. Please have (quick) look at these
[guidelines](https://github.com/SpoonX/about/blob/master/CONTRIBUTING.md).

This document contains information which should you get a running start when
wanting to contribute to the Aurelia-form project.

## Adding support for a new framework

Let's assume we want to add support for the foundation framework. This would
require one to perform the following steps.

- Add a folder to the frameworks folder. `frameworks/foundation`
- Add a components.js file to that directory `frameworks/foundation/components.js`
- Add your foundation components to the frameworks/foundation folder
- Add the components to the `frameworks/foundation/components.js`. See
  `frameworks/bootstrap/components.js` to see how.
- Import the object `./foundation/components` into the `frameworks/frameworks.js`
- Add the foundation object to the export of `./frameworks/frameworks.js`

Users are now able to set the framework property to `foundation` in the config.
Aurelia form will now use the foundation custom components when rendering the
forms.

## Writing your own custom components

It is possible to make your own component and use that one instead of a
framework one or next to the framework components. Let's say you have a
date picker you would like to use. In that case you could wrap that piece of
code in a custom component that has a bindable attribute and value property. From
there you could set and get the value. Example of a scaffold for a custom
form component.

An example would be.

```JavaScript
  import {bindingMode, bindable, inject} from 'Aurelia-framework';

  @inject(Element)
  export class DatePickerCustomComponent {
    /* do not forget to make it two way bindable */
    @bindable({defaultBindingMode: bindingMode.twoWay})
    value

    @bindable
    attribute

    constructor(element) {

      /* instantiate the thing */
      new DatePicker(element)
      .onDateSelect(date => this.value = date);

    }
  }
```

In this you only need an element to place the date picker.

```HTML
  <div class="my-date-picker"></div>
```

Once you have your component defined, you can tell Aurelia-form to use
that one instead of the framework's date component. This is done in the config
which is located in the main.js.

```JavaScript
  components: {
    date: './path/datepicker.js'
  }
```

### Supporting attributes in your custom components

You might want to add the attributes defined in the schema's attribute to a specific
element. This is done by defining the "attrs" attribute on one of the component-
template elements. Aurelia-form searches for that element when "attached" and
adds the attributes defined in the schema-attribute.

```HTML
<template>
  <input
    attrs
    class="form-control"
    type.bind="attribute.type"
    name.bind="attribute.name"
    value.bind="value">
</template>
```

The attrs attribute will result in the adding of attributes. But why
would you want to use this?

- Making input fields readonly or disabled.
- A min and max can be set when type is number.

Depending on the type of the input field one can set different attributes to get
the desired input field behavior.
