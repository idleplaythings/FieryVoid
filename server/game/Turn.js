Meteor.methods({
    submitTurn: function (gameid)
    {
        var userid = Meteor.userId();
        var game = getGame(gameid);
        return new Turn(game).submitTurn(userid);
    }
});

Turn = function Turn(game)
{
    this._game = game;
    this._gameStorage = new model.GameStorage();
};

Turn.prototype.submitTurn = function(userid)
{
    var player = this._game.getPlayer(userid);
    var currentGametime = this._game.gameState.currentGametime;

    if ( ! player)
        throw new Error("Player not in game trying to submit turn");

    if (player.orderTime >= currentGametime)
        throw new Error("Player trying to submit turn again");

    player.orderTime = currentGametime;

    this._gameStorage.updatePlayerOrderTime(
        this._game._id, userid, player.orderTime);

    if (this.isAllSubmitted())
        this.processTurn();

    return true;
};

Turn.prototype.isAllSubmitted = function()
{
    var currentGametime = this._game.gameState.currentGametime;

    return this._game.players.every(function(player){
        return player.orderTime == currentGametime;
    }, this);
};

Turn.prototype.processTurn = function()
{
    this._game.gameState.currentGametime += this.getTurnLength();
};

Turn.prototype.getTurnLength = function()
{
    return 10000;
};