/**
 * return the location of the component to be used for that type. If custom
 * components are defined, the path to them are returned instead of the
 * framework component.
 *
 * @param {object} config
 * @param {object} attribute
 * @returns {string} which represents the path of either a custom, framework or
 * default component
 */
export function component(config, attribute) {
  let type = attribute.type;

  return customComponent() || frameworkComponent() || console.warn(`type ${type} does not have a component registered for it.`);

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
  return `./frameworks/${framework}`;
}