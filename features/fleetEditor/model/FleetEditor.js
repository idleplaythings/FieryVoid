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
			jQuery('.fleet', fleetElement),
			this.shipClicked.bind(this)
		);
	
	this.shipEditor = null;
	
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

model.FleetEditor.prototype.showShipEditor = function(ship)
{
	jQuery('.fleet, .shiplist').hide();
	
	this.shipEditor = new model.ShipEditor(
		ship,
		jQuery('.shipEditor').show(),
		jQuery('.shipapperance').show(),
		this.shipStorage
	);
};

model.FleetEditor.prototype.addShipToFleet = function(shipDesignId)
{
	var shipId = new Meteor.Collection.ObjectID().toHexString();
	Meteor.call('addShipToFleet', shipDesignId, this.fleet._id, shipId);
};
