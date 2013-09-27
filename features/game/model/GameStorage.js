model.GameStorage = function GameStorage()
{
};

model.GameStorage.prototype.insert = function(game)
{
    Games.insert(game);
};

model.GameStorage.prototype.getGame = function(gameId)
{
    var gameDoc = Games.findOne({_id: gameId});
    console.log(gameDoc)
    var game = new model[gameDoc.type]();
    return game.load(gameDoc);
};

model.GameStorage.prototype.updatePlayerOrderTime = function(gameid, userid, time)
{
    Games.update(
        {$and: [{'_id': gameid}, {'players.id': userid}]},
        {$set: {'players.$.orderTime': time}});
};

model.GameStorage.prototype.updateCurrentGameTime = function(gameid, time)
{
    Games.update(
        {'_id': gameid},
        {$set: {currentGameTime: time}});
};
