Meteor.methods({
    submitTurn: function (gameid)
    {
        var userid = Meteor.userId();
        return new Turn(gameid).submitTurn(userid);
    }
});

Turn = function Turn(gameid)
{
    this._gameStorage = new model.GameStorage();
    this._game = this._gameStorage.getGame(gameid);
};

Turn.prototype.submitTurn = function(userid)
{
    var player = this._game.getPlayer(userid);
    var currentGametime = this._game.gameState.currentGametime;

    if ( ! player)
        throw new Error("Player not in game trying to submit turn");

    console.log(player);
    console.log(currentGametime);

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
    console.log('processTurn');

    var oldGametime = this._game.gameState.currentGametime;
    var newGametime = this._game.gameState.currentGametime + this.getTurnLength();

    var movementProcessor = new MovementProcessor();

    this._game.ships.forEach(function(ship){
        movementProcessor.processMovement(ship, oldGametime, newGametime);
    });

    this._game.timelineFactory.persistAll();
    this._game.gameState.currentGametime = newGametime;
    this._gameStorage.updateCurrentGameTime(
        this._game._id, newGametime);
};

Turn.prototype.getTurnLength = function()
{
    return 10000;
};