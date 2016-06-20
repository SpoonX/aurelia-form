'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.entitySchema = entitySchema;

function entitySchema(entity) {
  var metadata = entity.getMeta();
  var types = metadata.fetch('types') || {};
  var associations = metadata.fetch('associations');
  var schema = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(entity)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (key === '__validationReporter__') {
        continue;
      }
      var element = {
        key: key,
        type: types[key]
      };

      if (associations[key] && associations[key].type === 'collection') {
        element.type = 'collection';
        element.schema = entitySchema(entityManager.getEntity(key));
      }

      schema.push(element);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return schema;
}