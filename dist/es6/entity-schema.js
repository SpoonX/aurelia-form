/**
 * Takes an entity and uses it's metadata to generate a form-schema. Entities
 * behave like normal objects in the way one can get and set the values on
 * it's properties.
 *
 * @param {object} entity
 *
 * @returns {object[]} a schema consisting out of element objects
 */
export function entitySchema(entity) {
  let metadata     = entity.getMeta();
  let types        = metadata.fetch('types') || {};
  let associations = metadata.fetch('associations');
  let schema       = [];

  for (let key of Object.keys(entity)) {
    if (key === '__validationReporter__') {continue;} /* should be fixed in orm */
    let element = {
      key: key,
      type: types[key]
    };

    if (associations[key] && associations[key].type === 'collection') {
      element.type = 'collection';
      element.schema = entitySchema(entityManager.getEntity(key));
    }

    schema.push(element);
  }

  return schema;
}
