controller.FleetController = function FleetController()
{
    this.createFleet = function(){
		var fleetStorage = dic.get('model.FleetStorage');
		return fleetStorage.createAndInsertEmptyFleetForMe();
	};
	
	this.addShipToFleet = function(shipDesignId, fleetId, shipId)
	{
		var userId = Meteor.userId();
		
		if ( ! userId)
            throw new Meteor.Error(
				400, "You must be logged in to add a ship to fleet");
				
		var shipDesignStorage = dic.get('model.ShipDesignStorage');
		var design = shipDesignStorage.getShipDesign(shipDesignId);
		
		if ( ! design || design.owner != userId)
			throw new Meteor.Error(
				400, "Ship design not found or not owned");
				
		var shipStorage = dic.get('model.ShipStorage');
		
		if (shipStorage.getShip(shipId))
			throw new Meteor.Error(
				400, "Ship id collision while adding ship to fleet");
		
		var ship = shipStorage.createFromDesign(design, userId, shipId);
		
		var fleetStorage = dic.get('model.FleetStorage');
		var fleet = fleetStorage.getFleet(fleetId);
		console.log(ship);
		fleet.addShip(ship);
	};
	
	this.renameShip = function(shipId, name)
	{
		var userId = Meteor.userId();
		
		if ( ! userId)
            throw new Meteor.Error(
				400, "You must be logged in to name a ship");
	
		console.log(shipId);
		var shipStorage = dic.get('model.ShipStorage');
		var ship = shipStorage.getShip(shipId);
		
		if ( ! ship || ship.owner != userId)
			throw new Meteor.Error(
				400, "Ship not found or not owned");
		
		shipStorage.renameShip(shipId, name);
	};
}
