model.InputModeSelect = function InputModeSelect(args)
{
	model.InputMode.call(this, args);
};

model.InputModeSelect.prototype = Object.create(model.InputMode.prototype);

model.InputModeSelect.prototype.onClick = function(event)
{
	var scenePosition = event.game;
	var ship = this.shipService.getShipOnScenePosition(scenePosition);

	if (ship)
	{
		this.shipService.selectShip(ship);
		event.stop();
	}
};

model.InputModeSelect.prototype.onMouseMove = function(event)
{
	var scenePosition = event.game;

	var shipAndTile = this.shipService.getShipAndTileOnScenePosition(scenePosition);
	var ship = shipAndTile ? shipAndTile.ship : null;
	var tile = shipAndTile ? shipAndTile.tile : null;
	var module = ship ? ship.shipDesign.getModuleInPosition(tile) : null;

	this.showMouseOverView(ship, module, tile);
};

model.InputModeSelect.prototype.activate = function(uiResolver)
{
	this.mouseClickCallback = uiResolver.registerListener('click', this.onClick.bind(this), 1);
    this.mouseMoveCallback = uiResolver.registerListener('mousemove', this.onMouseMove.bind(this), 1);
	jQuery("#gameContainer").addClass('selectCursor');
};

model.InputModeSelect.prototype.deactivate = function(uiResolver)
{
	uiResolver.unregisterListener('click', this.mouseClickCallback);
    uiResolver.unregisterListener('mousemove', this.mouseMoveCallback);
	jQuery("#gameContainer").removeClass('selectCursor');
};
