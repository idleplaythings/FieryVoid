controller.GameController = function(gameStorage)
{
    this.StartGame = function(player1Id, player2Id)
    {
        if (this.isSimulation)
            return;
        
        var game = gameStorage.create();

        game.setState({ _id: new Meteor.Collection.ObjectID().toHexString() });

        var fleetStorage = dic.get('model.FleetStorage');
        var shipStorage = dic.get('model.ShipStorage');

        var fleet1 = game.getRandomFleetForPlayer(player1Id, fleetStorage, shipStorage);
        var fleet2 = game.getRandomFleetForPlayer(player2Id, fleetStorage, shipStorage);

        if ( ! fleet1 || ! fleet2) {
            throw new Error("Fleets not found while creating a random game");
        }

        //game.setStartingConditions();
		fleet1.addToGame(game);
		fleet2.addToGame(game);

        game.addPlayer([player1Id, player2Id]);

        new model.GameStorage().insert(Games.insert(game.getInitialInsert()));
        dic.get('model.TimelineFactory').persistAll();

        return game;
    };
};
