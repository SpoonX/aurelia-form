var _dec, _class;



import { inject } from 'aurelia-dependency-injection';

export var AttributesCustomAttribute = (_dec = inject(Element), _dec(_class = function () {
  function AttributesCustomAttribute(element) {
    

    this.element = element;
  }

  AttributesCustomAttribute.prototype.valueChanged = function valueChanged() {
    var _this = this;

    Object.keys(this.value).forEach(function (attribute) {
      _this.element.setAttribute(attribute, _this.value[attribute]);
    });
  };

  return AttributesCustomAttribute;
}()) || _class);