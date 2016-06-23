
export function entitySchema(entity) {
  let metadata = entity.getMeta();
  let types = metadata.fetch('types') || {};
  let associations = metadata.fetch('associations');
  let schema = [];

  for (let key of Object.keys(entity)) {
    if (key === '__validationReporter__') {
      continue;
    }
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