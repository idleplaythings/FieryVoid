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

model.ShipStorage.prototype.addShipToGame = function(ship, gameid)
{
    console.log("add ship", ship, gameid);
    ShipsInGameCollection.insert({gameid: gameid, ship: ship.serialize()});
};

model.ShipStorage.prototype.getShipsInGame = function(gameid)
{
    var self = this;
    var ships = [];
    var shipsDoc = ShipsInGameCollection.find({gameid: gameid});
    shipsDoc.forEach(function(doc){
        console.log(doc);
        ships.push(self.createShipFromDoc(doc._id, doc.ship));
    });

    console.log(shipsDoc);
    return ships;
};

model.ShipStorage.prototype.createShipFromDoc = function(id, shipdoc)
{
    var shipDesign = this.shipDesignStorage.createShipDesign(shipdoc.shipDesign);
    if ( ! shipDesign)
        throw Error("Unable to construct ship design for ship");

    return new model.ShipInGame({
        _id: id,
        controller: shipdoc.controller,
        shipDesign: shipDesign,
        movement: new model.Movement(this.timelineFactory.getTimeline(shipdoc.movement))
    });
};

