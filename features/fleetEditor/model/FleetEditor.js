model.FleetEditor = function FleetEditor(
	fleetElement,
	shipEditorElement,
	fleet,
	shipStorage)
{
	this.shipStorage = shipStorage;
	this.fleet = fleet;
	
	this.shipsInFleetDisplay = 
		new model.ShipsInFleetDisplay(
			fleetElement,
			this.shipClicked.bind(this)
		);
	
	this.shipEditor = new model.ShipEditor(
		jQuery('.shipEditor'),
		jQuery('.shipapperance'),
		this.shipStorage
	);
	
	this.reactiveShipsInFleetHandle = fleet.getReactiveShips(
		this.shipsInFleetChanged.bind(this));
};

model.FleetEditor.prototype.shipsInFleetChanged = function(ships)
{
	this.fleet.ships = ships;
	this.shipsInFleetDisplay.display(ships);
};

model.FleetEditor.prototype.destroy = function()
{
	if (this.reactiveShipsInFleetHandle)
		this.reactiveShipsInFleetHandle.stop();
};

model.FleetEditor.prototype.shipClicked = function(ship)
{
	this.showShipEditor(ship._id);
};

model.FleetEditor.prototype.showShipEditor = function(shipId)
{
	this.shipEditor.setShip(shipId);
	jQuery('.shipEditor').show();
	jQuery('.shipapperance').show();
};

model.FleetEditor.prototype.addShipToFleet = function(shipDesignId)
{
	var shipId = new Meteor.Collection.ObjectID().toHexString();
	Meteor.call('addShipToFleet', shipDesignId, this.fleet._id, shipId);
};
