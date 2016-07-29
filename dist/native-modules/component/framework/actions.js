

export var Actions = function () {
  function Actions() {
    
  }

  Actions.prototype.activate = function activate(model) {
    this.value = model.value;
  };

  return Actions;
}();