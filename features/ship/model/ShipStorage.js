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


model.ShipStorage = function ShipStorage(gameid, movementFactory, timelineFactory)
{
    this.movementFactory = movementFactory;
    this.timelineFactory = timelineFactory;
    this.gameid = gameid;
};

model.ShipStorage.prototype.addShip = function(ship)
{
    ShipsInGameCollection.insert({gameid: this.gameid, ship: ship.serialize()});
};

model.ShipStorage.prototype.getShipsInGame = function()
{
    var self = this;
    var ships = [];
    var shipsDoc = ShipsInGameCollection.find({gameid: this.gameid});
    shipsDoc.forEach(function(doc){
        console.log(doc);
        ships.push(self.createShipFromDoc(doc._id, doc.ship));
    });

    return ships;
};


model.ShipStorage.prototype.createShipFromDoc = function(id, shipdoc)
{
    var shipDesignDoc = shipdoc.shipDesign;
    shipDesignDoc.hullLayout = HullLayouts.findOne({'_id': shipDesignDoc.hullLayoutId})

    if ( ! shipDesignDoc.hullLayout)
        throw Error("Failed to find hulllayout for ship in game");

    shipDesignDoc.modules = shipDesignDoc.modules.map(
        function(moduleDetails)
        {
            var module = ModuleLayouts.findOne(
                {'_id': moduleDetails.module});

            module.setPosition(moduleDetails.position);
            module.setDirection(moduleDetails.direction);
            module.setTimeline(this.timelineFactory.getTimeline(moduleDetails.timelineId));

            return module;
        }, this);

    var shipDesign = new model.ShipDesignInGame(shipDesignDoc);

    return new model.ShipInGame({
        _id: id,
        controller: shipdoc.controller,
        shipDesign: shipDesign,
        movement: this.movementFactory.createMovement(shipdoc.movement)
    });
};

