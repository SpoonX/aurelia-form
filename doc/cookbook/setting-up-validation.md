# Setting up validation
Validation with aurelia-form is very simple. We've built a [plugin](https://github.com/SpoonX/aurelia-form-validation) for aurelia-form that takes away any boilerplate, making it work out of the box.

## Enabling the plugin
To get validation set up, all you have to do is:

1. [Install the plugin](https://aurelia-form-validation.spoonx.org/installation.html)
2. Enable it in your config.

The following code snippets illustrate how to enable the plugin for your project.

### Using aurelia-config
[Aurelia-config](https://aurelia-config.spoonx.org/) makes it easy to register plugins and configure them.

```js
aurelia.use
  .plugin('aurelia-config', configure => {
    return configure([
      'aurelia-form',
      'aurelia-form-validation'
    ]);
  });
```

#### Changing trigger
By default, the validation trigger is `change`.
This means that any change in the form will trigger validation for the field that triggered the change.
Other options are `blur`, `changeOrBlur ` and `manual`.

Here's how you can change the trigger using the config.

```js
import {validateTrigger} from 'aurelia-validation';

aurelia.use
  .plugin('aurelia-config', configure => {
    return configure([
      'aurelia-form',
      'aurelia-form-validation'
    ], {
      'aurelia-form': {
        validation: {
          trigger: validateTrigger.blur
        }
      }
    });
  });
```

### Without aurelia-config
Aurelia-config is optional (but recommended!).
Without aurelia-config, registering the plugins works exactly like expected:

```js
aurelia.use
  .plugin('aurelia-form')
  .plugin('aurelia-form-validation');
```

Configurations can be supplied using the second argument.

## Usage example
Enabling validation is enough to start validating, but you'll have to register validation rules to validate on your entities, too.

The following is an example based on [aurelia-orm](https://aurelia-orm.spoonx.org/).

**entity/todo.js**

```js
import {Entity, validatedResource, type} from 'aurelia-orm';
import {ValidationRules} from 'aurelia-validation';

@validatedResource('todo')
export class TodoEntity extends Entity {

  @type('string')
  todo = '';

  @type('boolean')
  done = false;

  constructor() {
    super();

    ValidationRules
      .ensure('todo').minLength(3).maxLength(15).required()
      .on(this);
  }
}
```

**form/todo.js**

```js
import {TodoEntity} from 'entity/todo';

export class Todo {
  constructor() {
    this.todo = new TodoEntity();
  }
}
```

**form/todo.html**

```html
<template>
  <entity-form entity.bind="todo">
</template>
```

And there you have it, a fully functional form with validation set up.

## All done
Now you have validation enabled!
