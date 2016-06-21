define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var FormGroup = (function () {
    var _instanceInitializers = {};

    function FormGroup() {
      _classCallCheck(this, FormGroup);

      _defineDecoratedPropertyDescriptor(this, 'element', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'message', _instanceInitializers);
    }

    _createDecoratedClass(FormGroup, [{
      key: 'element',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'message',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'showsLabel',
      decorators: [(0, _aureliaFramework.computedFrom)('element')],
      get: function get() {
        return this.element.label !== false;
      }
    }, {
      key: 'showsMessage',
      decorators: [(0, _aureliaFramework.computedFrom)('message')],
      get: function get() {
        return !!this.message;
      }
    }, {
      key: 'labelText',
      decorators: [(0, _aureliaFramework.computedFrom)('element')],
      get: function get() {
        return this.element.label || this.element.key;
      }
    }], null, _instanceInitializers);

    return FormGroup;
  })();

  exports.FormGroup = FormGroup;
});