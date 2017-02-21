define(['exports', 'aurelia-framework', 'aurelia-view-manager'], function (exports, _aureliaFramework, _aureliaViewManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FormSelect = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

  var FormSelect = exports.FormSelect = (_dec = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'form-select'), _dec2 = (0, _aureliaFramework.customElement)('form-select'), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec4 = (0, _aureliaFramework.computedFrom)('selectOptions', 'optionLabel'), _dec(_class = _dec2(_class = (_class2 = function () {
    function FormSelect() {
      

      _initDefineProp(this, 'value', _descriptor, this);

      _initDefineProp(this, 'name', _descriptor2, this);

      _initDefineProp(this, 'classes', _descriptor3, this);

      _initDefineProp(this, 'readonly', _descriptor4, this);

      _initDefineProp(this, 'disabled', _descriptor5, this);

      _initDefineProp(this, 'multiple', _descriptor6, this);

      _initDefineProp(this, 'selectOptions', _descriptor7, this);

      _initDefineProp(this, 'options', _descriptor8, this);

      _initDefineProp(this, 'optionLabel', _descriptor9, this);

      _initDefineProp(this, 'autofocus', _descriptor10, this);

      _initDefineProp(this, 'required', _descriptor11, this);
    }

    FormSelect.prototype.getOptionLabel = function getOptionLabel(option) {
      if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && this.optionLabel) {
        return option[this.optionLabel] || option;
      }

      return option;
    };

    _createClass(FormSelect, [{
      key: 'optionLabels',
      get: function get() {
        var _this = this;

        return this.selectOptions.map(function (option) {
          if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && _this.optionLabel) {
            option.label = option[_this.optionLabel] || '';
          }

          return option;
        });
      }
    }]);

    return FormSelect;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'multiple', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'selectOptions', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return {};
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'optionLabel', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'name';
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'autofocus', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'optionLabels', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'optionLabels'), _class2.prototype)), _class2)) || _class) || _class);
});