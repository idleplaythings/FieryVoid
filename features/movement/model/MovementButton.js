model.MovementButton = function MovementButton(contents, onClick, validationCallback, settings){
  
  model.Button.call(this, contents, onClick, settings);
  this._validationCallback = validationCallback;

}

model.MovementButton.prototype = Object.create(model.Button.prototype);

model.MovementButton.prototype.validate = function(ship, route, routeIndex){
  if ( ! this._validationCallback(ship, route, routeIndex)){
    this.get().addClass("error");
  }else{
    this.get().removeClass("error");
  }
};