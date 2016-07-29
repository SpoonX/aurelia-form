var _dec, _class;



import { inject } from 'aurelia-dependency-injection';

export var AttributesCustomAttribute = (_dec = inject(Element), _dec(_class = function () {
  function AttributesCustomAttribute(element) {
    

    this.element = element;
  }

  AttributesCustomAttribute.prototype.valueChanged = function valueChanged() {
    $(this.element).attr(this.value || {});
  };

  return AttributesCustomAttribute;
}()) || _class);