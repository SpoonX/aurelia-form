# Quick start
Diving into a new plugin or library can be difficult.
There's a lot of information to consume to decide if you're willing to use, and potentially contribute to, a project.

In this quick start I'll strive to grab your attention as quick (ha!) as possible, so you can proceed doing the awesome stuff you're working on. For that reason, **I won't include the [installation instructions](https://aurelia-form.spoonx.org/installation.html)**, use the default **bootstrap framework** and quit being so wordy.

Ready? Let's go.

## Components
Let's start by creating some simple components.

### Entity-form
Generate an entire form with validation:

```html
<entity-form entity.bind="user" behavior="horizontal" valid.delegate="register()">
</entity-form>
```

_**Note:** (requires an entity from [aurelia-orm](https://aurelia-orm.spoonx.org/quick-start.html), and [form validation](https://aurelia-form-validation.spoonx.org/))_

### Button
So [ehm](http://getbootstrap.com/css/#buttons), code:

```html
<form-button label="horizontal" click.delegate="foo()"></form-button>
```

Other button, color, stuff, [options](http://getbootstrap.com/css/#buttons-options):

```html
<form-button label="horizontal" options="danger,xs,block" click.delegate="foo()"></form-button>
```

Ooooh, aaaah.. Moving on.

### Input
Text, password, email, whatever:

```html
<form-input type="password"></form-input>
```

[Some](http://getbootstrap.com/css/#forms-control-disabled) more.. [stuff](http://getbootstrap.com/css/#forms-control-sizes):

```html
<form-input options="lg" disabled.bind="noTouchy" value.bind="lies"></form-input>
```

### Help
Info [help thingy](http://getbootstrap.com/css/#forms-help-text):

```html
<form-help message="I'll never leave you"></form-help>
```

### Label
I don't like putting labels on people.

```html
<form-label label="Hello world"></form-label>
```

Because flexible:

```html
<form-label label="Hello">
  <strong slot="after">World</strong>
</form-label>
```

### Form-group
Made for the lazy (and sane). Combines all the things when provided (label, element, error, help):

```html
<form-group label="Username" value.bind="user.username"></form-group>
```

More attributes, slots, and stuff:

```html
<form-group element="checkbox" value.bind="rememberMe" behavior="horizontal">
  <form-label label="Hello" slot="label">
    <strong slot="after">World</strong>
  </form-label>
</form-group>
```

## Conclusion
Aurelia-form is awesome. The flexibility offered goes way beyond this quick start. That's why it's a quick start...

Pick another chapter and continue reading about specific features aurelia-form offers.
