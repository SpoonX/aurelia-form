import extend from 'extend';
import frameworks from './components/frameworks';

export class Config {
  constructor() {
    let defaultFramework = 'bootstrap';

    extend(this, {
      translate: false,
      components: {}, //custom components equals an empty object
      framework: defaultFramework, //bootstrap as default
      frameworkComponents: frameworks[defaultFramework] || {} //consider throwing error when not giving a valid framework
    });
  }

  configure(configs) {
    return extend(this, configs);
  }
}
