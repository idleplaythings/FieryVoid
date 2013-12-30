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
				
		var shipStorage = dic.get('model.ShipStorage');
		
		if (shipStorage.getShip(shipId))
			throw new Meteor.Error(
				400, "Ship id collision while adding ship to fleet");
		
		var ship = shipStorage.createFromDesignId(shipDesignId, userId, shipId);
		
		if ( ! ship)
			throw new Meteor.Error(
				500, "Unable to construct ship with design id: '"+shipDesignId+"'");
		
		var fleetStorage = dic.get('model.FleetStorage');
		var fleet = fleetStorage.getFleet(fleetId);
		fleet.addShip(ship);
		dic.get('model.TimelineFactory').persistAll();
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
		
		if ( ! ship || ship.status.getOwner() != userId)
			throw new Meteor.Error(
				400, "Ship not found or not owned");
		
		ship.status.changeName(name);
		dic.get('model.TimelineFactory').persistAll();
	};
}
