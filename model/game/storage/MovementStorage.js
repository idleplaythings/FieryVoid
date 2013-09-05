model.MovementStorage = function MovementStorage(gameid, gameState)
{
    this.gameState = gameState;
    this.gameid = gameid;
};

model.MovementStorage.prototype.storeFromClient = function(shipId, movement)
{
    Meteor.call(
        'StoreMovementRoute',
        this.gameid,
        this.shipId,
        movement.getWaypointsAfter(currentGametime),
        function(err, result){}
    );
};

model.MovementStorage.prototype.storeFromServer = function(movement)
{
    if ( ! Meteor.isServer())
        return;
};


Meteor.methods({
    StoreMovementRoute: function (gameId, shipId, waypoints) {
        console.log("insert waypoints");

        var game = getGame(gameId);

        if ( ! game)
            throw new Meteor.Error(403, "Game not found (trying to save movment waypoints)");

        var ship = game.getShipById(shipId);

        if (! ship || ship.owner !== Meteor.userId())
            throw new Meteor.Error(403, "Ship not found or not owned");

        Games.findOne({_id: gameId});
        var layout = new model.HullLayout({hullImgName:img});
        delete layout._id;
        return HullLayouts.insert(layout);
    }
});
