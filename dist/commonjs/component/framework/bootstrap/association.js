'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssociationElement = undefined;

var _association = require('../association');



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssociationElement = exports.AssociationElement = function (_Association) {
  _inherits(AssociationElement, _Association);

  function AssociationElement() {
    

    return _possibleConstructorReturn(this, _Association.apply(this, arguments));
  }

  return AssociationElement;
}(_association.Association);