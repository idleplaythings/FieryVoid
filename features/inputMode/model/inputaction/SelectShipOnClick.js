model.inputAction.SelectShipOnClick = function SelectShipOnClick(shipService, selectedShip)
{
	this._shipService = shipService;
	this._selectedShip = selectedShip;
}

model.inputAction.SelectShipOnClick.prototype.onClick = function(event)
{
	var scenePosition = event.game;
	var ship = this._shipService.getShipOnScenePosition(scenePosition);

	if (ship)
	{
		this._selectedShip.selectShip(ship);
		event.stopped = true;
	}
};
