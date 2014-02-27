model.SelectedShip = function SelectedShip(dispatcher)
{
	this._dispatcher = dispatcher;
	this._ship = null;
};

model.SelectedShip.prototype.getShip = function()
{
	return this._ship;
};

model.SelectedShip.prototype.selectShip = function(ship)
{
	this._ship = ship;
	this._dispatcher.dispatch({name: 'ShipSelectedEvent', ship:ship});
};