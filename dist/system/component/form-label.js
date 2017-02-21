'use strict';

System.register(['aurelia-framework', 'aurelia-view-manager'], function (_export, _context) {
  "use strict";

  var bindable, customElement, resolvedView, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, FormLabel;

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

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customElement = _aureliaFramework.customElement;
    }, function (_aureliaViewManager) {
      resolvedView = _aureliaViewManager.resolvedView;
    }],
    execute: function () {
      _export('FormLabel', FormLabel = (_dec = resolvedView('spoonx/form', 'form-label'), _dec2 = customElement('form-label'), _dec(_class = _dec2(_class = (_class2 = function FormLabel() {
        

        _initDefineProp(this, 'label', _descriptor, this);

        _initDefineProp(this, 'visible', _descriptor2, this);

        _initDefineProp(this, 'classes', _descriptor3, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('FormLabel', FormLabel);
    }
  };
});