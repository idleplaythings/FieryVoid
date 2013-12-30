ShipsInGameCollection = new Meteor.Collection("ShipsInGameCollection");

ShipsInGameCollection.allow({
    insert: function () {
        return false;
    },

    update: function () {
        return false;
    },

    remove: function () {
        return false;
    }
});


model.ShipStorage = function ShipStorage(timelineFactory, shipDesignStorage)
{
    this.timelineFactory = timelineFactory;
    this.shipDesignStorage = shipDesignStorage;
};

model.ShipStorage.prototype.getShip = function(id)
{
     var doc = ShipsInGameCollection.findOne({_id: id});
     return this.createShipFromDoc(doc);
};

model.ShipStorage.prototype.getReactiveShip = function(id, callback)
{
	var self = this;
	return Deps.autorun(function(){
		console.log("ship id", id);
		var doc = ShipsInGameCollection.findOne({_id: id});
		callback(self.createShipFromDoc(doc));
	});
};

model.ShipStorage.prototype.addShipToGame = function(shipId, gameId)
{	
    ShipsInGameCollection.update({_id: shipId}, {$set: {gameId: gameId}});
};

model.ShipStorage.prototype.addShipToFleet = function(ship, fleetId)
{	
	ship.fleetId = fleetId;
	var doc = ship.serialize();
	console.log(doc);
    ShipsInGameCollection.insert(ship.serialize());
};

model.ShipStorage.prototype.getShipsInFleet = function(fleetId)
{
	console.log("getting ships in fleet", fleetId);
    var self = this;
    var ships = [];
    var shipsDoc = ShipsInGameCollection.find({fleetId: fleetId});
    shipsDoc.forEach(function(doc){
		console.log("found ship in fleet", fleetId);
        ships.push(self.createShipFromDoc(doc));
    });

    return ships;
};

model.ShipStorage.prototype.createFromDesignId = 
	function(shipDesignId, owner, shipId)
{
	var ship = new model.Ship();
	var shipDesign = this.shipDesignStorage.getShipDesign(shipDesignId, ship);
	var timeline = this.timelineFactory.getTimeline();
	var status = new model.ShipStatus(shipId, shipDesign.modules, timeline);
		
		
	status.setOwner(owner);
		
	return ship.setState({
		_id: shipId,
        shipDesign: shipDesign,
        status: status
		},
		timeline
	);
};

model.ShipStorage.prototype.createShipFromDoc = function(shipdoc)
{
	console.log(shipdoc);
	if ( ! shipdoc)
		return null;
		
	var ship = new model.Ship();
    shipdoc.shipDesign = this.shipDesignStorage.createShipDesign(shipdoc.shipDesign, ship);
    
    if ( ! shipdoc.shipDesign)
        throw Error("Unable to construct ship design for ship");
	
	var timeline = this.timelineFactory.getTimeline(shipdoc.timeline);
        
    shipdoc.status = new model.ShipStatus(
		ship,
		shipdoc.shipDesign.modules,
		timeline
    );

	console.log('shipTimeline', timeline);
	
	return ship.setState(shipdoc, timeline);
};

