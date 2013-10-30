
model.GameTestdrive = Extend.register(GameTestdrive, "Game");

function GameTestdrive(dispatcher, hexgrid, shipStorage, fleetStorage, timelineFactory, args) {
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
	var fleet = this.fleetStorage.createAndInsertEmptyFleetForMe();
	var ship = this.shipStorage.createFromDesignId(shipDesign._id, Meteor.userId());
	
	ship.status.managers.movement.addStartPosition(new model.MovementWaypoint({
        time: 0,
        position: {x:0, y:0},
        velocity: {x:500, y:0},
        facing: 0
    }));
    
    console.log(fleet);
	fleet.addShip(ship);
	console.log("this.fleets", this.fleets, this.fleets.push);
	//this.fleets.push(fleet);
	fleet.addToGame(this);
};

GameTestdrive.prototype.getSelectedShip = function()
{
    return this.ships[0];
};
