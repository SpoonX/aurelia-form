'use strict';

System.register(['aurelia-framework', 'aurelia-config', 'aurelia-view-manager', 'aurelia-pal', '../aurelia-form'], function (_export, _context) {
  "use strict";

  var bindable, customElement, children, inject, Configuration, resolvedView, DOM, logger, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, AureliaForm;

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
      children = _aureliaFramework.children;
      inject = _aureliaFramework.inject;
    }, function (_aureliaConfig) {
      Configuration = _aureliaConfig.Configuration;
    }, function (_aureliaViewManager) {
      resolvedView = _aureliaViewManager.resolvedView;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_aureliaForm) {
      logger = _aureliaForm.logger;
    }],
    execute: function () {
      _export('AureliaForm', AureliaForm = (_dec = resolvedView('spoonx/form', 'aurelia-form'), _dec2 = customElement('aurelia-form'), _dec3 = inject(Configuration.of('aurelia-form'), DOM.Element), _dec4 = children('form-group'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function AureliaForm(config, element) {
          

          _initDefineProp(this, 'behavior', _descriptor, this);

          _initDefineProp(this, 'classes', _descriptor2, this);

          _initDefineProp(this, 'entity', _descriptor3, this);

          _initDefineProp(this, 'validated', _descriptor4, this);

          _initDefineProp(this, 'buttonOptions', _descriptor5, this);

          _initDefineProp(this, 'buttonLabel', _descriptor6, this);

          _initDefineProp(this, 'buttonEnabled', _descriptor7, this);

          _initDefineProp(this, 'formGroups', _descriptor8, this);

          this.mapped = {};

          this.config = config;
          this.element = element;
          this.buttonEnabled = config.submitButton.enabled;
          this.buttonOptions = config.submitButton.options;
          this.buttonLabel = config.submitButton.label;
          this.behavior = config.defaultBehavior;

          var validation = config.validation;

          if (validation && validation.controller) {
            this.validationController = validation.controller.getController(this.mapped, validation.trigger);
            this.validateTrigger = validation.controller.getTriggers();
          }
        }

        AureliaForm.prototype.submit = function submit() {
          var _this = this;

          if (!this.validationController || !this.validated) {
            return;
          }

          if (!this.entity) {
            return logger.warn('Validation on forms requires a entity to validate.');
          }

          this.validate().then(function (result) {
            if (result.valid) {
              return _this.emit('valid');
            }

            _this.emit('invalid', result);
          });
        };

        AureliaForm.prototype.changed = function changed(trigger, event) {
          var controller = this.validationController;

          if (!controller || !this.validated) {
            return true;
          }

          var setTrigger = controller.validateTrigger;
          var triggers = this.validateTrigger;

          if (setTrigger === triggers.manual) {
            return true;
          }

          if (setTrigger < triggers.changeOrBlur && triggers[trigger] !== setTrigger) {
            return true;
          }

          this.validate(event.target.name);

          return true;
        };

        AureliaForm.prototype.validate = function validate(property) {
          if (this.mapped[property]) {
            return this.validationController.validate({ object: this.entity, propertyName: property });
          }
        };

        AureliaForm.prototype.emit = function emit(event) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this.element.dispatchEvent(DOM.createCustomEvent(event, { detail: data, bubbles: true }));
        };

        AureliaForm.prototype.formGroupsChanged = function formGroupsChanged() {
          this.updateFormGroups();
        };

        AureliaForm.prototype.behaviorChanged = function behaviorChanged(newValue) {
          if (!newValue) {
            this.behavior = this.config.defaultBehavior;

            return;
          }

          this.updateFormGroups();
        };

        AureliaForm.prototype.updateFormGroups = function updateFormGroups() {
          var _this2 = this;

          if (this.formGroups.length === 0) {
            return;
          }

          this.formGroups.forEach(function (group) {
            if (_this2.behavior) {
              group.behavior = _this2.behavior;
            }

            if (group.name) {
              _this2.mapped[group.name] = group;
            }
          });
        };

        return AureliaForm;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'behavior', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'entity', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'validated', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'buttonOptions', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'buttonLabel', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'buttonEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'formGroups', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class));

      _export('AureliaForm', AureliaForm);
    }
  };
});