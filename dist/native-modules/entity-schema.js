'use strict';

exports.__esModule = true;
exports.entitySchema = entitySchema;

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    element = (0, _extend2.default)(true, element, data[key] ? data[key].form || {} : {});

    schema.push(element);
  }

  return schema;
}