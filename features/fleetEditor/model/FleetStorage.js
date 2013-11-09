model.FleetStorage = function FleetStorage(shipStorage, timelineFactory)
{
	this.timelineFactory = timelineFactory;
    this.shipStorage = shipStorage;
};

model.FleetStorage.prototype.createAndInsertEmptyFleetForMe = function()
{
    var userId = Meteor.userId();
		
	if ( ! userId)
		throw new Meteor.Error(
			400, "You must be logged in to add a fleet");
	
	var fleet = new model.Fleet(
		{owner: userId},
		this.timelineFactory.getTimeline(),
		this,
		this.shipStorage
	);
	return this.insert(fleet);
};

model.FleetStorage.prototype.insert = function(fleet)
{
    var id = Fleets.insert(fleet.serialize());
    fleet._id = id;
    return fleet;
};

model.FleetStorage.prototype.getFleet = function(fleetId)
{
	console.log("getting fleet id:", fleetId);
	var doc = Fleets.findOne({_id: fleetId});
	if ( ! doc)
		return null;
		
	doc.ships = this.getShipsInFleet(doc._id);
		
	return new model.Fleet(
		doc,
		this.timelineFactory.getTimeline(doc.timeline),
		this,
		this.shipStorage
	);
};

model.FleetStorage.prototype.getFleetsInGame = function(gameId)
{
	console.log("getting fleets in game", gameId);
	var fleets = [];
	var self = this;
	Fleets.find({currentGame: gameId}).forEach(function(doc){
		console.log("fleet in game", doc);
		doc.ships = self.getShipsInFleet(doc._id);
		console.log(doc.ships);
		fleets.push(new model.Fleet(
			doc,
			self.timelineFactory.getTimeline(doc.timeline),
			self,
			self.shipStorage
		));
	});

	return fleets;
};

model.FleetStorage.prototype.addFleetToGame = function(fleetId, gameId)
{
    Fleets.update({_id: fleetId}, {$set: {currentGame: gameId}});
    this.getShipsInFleet(fleetId).forEach(function(ship){
		this.shipStorage.addShipToGame(ship._id, gameId);
	}, this);
};

model.FleetStorage.prototype.addShipToFleet = function(fleet, ship)
{
    this.shipStorage.addShipToFleet(fleet._id, ship);
};

model.FleetStorage.prototype.removeShipFromFleet = function(fleet, ship)
{
    this.shipStorage.removeShipFromFleet(fleet._id, ship);
};

model.FleetStorage.prototype.getShipsInFleet = function(fleetId)
{
	return this.shipStorage.getShipsInFleet(fleetId);
};

model.FleetStorage.prototype.getReactiveShipsInFleet = 
	function(fleet, callback)
{
    var self = this;
    return Deps.autorun(function(){
        var ships = self.getShipsInFleet(fleet._id);
        callback(ships);
    });
};
