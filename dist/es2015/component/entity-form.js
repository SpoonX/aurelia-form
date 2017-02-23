var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

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

import { customElement, bindable, computedFrom } from 'aurelia-framework';
import { resolvedView } from 'aurelia-view-manager';
import { Metadata } from '../metadata';

export let EntityForm = (_dec = resolvedView('spoonx/form', 'entity-form'), _dec2 = customElement('entity-form'), _dec3 = computedFrom('entity'), _dec(_class = _dec2(_class = (_class2 = class EntityForm {
  constructor() {
    _initDefineProp(this, 'entity', _descriptor, this);

    _initDefineProp(this, 'behavior', _descriptor2, this);

    _initDefineProp(this, 'classes', _descriptor3, this);

    _initDefineProp(this, 'skip', _descriptor4, this);

    _initDefineProp(this, 'validated', _descriptor5, this);

    _initDefineProp(this, 'buttonOptions', _descriptor6, this);

    _initDefineProp(this, 'buttonLabel', _descriptor7, this);

    _initDefineProp(this, 'buttonEnabled', _descriptor8, this);
  }

  get elements() {
    let entityMeta = {};

    if (typeof this.entity.getMeta === 'function') {
      entityMeta = this.entity.getMeta().metadata;
    }

    let types = entityMeta.types || {};
    let associations = entityMeta.associations || {};
    let fields = Metadata.forTarget(this.entity).fetch('fields', {});

    return Object.keys(this.entity).map(name => {
      let field = fields[name] || {};
      let association = associations[name];
      let options = field.options || {};
      let element = types[name] || 'input';

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
    }).sort((left, right) => {
      let leftPosition = left.meta.position || 0;
      let rightPosition = right.meta.position || 0;

      if (leftPosition < rightPosition) {
        return -1;
      }

      if (leftPosition > rightPosition) {
        return 1;
      }

      return 0;
    });
  }

  isVisible(fieldName) {
    return this.skip.indexOf(fieldName) === -1;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'entity', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'behavior', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'classes', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'skip', [bindable], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'validated', [bindable], {
  enumerable: true,
  initializer: function () {
    return true;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'buttonOptions', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'buttonLabel', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'buttonEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'elements', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'elements'), _class2.prototype)), _class2)) || _class) || _class);