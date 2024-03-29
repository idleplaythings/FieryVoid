model.GameStorage = function GameStorage(gameFactory)
{
    this._gameFactory = gameFactory;
};

model.GameStorage.prototype.create = function()
{
    return this._gameFactory.create('model.server.Game');
}

model.GameStorage.prototype.insert = function(payload)
{
    Games.insert(payload);
};

model.GameStorage.prototype.getGame = function(gameId)
{
    console.log("getting game with id " + gameId);

    var context = Meteor.isClient ? 'client' : 'server'

    var gameDoc = Games.findOne({_id: gameId});

    var game = this._gameFactory.create('model.' + context + '.' + gameDoc.type);

    game.load(gameDoc);

    if (Meteor.isClient)
    {
        Deps.autorun(function() {
            var updated = Games.findOne({_id: gameId});
            game.updated(updated);
        });
    }

    return game;
};

model.GameStorage.prototype.updatePlayerTurn = function(gameid, userid, turn)
{
    Games.update(
        {$and: [{'_id': gameid}, {'players.id': userid}]},
        {$set: {'players.$.committedTurn': turn}});
};

model.GameStorage.prototype.updateTurn = function(gameid, turn)
{
    Games.update(
        {'_id': gameid},
        {$set: {currentGameTurn: turn}});
};