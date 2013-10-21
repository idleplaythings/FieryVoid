controller.GameController = function(gameStorage)
{
    this.StartGame = function(player1Id, player2Id)
    {
        var game = gameStorage.create();

        game.setState({ _id: new Meteor.Collection.ObjectID().toHexString() });

        var ship1 = game.getRandomShipForPlayer(player1Id);
        var ship2 = game.getRandomShipForPlayer(player2Id);

        if (!ship1 || !ship2) {
            throw "Ships not found";
        }

        game.setStartingConditions();
        game.ships.push(ship1);
        game.ships.push(ship2);
        game.shipStorage.addShip(ship1);
        game.shipStorage.addShip(ship2);

        game.addPlayer([player1Id, player2Id]);

        new model.GameStorage().insert(Games.insert(game.getInitialInsert()));

        return game;
    };
};