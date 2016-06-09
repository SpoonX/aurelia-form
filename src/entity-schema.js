/**
 * Takes an entity and uses it's metadata to generate a form-schema.
 *
 * @param {object} entity
 * @returns {object[]} the schema with the attributes.
 */
export function entitySchema(entity) {
  const keys  = Object.keys(entity);
  let typeMap = entity.getMeta().metadata.types;
  let schema  = [];

  for (let key of keys) {
    schema.push({
      key : key,
      type: typeMap[key]
    });
  }

  return schema;
}
