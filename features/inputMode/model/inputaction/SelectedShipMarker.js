model.inputAction.SelectedShipMarker = function SelectedShipMarker(dispatcher, selectedShip)
{
	this._dispatcher = dispatcher;
	this._selectedShip = selectedShip;

	this._dispatcher.attach('ShipSelectedEvent', this.onShipSelected.bind(this));
	this._dispatcher.attach('ShipDeselectedEvent', this.onShipDeselected.bind(this));
}

model.inputAction.SelectedShipMarker.prototype.onShipSelected = function(event)
{
	event.ship.getIcon().select();
};

model.inputAction.SelectedShipMarker.prototype.onShipDeselected = function(event)
{
	event.ship.getIcon().deselect();
};

model.inputAction.SelectedShipMarker.prototype.onActivation = function(event)
{
	var ship = this._selectedShip.getShip();
	if (ship)
		ship.getIcon().select();
};

model.inputAction.SelectedShipMarker.prototype.onDeactivation = function(event)
{
	var ship = this._selectedShip.getShip();
	if (ship)
		ship.getIcon().deselect();
};