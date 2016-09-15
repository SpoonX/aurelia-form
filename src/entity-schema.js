import extend from 'extend';

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
  let metadata      = entity.getMeta();
  let types         = metadata.fetch('types') || {};
  let associations  = metadata.fetch('associations');
  let data          = metadata.fetch('data') || {};
  let schema        = [];
  let entityManager = entity.getRepository().entityManager;

  let isAssociation = key => Boolean(associations[key]);

  let isCollectionAssociation = key => associations[key].type === 'collection';

  for (let key of Object.keys(entity)) {
    /* should be fixed in orm */
    if (key === '__validationReporter__') {
      continue;
    }

    let element = {
      key: key,
      type: types[key]
    };

    if (isAssociation(key)) {
      element.type     = 'association';
      element.resource = associations[key].entity;
      element.property = 'name';
    }

    if (isAssociation(key) && isCollectionAssociation(key)) {
      element.multiple = true;
      element.schema   = entitySchema(entityManager.getEntity(key));
    }

    element = extend(true, element, data[key] ? data[key].form || {} : {});

    schema.push(element);
  }

  return schema;
}
