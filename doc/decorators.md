# decorators
Decorators are used by `<entity-form />` when rendering your form.
They pass instructions to the renderer to give you control over how the elements turn out.

## @autofocus
The `@autofocus` decorator allows you to set the `autofocus` attribute on the input element.

### Example
```js
import {autofocus} from 'aurelia-form';

class SomeEntity {
  @autofocus someProperty;
}
```

## @disabled
The `@disabled` decorator allows you to set the `disabled` attribute on the input element.

### Example
```js
import {disabled} from 'aurelia-form';

class SomeEntity {
  @disabled someProperty;
}
```

## @element
The `@element` decorator allows you to specify which element / component `<entity-form />` should use when rendering your form. Options are:

- checkbox
- radio
- input
- select
- textarea
- any of the registered elements

### Example
```js
import {element} from 'aurelia-form';

class SomeEntity {
  @element('textarea')
  someProperty;
}
```

## @inputType
The `@inputType` decorator allows you to specify the type of the element to use when `<entity-form />` renders your form.

**Note:** This only works with element `input`.

### Example
```js
import {inputType} from 'aurelia-form';

class SomeEntity {
  @inputType('password')
  someProperty;
}
```

## @label
The `@label` decorator allows you to specify the label to use when `<entity-form />` renders your form.

**Note:** It defaults to the name of the property.

### Example
```js
import {label} from 'aurelia-form';

class SomeEntity {
  @label('Some pretty label')
  someProperty;
}
```

## @noRender
The `@noRender` decorator allows you to tell `<entity-form />` not to render the element when it renders your form.

### Example
```js
import {noRender} from 'aurelia-form';

class SomeEntity {
  @noRender()
  someProperty; // Won't show

  someOtherProperty; // Will show
}
```

## @placeholder
The `@placeholder` decorator allows you to specify the value to use as the placeholder.

### Example
```js
import {placeholder} from 'aurelia-form';

class SomeEntity {
  @placeholder('Useful placeholder')
  someProperty;
}
```

## @position
The `@position` decorator allows you to specify in which order elements should be rendered.

### Example
```js
import {position} from 'aurelia-form';

class SomeEntity {
  @position(2)
  someProperty;

  @position(3)
  someOtherProperty;

  @position(1)
  andSomethingElse;
}
```

## @readonly
The `@readonly` decorator allows you to set the `readonly` attribute on the input element.

### Example
```js
import {readonly} from 'aurelia-form';

class SomeEntity {
  @readonly()
  someProperty;
}
```

## @required
The `@required` decorator allows you to set the `required` attribute on the input element.

### Example
```js
import {required} from 'aurelia-form';

class SomeEntity {
  @required()
  someProperty;
}
```
