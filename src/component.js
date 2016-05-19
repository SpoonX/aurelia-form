/**
 * returns contains the logic for getting the path of the component of a
 * specfic type
 *
 * @param {String} type
 * @returns {String} which represents the path of either a custom, framework or
 * default component
 */
export function component(config, type){

  var type = type;

  return customComponent() || frameworkComponent() || defaultComponent();

  function defaultComponent() {
    type = 'text';
    return customComponent() || frameworkComponent();
  }

  function customComponent() {
    let component = config.components[type]; // has custom component?
    return component ? component.replace('{{location}}', config.location) : false;
  }

  function frameworkComponent() {
    let components = config.frameworkComponents[type];
    return components ? `${frameworkDir(config.framework)}/${components}` : false;
  }
}

function frameworkDir(framework) {
  return `./components/${framework}`;
}
