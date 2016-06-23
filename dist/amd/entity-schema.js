define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.entitySchema = entitySchema;
  function entitySchema(entity) {
    var metadata = entity.getMeta();
    var types = metadata.fetch('types') || {};
    var associations = metadata.fetch('associations');
    var schema = [];

    for (var _iterator = Object.keys(entity), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var key = _ref;

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

    return schema;
  }
});