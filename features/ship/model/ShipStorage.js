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

model.ShipStorage.prototype.renameShip = function(id, name)
{
	console.log("trying to set", id, name);
    ShipsInGameCollection.update({_id: id}, {$set: {name: name}});
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

model.ShipStorage.prototype.createFromDesign = 
	function(shipDesign, owner, shipId)
{
	return new model.ShipInGame({
		_id: shipId,
		owner: owner,
        controller: owner,
        shipDesign: shipDesign,
        status: new model.ShipStatus(
			shipDesign.modules, this.timelineFactory.getTimeline())
    });
};

model.ShipStorage.prototype.createShipFromDoc = function(shipdoc)
{
	console.log(shipdoc);
	if ( ! shipdoc)
		return null;
		
    shipdoc.shipDesign = this.shipDesignStorage.createShipDesign(shipdoc.shipDesign);
    
    if ( ! shipdoc.shipDesign)
        throw Error("Unable to construct ship design for ship");
        
    shipdoc.status = new model.ShipStatus(
		shipdoc.shipDesign.modules,
		this.timelineFactory.getTimeline(shipdoc.shipStatus)
    );

    return new model.ShipInGame(shipdoc);
};

