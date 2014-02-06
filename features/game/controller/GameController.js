controller.GameController = function(gameStorage)
{
    this.StartGame = function(player1Id, player2Id)
    {
        var game = gameStorage.create();

        game.setState({ _id: new Meteor.Collection.ObjectID().toHexString() });

        var fleet1 = game.getRandomFleetForPlayer(player1Id);
        var fleet2 = game.getRandomFleetForPlayer(player2Id);

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
