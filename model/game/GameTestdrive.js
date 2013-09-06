Meteor.methods({
    TestdriveStart: function (shipId) {
        console.log("testdrive start");

        var userid = Meteor.userId();

        var shipDesign = new model.ShipDesign().load(shipId);

        if ( ! shipDesign || shipDesign.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        var game = new model.GameTestdrive();
        game.setStartingConditions(shipDesign);
        return Games.insert(game.prepareForSave());
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
    this.name = displayName(Meteor.user()) + " testdrive " + shipDesign.name;
    var ship = new model.ShipInGame({
        _id: 1,
        controller: Meteor.userId(),
        shipDesign: shipDesign
    });

    ship.movement.addStartPosition(new model.MovementWaypoint({
        position: {x:0, y:0},
        velocity: {x:500, y:0},
        facing: 0
    }));

    this.ships.push(ship);

    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
};

model.GameTestdrive.prototype.getSelectedShip = function()
{
    return this.ships[0];
};