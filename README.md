# Archived

It was fun while it lasted, but we have to stop maintaining these repositories. We haven't used these projects for quite some time and maintaining them is becoming harder to do.

You deserve better, and for that reason we've decided to archive some repositories, which includes this one.

Feel free to fork and alter the repositories, and go forth making awesome stuff.

# aurelia-form

[![Build Status](https://travis-ci.org/SpoonX/aurelia-form.svg?branch=master)](https://travis-ci.org/SpoonX/aurelia-form)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

> Form generation, validation and fun. This is a plugin for the [Aurelia](http://www.aurelia.io/) platform.

- Easy to use with clear [documentation](http://aurelia-form.spoonx.org/)
- [Form validation](https://aurelia-form-validation.spoonx.org/)
- Support for multiple css frameworks enabled by [aurelia view manager](https://aurelia-view-manager.spoonx.org/) ([is your framework missing](https://github.com/SpoonX/aurelia-form/tree/master/src/component/view)? Submit a PR!)
- Configuration simplified through [aurelia-config](https://aurelia-config.spoonx.org/)
- Automatic forms for [aurelia-orm](https://aurelia-orm.spoonx.org/) entities
- Built inside-out (everything is optional)
- Auto translations (if [aurelia-i18n](https://github.com/aurelia/i18n) is configured)
- Declarative way of building forms
- Aliases for types so you can reuse elements for similar or different types

## Documentation

You can find detailed documentation, including installation instructions over at the [aurelia-form documentation](http://aurelia-form.spoonx.org/).

The [changelog](https://aurelia-form.spoonx.org/CHANGELOG.html) provides you with information about important changes made over releases.

## Updating from 0.x

- Basic entity-forms will not have to be changed.
- Any custom form will be completely different, but simple to implement.
- Schemas have been dropped in favor or [declarative components](https://aurelia-form.spoonx.org/).
- ValidateJS has been dropped in favor of the new aurelia-validation, but is easier to [set up in your project](https://aurelia-form.spoonx.org/cookbook/setting-up-validation.html).

## Contributing

Report bugs, request features, send pull requests for fixes and features and
read the [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

MIT
