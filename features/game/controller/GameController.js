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

        game.addPlayer(player1Id);
        game.addPlayer(player2Id);

        new model.GameStorage().insert(Games.insert(game.getInitialInsert()));
        dic.get('model.TimelineFactory').persistAll();

        return game;
    };

    this.CommitTurn = function(gameId){

        if (this.isSimulation)
            return;

        if ( ! gameId)
            throw new Meteor.Error(400, "GameId is not defined");

        var game = gameStorage.getGame(gameId);
        var player = game.getPlayer(Meteor.userId());
        var currentTurn = game.gameState.getTurn();

        if ( ! player)
            throw new Meteor.Error(400, "Player is not in this game");

        if (player.committedTurn >= currentTurn)
            throw new Meteor.Error(400, "This player has already committed his turn");

        gameStorage.updatePlayerTurn(gameId, player.id, currentTurn);
        player.committedTurn = currentTurn;

        if (game.allPlayersReady()){
            dic.get("model.TurnProcessor").processTurn(game);
            dic.get('model.TimelineFactory').persistAll();
            gameStorage.updateTurn(gameId, currentTurn+1);
        }
    };
};
