model.inputAction.ShowShipStatusViewEditor = function ShowShipStatusViewEditor(editorShip, zooming, scrolling, shipStatusView)
{
  this._editorShip = editorShip;
  this._shipStatusView = shipStatusView;
  this._showing = false;
}

model.inputAction.ShowShipStatusViewEditor.prototype.onActivation = function(event, inputMode, inputState)
{
  this._showing = false;
  if ( ! inputState.get('hullVisible')){
    this._show();
  }

  inputState.listen('hullVisible', this._hullVisibilityChange.bind(this));
};

model.inputAction.ShowShipStatusViewEditor.prototype.onDeactivation = function(event)
{
    this._shipStatusView.hide();
};

model.inputAction.ShowShipStatusViewEditor.prototype._hullVisibilityChange = function(hullVisible)
{
  if (hullVisible == true )
    this._hide();
  else
    this._show();
};

model.inputAction.ShowShipStatusViewEditor.prototype._show = function(hullVisible)
{
  console.log("trying to show");
  if (this._showing)
    return;

  console.log("show");
  var ship = this._editorShip.get();
  var positionService = new model.ShipDesignPositionService(ship.shipDesign);
  this._shipStatusView.display(positionService, ship.getModules()).show();
  this._showing = true;
};

model.inputAction.ShowShipStatusViewEditor.prototype._hide = function(hullVisible)
{
  if (! this._showing)
    return;

  this._shipStatusView.hide();
  this._showing = false;
};
