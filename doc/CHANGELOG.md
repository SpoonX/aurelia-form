### 0.1.6 (2016-06-23)


#### Bug Fixes

* **attributes:** custom attribute to set attributes on aurelia-form elements ([ef9b8d1b](https://github.com/SpoonX/aurelia-form/commit/ef9b8d1b93e75b9a6bab051a80027d5e7aec6779))
* **bootstrap:**
  * form-group accesses the label value correctly ([33c9e1bb](https://github.com/SpoonX/aurelia-form/commit/33c9e1bb4fc59e9a6906e2425174d2bcde82a057))
  * remove unused jquery attr in form group ([c096f970](https://github.com/SpoonX/aurelia-form/commit/c096f970d4b5712d15db0d49aace3c542d9cc8bd))
  * removed mixup between message and label ([4d09ec96](https://github.com/SpoonX/aurelia-form/commit/4d09ec96d8555ccb9aeeb549b5a478cb644e6d51))
  * require the form-group custom element completely and not just the as a html cust ([2edb75a2](https://github.com/SpoonX/aurelia-form/commit/2edb75a2c989b89ec67ff37af37b4d60b5a810ca))
  * require attributes attribute and use it ([313e1999](https://github.com/SpoonX/aurelia-form/commit/313e19997100ed5fc4bf1cedbe3922fb632c13d4))
  * button group for actions element ([d517d283](https://github.com/SpoonX/aurelia-form/commit/d517d283cd5492bc5bf74674c4b7bfa6badbf1a6))
* **buttons:** correctly named class and actions view model pan-framework ([0e5f287d](https://github.com/SpoonX/aurelia-form/commit/0e5f287d5fbcefd0d3ed351268c480e084cf080d))
* **config:** perform config regardless when the form config is instantiatied ([f850a4cc](https://github.com/SpoonX/aurelia-form/commit/f850a4cc9569706eee4de82281d08e536b8d31d9))
* **console:** use aurelia-logging's getLogger instead of console ([b17ac8d8](https://github.com/SpoonX/aurelia-form/commit/b17ac8d84605f0e0d5c7998b695536c8945842f8))
* **dependencies:**
  * added missing aurelia-logging package ([633293b2](https://github.com/SpoonX/aurelia-form/commit/633293b20eea8f50cc7e2a13af390cb995a55173))
  * i18n as a hard dependency ([9858b963](https://github.com/SpoonX/aurelia-form/commit/9858b963520102b5303754af8e65ac47c401d815))
* **entity:** builds a form friendly schema using the entity's metadata ([e68fdf83](https://github.com/SpoonX/aurelia-form/commit/e68fdf836d4dc07827c548fc485ceb76e70f8867))
* **field:** do not bind model to custom element ([b2609823](https://github.com/SpoonX/aurelia-form/commit/b2609823ec9c9cbec4970a7001b98ab00b45a278))
* **form:** typo fix ([69abddbd](https://github.com/SpoonX/aurelia-form/commit/69abddbd9aab78c9dfce1178ec14a024524e0bb4))
* **form-group:**
  * is a component with with view model. Remove bindables attribute ([ecc1c3c9](https://github.com/SpoonX/aurelia-form/commit/ecc1c3c903b24d12b436c22b050562228813ca78))
  * import parent class correctly ([6b0eda24](https://github.com/SpoonX/aurelia-form/commit/6b0eda2448389d4fafe8eb0304533128e61a7e97))
* **i18n:** use attribute to enable soft dependency on i18n ([cd9a7098](https://github.com/SpoonX/aurelia-form/commit/cd9a7098b59316e9e1e181fc7c549fc8b7ab9c2c))
* **label:** translations and text uses label value first and if not defined uses key value ([3f6ea54e](https://github.com/SpoonX/aurelia-form/commit/3f6ea54ef8e68f3d27a5d65630f6729241993dc1))
* **labels:**
  * hides the labels when element.label is set to false ([8ca0df87](https://github.com/SpoonX/aurelia-form/commit/8ca0df87f9eb2abcc0068968972672c4e7750250))
  * move the labels to the framework components ([9bf0deef](https://github.com/SpoonX/aurelia-form/commit/9bf0deef239a5b6ee3c62606ca3f49f0d7695f9c))
* **linter:** allows key-spacing ([8f20b41e](https://github.com/SpoonX/aurelia-form/commit/8f20b41e671310b81e36a18ce7af1e6112cc3153))
* **naming:** schema to attribute and name to key ([b2987c9d](https://github.com/SpoonX/aurelia-form/commit/b2987c9d0b0692eed29831377340a137d58bed0f))
* **package:** aurelia-view-manager should use npm to install ([fce81a2f](https://github.com/SpoonX/aurelia-form/commit/fce81a2f1edb3563f71af9edb4b3f3ff084c7d69))
* **project:**
  * content replaced with slot element ([64a93a9c](https://github.com/SpoonX/aurelia-form/commit/64a93a9cc48b44af4937635df9354945aeaafaf4))
  * has missing aurelia-view-manager dependency ([49c002ee](https://github.com/SpoonX/aurelia-form/commit/49c002ee418dfde8d4f26f5f15a0df07d4ad3143))
* **schema-form:** no fieldset surrounding the form-fields ([0b35eca0](https://github.com/SpoonX/aurelia-form/commit/0b35eca0062afaf4e15514833e27bd036865f52d))
* **view:** name of aurelia-view changed to aurelia-view-manager ([eeb9697c](https://github.com/SpoonX/aurelia-form/commit/eeb9697cb8313e6a7c677d95bd9adae2bbba48cf))


#### Features

* **Form:** the form class which makes writing form a bit easier ([71b5b869](https://github.com/SpoonX/aurelia-form/commit/71b5b869566ad1561d328d3195d43c7f9de53639))
* **actions:** define action buttons in schema ([f205d9c3](https://github.com/SpoonX/aurelia-form/commit/f205d9c3cf321e01568a5335e42fa6ef25b91a08))
* **aliases:**
  * added alias nested = fieldset ([e72c4d3b](https://github.com/SpoonX/aurelia-form/commit/e72c4d3b6b2d5f5aba3bc96eb3f928be6377b1a1))
  * configure aliases to register aliases for a type ([8ee1dda7](https://github.com/SpoonX/aurelia-form/commit/8ee1dda7ed7fffe2b179e7ca1eb520eb6a5f49be))
* **bootstrap:**
  * setting buttons' button attributes ([ef35c7ed](https://github.com/SpoonX/aurelia-form/commit/ef35c7ed85d3940c8e4ad84704735712dfd00085))
  * the collection custom component ([9ac7f579](https://github.com/SpoonX/aurelia-form/commit/9ac7f5795abcaa2fcef88fee478eb98c196d2342))
* **buttons:** added alias buttons for `actions` type ([c88f5a28](https://github.com/SpoonX/aurelia-form/commit/c88f5a282d1a1a4db825d03b9c6b10724f801cd8))
* **component:**
  * show warning when component not defined ([272d93c0](https://github.com/SpoonX/aurelia-form/commit/272d93c0f1d21f079944b5dab327491dc3c04064))
  * default the type to "text" when not a valid type ([81274051](https://github.com/SpoonX/aurelia-form/commit/812740511ebb4960f523231ccbb8bb32a6c2e2c9))
* **entity-form:** component for creating a form using an entity ([b50abb45](https://github.com/SpoonX/aurelia-form/commit/b50abb458ea42c32f6db221f826bcac474af560c))
* **fields:** show warning when model is undefined ([714c3722](https://github.com/SpoonX/aurelia-form/commit/714c3722cc04969fec96abda256bc54b281c2070))
* **fieldset:** nested schemas fieldset element enables the rendering of nested models/entities ([5d7733a2](https://github.com/SpoonX/aurelia-form/commit/5d7733a24f939e72981a64bff4bf57cce8517b3d))
* **form:**
  * isValid property on Form ([acf7ee0f](https://github.com/SpoonX/aurelia-form/commit/acf7ee0f002bc224d52241df144cdb6ffb0a16b1))
  * convenience class Form rewrite ([4aa75417](https://github.com/SpoonX/aurelia-form/commit/4aa75417887d908b11f48f0e1ed66857ce8b1f60))
* **message:** messages rendered in form-group ([2cb7214c](https://github.com/SpoonX/aurelia-form/commit/2cb7214c312f91ab5c7fc20ac9ccbf2e07947eaa))
* **orm:** function for generating schema from entity ([dd81d9b3](https://github.com/SpoonX/aurelia-form/commit/dd81d9b35dae07fd12989501a1f6e469260b80a2))
* **view:** let viewManager determine locations of templates ([185e98aa](https://github.com/SpoonX/aurelia-form/commit/185e98aaebfc707d520bcc5a1ee634ce1adc419a))


### 0.1.4 (2016-06-21)


#### Bug Fixes

* **attributes:** custom attribute to set attributes on aurelia-form elements ([ef9b8d1b](https://github.com/SpoonX/aurelia-form/commit/ef9b8d1b93e75b9a6bab051a80027d5e7aec6779))
* **bootstrap:**
  * form-group accesses the label value correctly ([33c9e1bb](https://github.com/SpoonX/aurelia-form/commit/33c9e1bb4fc59e9a6906e2425174d2bcde82a057))
  * remove unused jquery attr in form group ([c096f970](https://github.com/SpoonX/aurelia-form/commit/c096f970d4b5712d15db0d49aace3c542d9cc8bd))
  * removed mixup between message and label ([4d09ec96](https://github.com/SpoonX/aurelia-form/commit/4d09ec96d8555ccb9aeeb549b5a478cb644e6d51))
  * require the form-group custom element completely and not just the as a html cust ([2edb75a2](https://github.com/SpoonX/aurelia-form/commit/2edb75a2c989b89ec67ff37af37b4d60b5a810ca))
  * require attributes attribute and use it ([313e1999](https://github.com/SpoonX/aurelia-form/commit/313e19997100ed5fc4bf1cedbe3922fb632c13d4))
  * button group for actions element ([d517d283](https://github.com/SpoonX/aurelia-form/commit/d517d283cd5492bc5bf74674c4b7bfa6badbf1a6))
* **buttons:** correctly named class and actions view model pan-framework ([0e5f287d](https://github.com/SpoonX/aurelia-form/commit/0e5f287d5fbcefd0d3ed351268c480e084cf080d))
* **config:** perform config regardless when the form config is instantiatied ([f850a4cc](https://github.com/SpoonX/aurelia-form/commit/f850a4cc9569706eee4de82281d08e536b8d31d9))
* **console:** use aurelia-logging's getLogger instead of console ([b17ac8d8](https://github.com/SpoonX/aurelia-form/commit/b17ac8d84605f0e0d5c7998b695536c8945842f8))
* **dependencies:**
  * added missing aurelia-logging package ([633293b2](https://github.com/SpoonX/aurelia-form/commit/633293b20eea8f50cc7e2a13af390cb995a55173))
  * i18n as a hard dependency ([9858b963](https://github.com/SpoonX/aurelia-form/commit/9858b963520102b5303754af8e65ac47c401d815))
* **entity:** builds a form friendly schema using the entity's metadata ([e68fdf83](https://github.com/SpoonX/aurelia-form/commit/e68fdf836d4dc07827c548fc485ceb76e70f8867))
* **field:** do not bind model to custom element ([b2609823](https://github.com/SpoonX/aurelia-form/commit/b2609823ec9c9cbec4970a7001b98ab00b45a278))
* **form:** typo fix ([69abddbd](https://github.com/SpoonX/aurelia-form/commit/69abddbd9aab78c9dfce1178ec14a024524e0bb4))
* **form-group:**
  * is a component with with view model. Remove bindables attribute ([ecc1c3c9](https://github.com/SpoonX/aurelia-form/commit/ecc1c3c903b24d12b436c22b050562228813ca78))
  * import parent class correctly ([6b0eda24](https://github.com/SpoonX/aurelia-form/commit/6b0eda2448389d4fafe8eb0304533128e61a7e97))
* **i18n:** use attribute to enable soft dependency on i18n ([cd9a7098](https://github.com/SpoonX/aurelia-form/commit/cd9a7098b59316e9e1e181fc7c549fc8b7ab9c2c))
* **label:** translations and text uses label value first and if not defined uses key value ([3f6ea54e](https://github.com/SpoonX/aurelia-form/commit/3f6ea54ef8e68f3d27a5d65630f6729241993dc1))
* **labels:**
  * hides the labels when element.label is set to false ([8ca0df87](https://github.com/SpoonX/aurelia-form/commit/8ca0df87f9eb2abcc0068968972672c4e7750250))
  * move the labels to the framework components ([9bf0deef](https://github.com/SpoonX/aurelia-form/commit/9bf0deef239a5b6ee3c62606ca3f49f0d7695f9c))
* **linter:** allows key-spacing ([8f20b41e](https://github.com/SpoonX/aurelia-form/commit/8f20b41e671310b81e36a18ce7af1e6112cc3153))
* **naming:** schema to attribute and name to key ([b2987c9d](https://github.com/SpoonX/aurelia-form/commit/b2987c9d0b0692eed29831377340a137d58bed0f))
* **package:** aurelia-view-manager should use npm to install ([fce81a2f](https://github.com/SpoonX/aurelia-form/commit/fce81a2f1edb3563f71af9edb4b3f3ff084c7d69))
* **project:**
  * content replaced with slot element ([64a93a9c](https://github.com/SpoonX/aurelia-form/commit/64a93a9cc48b44af4937635df9354945aeaafaf4))
  * has missing aurelia-view-manager dependency ([49c002ee](https://github.com/SpoonX/aurelia-form/commit/49c002ee418dfde8d4f26f5f15a0df07d4ad3143))
* **schema-form:** no fieldset surrounding the form-fields ([0b35eca0](https://github.com/SpoonX/aurelia-form/commit/0b35eca0062afaf4e15514833e27bd036865f52d))
* **view:** name of aurelia-view changed to aurelia-view-manager ([eeb9697c](https://github.com/SpoonX/aurelia-form/commit/eeb9697cb8313e6a7c677d95bd9adae2bbba48cf))


#### Features

* **Form:** the form class which makes writing form a bit easier ([71b5b869](https://github.com/SpoonX/aurelia-form/commit/71b5b869566ad1561d328d3195d43c7f9de53639))
* **actions:** define action buttons in schema ([f205d9c3](https://github.com/SpoonX/aurelia-form/commit/f205d9c3cf321e01568a5335e42fa6ef25b91a08))
* **aliases:**
  * added alias nested = fieldset ([e72c4d3b](https://github.com/SpoonX/aurelia-form/commit/e72c4d3b6b2d5f5aba3bc96eb3f928be6377b1a1))
  * configure aliases to register aliases for a type ([8ee1dda7](https://github.com/SpoonX/aurelia-form/commit/8ee1dda7ed7fffe2b179e7ca1eb520eb6a5f49be))
* **bootstrap:**
  * setting buttons' button attributes ([ef35c7ed](https://github.com/SpoonX/aurelia-form/commit/ef35c7ed85d3940c8e4ad84704735712dfd00085))
  * the collection custom component ([9ac7f579](https://github.com/SpoonX/aurelia-form/commit/9ac7f5795abcaa2fcef88fee478eb98c196d2342))
* **buttons:** added alias buttons for `actions` type ([c88f5a28](https://github.com/SpoonX/aurelia-form/commit/c88f5a282d1a1a4db825d03b9c6b10724f801cd8))
* **component:**
  * show warning when component not defined ([272d93c0](https://github.com/SpoonX/aurelia-form/commit/272d93c0f1d21f079944b5dab327491dc3c04064))
  * default the type to "text" when not a valid type ([81274051](https://github.com/SpoonX/aurelia-form/commit/812740511ebb4960f523231ccbb8bb32a6c2e2c9))
* **entity-form:** component for creating a form using an entity ([b50abb45](https://github.com/SpoonX/aurelia-form/commit/b50abb458ea42c32f6db221f826bcac474af560c))
* **fields:** show warning when model is undefined ([714c3722](https://github.com/SpoonX/aurelia-form/commit/714c3722cc04969fec96abda256bc54b281c2070))
* **fieldset:** nested schemas fieldset element enables the rendering of nested models/entities ([5d7733a2](https://github.com/SpoonX/aurelia-form/commit/5d7733a24f939e72981a64bff4bf57cce8517b3d))
* **form:**
  * isValid property on Form ([acf7ee0f](https://github.com/SpoonX/aurelia-form/commit/acf7ee0f002bc224d52241df144cdb6ffb0a16b1))
  * convenience class Form rewrite ([4aa75417](https://github.com/SpoonX/aurelia-form/commit/4aa75417887d908b11f48f0e1ed66857ce8b1f60))
* **message:** messages rendered in form-group ([2cb7214c](https://github.com/SpoonX/aurelia-form/commit/2cb7214c312f91ab5c7fc20ac9ccbf2e07947eaa))
* **orm:** function for generating schema from entity ([dd81d9b3](https://github.com/SpoonX/aurelia-form/commit/dd81d9b35dae07fd12989501a1f6e469260b80a2))
* **view:** let viewManager determine locations of templates ([185e98aa](https://github.com/SpoonX/aurelia-form/commit/185e98aaebfc707d520bcc5a1ee634ce1adc419a))


### 0.1.3 (2016-06-20)


#### Bug Fixes

* **attributes:** custom attribute to set attributes on aurelia-form elements ([ef9b8d1b](https://github.com/SpoonX/aurelia-form/commit/ef9b8d1b93e75b9a6bab051a80027d5e7aec6779))
* **bootstrap:**
  * form-group accesses the label value correctly ([33c9e1bb](https://github.com/SpoonX/aurelia-form/commit/33c9e1bb4fc59e9a6906e2425174d2bcde82a057))
  * remove unused jquery attr in form group ([c096f970](https://github.com/SpoonX/aurelia-form/commit/c096f970d4b5712d15db0d49aace3c542d9cc8bd))
  * removed mixup between message and label ([4d09ec96](https://github.com/SpoonX/aurelia-form/commit/4d09ec96d8555ccb9aeeb549b5a478cb644e6d51))
  * require the form-group custom element completely and not just the as a html cust ([2edb75a2](https://github.com/SpoonX/aurelia-form/commit/2edb75a2c989b89ec67ff37af37b4d60b5a810ca))
  * require attributes attribute and use it ([313e1999](https://github.com/SpoonX/aurelia-form/commit/313e19997100ed5fc4bf1cedbe3922fb632c13d4))
  * button group for actions element ([d517d283](https://github.com/SpoonX/aurelia-form/commit/d517d283cd5492bc5bf74674c4b7bfa6badbf1a6))
* **buttons:** correctly named class and actions view model pan-framework ([0e5f287d](https://github.com/SpoonX/aurelia-form/commit/0e5f287d5fbcefd0d3ed351268c480e084cf080d))
* **config:** perform config regardless when the form config is instantiatied ([f850a4cc](https://github.com/SpoonX/aurelia-form/commit/f850a4cc9569706eee4de82281d08e536b8d31d9))
* **console:** use aurelia-logging's getLogger instead of console ([b17ac8d8](https://github.com/SpoonX/aurelia-form/commit/b17ac8d84605f0e0d5c7998b695536c8945842f8))
* **dependencies:**
  * added missing aurelia-logging package ([633293b2](https://github.com/SpoonX/aurelia-form/commit/633293b20eea8f50cc7e2a13af390cb995a55173))
  * i18n as a hard dependency ([9858b963](https://github.com/SpoonX/aurelia-form/commit/9858b963520102b5303754af8e65ac47c401d815))
* **entity:** builds a form friendly schema using the entity's metadata ([e68fdf83](https://github.com/SpoonX/aurelia-form/commit/e68fdf836d4dc07827c548fc485ceb76e70f8867))
* **field:** do not bind model to custom element ([b2609823](https://github.com/SpoonX/aurelia-form/commit/b2609823ec9c9cbec4970a7001b98ab00b45a278))
* **form:** typo fix ([69abddbd](https://github.com/SpoonX/aurelia-form/commit/69abddbd9aab78c9dfce1178ec14a024524e0bb4))
* **form-group:**
  * is a component with with view model. Remove bindables attribute ([ecc1c3c9](https://github.com/SpoonX/aurelia-form/commit/ecc1c3c903b24d12b436c22b050562228813ca78))
  * import parent class correctly ([6b0eda24](https://github.com/SpoonX/aurelia-form/commit/6b0eda2448389d4fafe8eb0304533128e61a7e97))
* **i18n:** use attribute to enable soft dependency on i18n ([cd9a7098](https://github.com/SpoonX/aurelia-form/commit/cd9a7098b59316e9e1e181fc7c549fc8b7ab9c2c))
* **label:** translations and text uses label value first and if not defined uses key value ([3f6ea54e](https://github.com/SpoonX/aurelia-form/commit/3f6ea54ef8e68f3d27a5d65630f6729241993dc1))
* **labels:**
  * hides the labels when element.label is set to false ([8ca0df87](https://github.com/SpoonX/aurelia-form/commit/8ca0df87f9eb2abcc0068968972672c4e7750250))
  * move the labels to the framework components ([9bf0deef](https://github.com/SpoonX/aurelia-form/commit/9bf0deef239a5b6ee3c62606ca3f49f0d7695f9c))
* **linter:** allows key-spacing ([8f20b41e](https://github.com/SpoonX/aurelia-form/commit/8f20b41e671310b81e36a18ce7af1e6112cc3153))
* **naming:** schema to attribute and name to key ([b2987c9d](https://github.com/SpoonX/aurelia-form/commit/b2987c9d0b0692eed29831377340a137d58bed0f))
* **package:** aurelia-view-manager should use npm to install ([fce81a2f](https://github.com/SpoonX/aurelia-form/commit/fce81a2f1edb3563f71af9edb4b3f3ff084c7d69))
* **project:**
  * content replaced with slot element ([64a93a9c](https://github.com/SpoonX/aurelia-form/commit/64a93a9cc48b44af4937635df9354945aeaafaf4))
  * has missing aurelia-view-manager dependency ([49c002ee](https://github.com/SpoonX/aurelia-form/commit/49c002ee418dfde8d4f26f5f15a0df07d4ad3143))
* **schema-form:** no fieldset surrounding the form-fields ([0b35eca0](https://github.com/SpoonX/aurelia-form/commit/0b35eca0062afaf4e15514833e27bd036865f52d))
* **view:** name of aurelia-view changed to aurelia-view-manager ([eeb9697c](https://github.com/SpoonX/aurelia-form/commit/eeb9697cb8313e6a7c677d95bd9adae2bbba48cf))


#### Features

* **Form:** the form class which makes writing form a bit easier ([71b5b869](https://github.com/SpoonX/aurelia-form/commit/71b5b869566ad1561d328d3195d43c7f9de53639))
* **actions:** define action buttons in schema ([f205d9c3](https://github.com/SpoonX/aurelia-form/commit/f205d9c3cf321e01568a5335e42fa6ef25b91a08))
* **aliases:**
  * added alias nested = fieldset ([e72c4d3b](https://github.com/SpoonX/aurelia-form/commit/e72c4d3b6b2d5f5aba3bc96eb3f928be6377b1a1))
  * configure aliases to register aliases for a type ([8ee1dda7](https://github.com/SpoonX/aurelia-form/commit/8ee1dda7ed7fffe2b179e7ca1eb520eb6a5f49be))
* **bootstrap:**
  * setting buttons' button attributes ([ef35c7ed](https://github.com/SpoonX/aurelia-form/commit/ef35c7ed85d3940c8e4ad84704735712dfd00085))
  * the collection custom component ([9ac7f579](https://github.com/SpoonX/aurelia-form/commit/9ac7f5795abcaa2fcef88fee478eb98c196d2342))
* **buttons:** added alias buttons for `actions` type ([c88f5a28](https://github.com/SpoonX/aurelia-form/commit/c88f5a282d1a1a4db825d03b9c6b10724f801cd8))
* **component:**
  * show warning when component not defined ([272d93c0](https://github.com/SpoonX/aurelia-form/commit/272d93c0f1d21f079944b5dab327491dc3c04064))
  * default the type to "text" when not a valid type ([81274051](https://github.com/SpoonX/aurelia-form/commit/812740511ebb4960f523231ccbb8bb32a6c2e2c9))
* **fields:** show warning when model is undefined ([714c3722](https://github.com/SpoonX/aurelia-form/commit/714c3722cc04969fec96abda256bc54b281c2070))
* **fieldset:** nested schemas fieldset element enables the rendering of nested models/entities ([5d7733a2](https://github.com/SpoonX/aurelia-form/commit/5d7733a24f939e72981a64bff4bf57cce8517b3d))
* **form:**
  * isValid property on Form ([acf7ee0f](https://github.com/SpoonX/aurelia-form/commit/acf7ee0f002bc224d52241df144cdb6ffb0a16b1))
  * convenience class Form rewrite ([4aa75417](https://github.com/SpoonX/aurelia-form/commit/4aa75417887d908b11f48f0e1ed66857ce8b1f60))
* **message:** messages rendered in form-group ([2cb7214c](https://github.com/SpoonX/aurelia-form/commit/2cb7214c312f91ab5c7fc20ac9ccbf2e07947eaa))
* **orm:** function for generating schema from entity ([dd81d9b3](https://github.com/SpoonX/aurelia-form/commit/dd81d9b35dae07fd12989501a1f6e469260b80a2))
* **view:** let viewManager determine locations of templates ([185e98aa](https://github.com/SpoonX/aurelia-form/commit/185e98aaebfc707d520bcc5a1ee634ce1adc419a))


### 0.1.2 (2016-06-06)


#### Bug Fixes

* **bootstrap:** button group for actions element ([d517d283](https://github.com/SpoonX/aurelia-form/commit/d517d283cd5492bc5bf74674c4b7bfa6badbf1a6))
* **dependencies:** i18n as a hard dependency ([9858b963](https://github.com/SpoonX/aurelia-form/commit/9858b963520102b5303754af8e65ac47c401d815))
* **field:** do not bind model to custom element ([b2609823](https://github.com/SpoonX/aurelia-form/commit/b2609823ec9c9cbec4970a7001b98ab00b45a278))
* **form:** typo fix ([69abddbd](https://github.com/SpoonX/aurelia-form/commit/69abddbd9aab78c9dfce1178ec14a024524e0bb4))
* **i18n:** use attribute to enable soft dependency on i18n ([cd9a7098](https://github.com/SpoonX/aurelia-form/commit/cd9a7098b59316e9e1e181fc7c549fc8b7ab9c2c))
* **labels:** move the labels to the framework components ([9bf0deef](https://github.com/SpoonX/aurelia-form/commit/9bf0deef239a5b6ee3c62606ca3f49f0d7695f9c))
* **naming:** schema to attribute and name to key ([b2987c9d](https://github.com/SpoonX/aurelia-form/commit/b2987c9d0b0692eed29831377340a137d58bed0f))
* **view:** name of aurelia-view changed to aurelia-view-manager ([eeb9697c](https://github.com/SpoonX/aurelia-form/commit/eeb9697cb8313e6a7c677d95bd9adae2bbba48cf))


#### Features

* **actions:** define action buttons in schema ([f205d9c3](https://github.com/SpoonX/aurelia-form/commit/f205d9c3cf321e01568a5335e42fa6ef25b91a08))
* **aliases:**
  * added alias nested = fieldset ([e72c4d3b](https://github.com/SpoonX/aurelia-form/commit/e72c4d3b6b2d5f5aba3bc96eb3f928be6377b1a1))
  * configure aliases to register aliases for a type ([8ee1dda7](https://github.com/SpoonX/aurelia-form/commit/8ee1dda7ed7fffe2b179e7ca1eb520eb6a5f49be))
* **bootstrap:** the collection custom component ([9ac7f579](https://github.com/SpoonX/aurelia-form/commit/9ac7f5795abcaa2fcef88fee478eb98c196d2342))
* **component:**
  * show warning when component not defined ([272d93c0](https://github.com/SpoonX/aurelia-form/commit/272d93c0f1d21f079944b5dab327491dc3c04064))
  * default the type to "text" when not a valid type ([81274051](https://github.com/SpoonX/aurelia-form/commit/812740511ebb4960f523231ccbb8bb32a6c2e2c9))
* **fields:** show warning when model is undefined ([714c3722](https://github.com/SpoonX/aurelia-form/commit/714c3722cc04969fec96abda256bc54b281c2070))
* **fieldset:** nested schemas fieldset element enables the rendering of nested models/entities ([5d7733a2](https://github.com/SpoonX/aurelia-form/commit/5d7733a24f939e72981a64bff4bf57cce8517b3d))
* **orm:** function for generating schema from entity ([dd81d9b3](https://github.com/SpoonX/aurelia-form/commit/dd81d9b35dae07fd12989501a1f6e469260b80a2))
* **view:** let viewManager determine locations of templates ([185e98aa](https://github.com/SpoonX/aurelia-form/commit/185e98aaebfc707d520bcc5a1ee634ce1adc419a))


### 0.0.2 (2015-12-07)
* Updated to work with new orm usage
