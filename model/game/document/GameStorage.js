Games = new Meteor.Collection("Games");

Games.allow({
    insert: function () {
        return false;
    },

    update: function () {
        return false;
    },

    remove: function () {
        return false;
    }
});

model.GameStorage = function GameStorage()
{
};

model.GameStorage.prototype.insert = function(payload)
{
    Games.insert(payload);
};

model.GameStorage.prototype.getGame = function(gameId)
{
    console.log("getting game with id " + gameId);
    var gameDoc = Games.findOne({_id: gameId});
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