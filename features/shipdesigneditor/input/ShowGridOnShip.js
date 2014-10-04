model.inputAction.ShowGridOnShip = function ShowGridOnShip(shipContainer){
  this._shipContainer = shipContainer;
  this._shipContainer.onChange(this.onShipChange.bind(this));
};

model.inputAction.ShowGridOnShip.prototype.onActivation = function(event)
{
  var ship = this._shipContainer.get();

  if ( ! ship)
    return;

  console.log("showing grid")
  ship.getIcon().showGrid();
};

model.inputAction.ShowGridOnShip.prototype.onDeactivation = function(event)
{
  var ship = this._shipContainer.get();

  if ( ! ship)
    return;

  console.log("hiding grid")
  ship.getIcon().hideGrid();
};

model.inputAction.ShowGridOnShip.prototype.onShipChange = function(event)
{
  console.log("ship changed", event.payload);
  var ship = event.payload;

  if ( ! ship)
    return;

  console.log("showing grid");
  ship.getIcon().showGrid();
};