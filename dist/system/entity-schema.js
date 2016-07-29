'use strict';

System.register(['extend'], function (_export, _context) {
  "use strict";

  var extend;
  return {
    setters: [function (_extend) {
      extend = _extend.default;
    }],
    execute: function () {
      function entitySchema(entity) {
        var metadata = entity.getMeta();
        var types = metadata.fetch('types') || {};
        var associations = metadata.fetch('associations');
        var data = metadata.fetch('data') || {};
        var schema = [];
        var entityManager = entity.getRepository().entityManager;

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

          element = extend(true, element, data[key] ? data[key].form || {} : {});

          if (associations[key]) {
            element.key = key;
            element.resource = associations[key].entity;
          }

          if (associations[key] && associations[key].type === 'collection') {
            element.type = 'association';
            element.multiple = true;
            element.schema = entitySchema(entityManager.getEntity(key));
          }

          schema.push(element);
        }

        return schema;
      }

      _export('entitySchema', entitySchema);
    }
  };
});