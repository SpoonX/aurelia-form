define(['exports', 'aurelia-framework', 'aurelia-view-manager'], function (exports, _aureliaFramework, _aureliaViewManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FormGroup = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;

  var FormGroup = exports.FormGroup = (_dec = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'form-group'), _dec2 = (0, _aureliaFramework.customElement)('form-group'), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
    function FormGroup() {
      

      _initDefineProp(this, 'value', _descriptor, this);

      _initDefineProp(this, 'classes', _descriptor2, this);

      _initDefineProp(this, 'element', _descriptor3, this);

      _initDefineProp(this, 'placeholder', _descriptor4, this);

      _initDefineProp(this, 'state', _descriptor5, this);

      _initDefineProp(this, 'name', _descriptor6, this);

      _initDefineProp(this, 'label', _descriptor7, this);

      _initDefineProp(this, 'error', _descriptor8, this);

      _initDefineProp(this, 'message', _descriptor9, this);

      _initDefineProp(this, 'type', _descriptor10, this);

      _initDefineProp(this, 'behavior', _descriptor11, this);

      _initDefineProp(this, 'readonly', _descriptor12, this);

      _initDefineProp(this, 'disabled', _descriptor13, this);

      _initDefineProp(this, 'autofocus', _descriptor14, this);

      _initDefineProp(this, 'required', _descriptor15, this);

      _initDefineProp(this, 'multiple', _descriptor16, this);

      _initDefineProp(this, 'selectOptions', _descriptor17, this);

      _initDefineProp(this, 'optionLabel', _descriptor18, this);
    }

    FormGroup.prototype.is = function is(oneOf, then, source) {
      if (typeof oneOf === 'string') {
        oneOf = oneOf.split(',').map(function (one) {
          return one.trim();
        });
      }

      source = source || this.element;
      then = then || true;

      return oneOf.indexOf(source) > -1 ? then : false;
    };

    FormGroup.prototype.when = function when(conditional, value, otherwise) {
      return conditional ? value : otherwise || '';
    };

    return FormGroup;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'element', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'input';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'error', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'message', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'text';
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'behavior', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'autofocus', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'multiple', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'selectOptions', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'optionLabel', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});