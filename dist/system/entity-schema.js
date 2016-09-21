'use strict';

System.register(['extend'], function (_export, _context) {
  "use strict";

  var extend;
  function entitySchema(entity) {
    var metadata = entity.getMeta();
    var types = metadata.fetch('types') || {};
    var associations = metadata.fetch('associations');
    var data = metadata.fetch('data') || {};
    var schema = [];
    var entityManager = entity.getRepository().entityManager;

    var isAssociation = function isAssociation(key) {
      return Boolean(associations[key]);
    };

    var isCollectionAssociation = function isCollectionAssociation(key) {
      return associations[key].type === 'collection';
    };

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

      if (isAssociation(key)) {
        element.type = 'association';
        element.resource = associations[key].entity;
        element.property = 'name';
      }

      if (isAssociation(key) && isCollectionAssociation(key)) {
        element.multiple = true;
        element.schema = entitySchema(entityManager.getEntity(key));
      }

      element = extend(true, element, data[key] ? data[key].form || {} : {});

      schema.push(element);
    }

    return schema;
  }

  _export('entitySchema', entitySchema);

  return {
    setters: [function (_extend) {
      extend = _extend.default;
    }],
    execute: function () {}
  };
});