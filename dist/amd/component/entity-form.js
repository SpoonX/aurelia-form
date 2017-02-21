define(['exports', 'aurelia-framework', 'aurelia-view-manager', '../Metadata'], function (exports, _aureliaFramework, _aureliaViewManager, _Metadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EntityForm = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var EntityForm = exports.EntityForm = (_dec = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'entity-form'), _dec2 = (0, _aureliaFramework.customElement)('entity-form'), _dec3 = (0, _aureliaFramework.computedFrom)('entity'), _dec(_class = _dec2(_class = (_class2 = function () {
    function EntityForm() {
      

      _initDefineProp(this, 'entity', _descriptor, this);

      _initDefineProp(this, 'behavior', _descriptor2, this);

      _initDefineProp(this, 'skip', _descriptor3, this);
    }

    EntityForm.prototype.isVisible = function isVisible(fieldName) {
      return this.skip.indexOf(fieldName) === -1;
    };

    _createClass(EntityForm, [{
      key: 'elements',
      get: function get() {
        var types = this.entity.getMeta().metadata.types;
        var fields = _Metadata.Metadata.forTarget(this.entity).fetch('fields', {});

        return Object.keys(types).map(function (field) {
          return {
            element: types[field],
            field: field,
            meta: fields[field] || {}
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
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'skip', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _applyDecoratedDescriptor(_class2.prototype, 'elements', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'elements'), _class2.prototype)), _class2)) || _class) || _class);
});