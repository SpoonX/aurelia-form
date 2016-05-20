/**
 * returns contains the logic for getting the path of the component of a
 * specfic type
 *
 * @param {String} type
 * @returns {String} which represents the path of either a custom, framework or
 * default component
 */
export function component(config, schema) {
  let type = schema.type;

  return customComponent() || frameworkComponent() || defaultComponent();

  function defaultComponent() {
    type = 'text';
    return customComponent() || frameworkComponent();
  }

  function customComponent() {
    let comp = config.components[type]; // has custom component?
    return comp ? comp.replace('{{location}}', config.location) : false;
  }

  function frameworkComponent() {
    let comp = config.frameworkComponents[type];
    return comp ? `${frameworkDir(config.framework)}/${comp}` : false;
  }
}

function frameworkDir(framework) {
  return `./components/${framework}`;
}
