'use strict';

exports.__esModule = true;
exports.EntityForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

var _aureliaFramework = require('aurelia-framework');

var _aureliaViewManager = require('aurelia-view-manager');

var _metadata = require('../metadata');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}



function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var EntityForm = exports.EntityForm = (_dec = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'entity-form'), _dec2 = (0, _aureliaFramework.customElement)('entity-form'), _dec3 = (0, _aureliaFramework.computedFrom)('entity'), _dec(_class = _dec2(_class = (_class2 = function () {
  function EntityForm() {
    

    _initDefineProp(this, 'entity', _descriptor, this);

    _initDefineProp(this, 'behavior', _descriptor2, this);

    _initDefineProp(this, 'classes', _descriptor3, this);

    _initDefineProp(this, 'skip', _descriptor4, this);

    _initDefineProp(this, 'validated', _descriptor5, this);

    _initDefineProp(this, 'buttonOptions', _descriptor6, this);

    _initDefineProp(this, 'buttonLabel', _descriptor7, this);

    _initDefineProp(this, 'buttonEnabled', _descriptor8, this);
  }

  EntityForm.prototype.isVisible = function isVisible(fieldName) {
    return this.skip.indexOf(fieldName) === -1;
  };

  _createClass(EntityForm, [{
    key: 'elements',
    get: function get() {
      var entityMeta = {};

      if (typeof this.entity.getMeta === 'function') {
        entityMeta = this.entity.getMeta().metadata;
      }

      var types = entityMeta.types || {};
      var associations = entityMeta.associations || {};
      var fields = _metadata.Metadata.forTarget(this.entity).fetch('fields', {});

      return Object.keys(this.entity).map(function (name) {
        var field = fields[name] || {};
        var association = associations[name];
        var options = field.options || {};
        var element = types[name] || 'input';

        if (association) {
          element = 'association';
          options.resource = association.entity;
          options.multiple = association.type === 'collection';
        }

        if (field.element) {
          element = field.element;
        }

        return {
          element: element,
          field: name,
          meta: field,
          options: options
        };
      }).sort(function (left, right) {
        var leftPosition = left.meta.position || 0;
        var rightPosition = right.meta.position || 0;

        if (leftPosition < rightPosition) {
          return -1;
        }

        if (leftPosition > rightPosition) {
          return 1;
        }

        return 0;
      });
    }
  }]);

  return EntityForm;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'entity', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'behavior', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'skip', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'validated', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'buttonOptions', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'buttonLabel', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'buttonEnabled', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'elements', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'elements'), _class2.prototype)), _class2)) || _class) || _class);