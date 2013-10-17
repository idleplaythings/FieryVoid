
model.GameTestdrive = Extend.register(GameTestdrive, "Game");

function GameTestdrive(dispatcher, args) {
    this.super.apply(this, arguments);
    this.type = "GameTestdrive";
}

GameTestdrive.prototype.setStartingConditions = function(shipDesign)
{
    this.name = displayName(Meteor.user()) + " testdriving " + shipDesign.name;
    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
};

GameTestdrive.prototype.addTestDriveShip = function(shipDesign)
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

GameTestdrive.prototype.getSelectedShip = function()
{
    return this.ships[0];
};