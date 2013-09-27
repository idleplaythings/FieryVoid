Meteor.methods({
    TestdriveStart: function (shipId) {
        console.log("testdrive start");

        var userid = Meteor.userId();

        var shipDesign = new model.ShipDesignInGame().load(shipId);

        if ( ! shipDesign || shipDesign.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        var game = new model.GameTestdrive(
            {_id: new Meteor.Collection.ObjectID().toHexString()});
        game.setStartingConditions(shipDesign);
        game.addPlayer(userid);

        new model.GameStorage().insert(Games.insert(game.getInitialInsert()));
        game.addTestDriveShip(shipDesign);
        return game._id;
    }
});

model.GameTestdrive = function GameTestdrive(args)
{
    model.Game.call(this, args);
    this.type = "GameTestdrive";
};

model.GameTestdrive.prototype = Object.create(model.Game.prototype);

model.GameTestdrive.prototype.setStartingConditions = function(shipDesign)
{
    this.name = displayName(Meteor.user()) + " testdriving " + shipDesign.name;
    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
};

model.GameTestdrive.prototype.addTestDriveShip = function(shipDesign)
{
    var ship = new model.ShipInGame({
        _id: 1,
        controller: Meteor.userId(),
        shipDesign: shipDesign,
        movement: this.movementFactory.createMovement()
    });

    ship.createTimelines(this.timelineFactory);

    ship.movement.addStartPosition(new model.MovementWaypoint({
        time: 0,
        position: {x:0, y:0},
        velocity: {x:500, y:0},
        facing: 0
    }));

    this.ships.push(ship);
    this.shipStorage.addShip(ship);
};

model.GameTestdrive.prototype.getSelectedShip = function()
{
    return this.ships[0];
};