'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.entitySchema = entitySchema;

function entitySchema(entity) {
  var keys = Object.keys(entity);
  var typeMap = entity.getMeta().metadata.types;

  var schema = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      schema.push({
        key: key,
        type: typeMap[key] || 'string' });
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