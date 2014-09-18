order.OrderProcessor = function(gameStorage, gameState, processorFactory, timelineStorage){
  this._gameStorage = gameStorage;
  this._gameState = gameState;
  this._processorFactory = processorFactory;
  this._timelineStorage = timelineStorage;
}

order.OrderProcessor.prototype.process = function(userId, gameId, timelinesAndEntries){
  var game = this._gameStorage.getGame(gameId);
  var player = game.getPlayer(userId);
  var turn = this._gameState.getTurn();

  canGiveOrdersInGame.call(this, game, player, turn);

  processOrders.call(this, game, player, timelinesAndEntries);
};

var canGiveOrdersInGame = function(game, player, turn){
  if ( ! player)
    throw new Error("Player not found");

  if (player.committedTurn >= turn)
    throw new Error("User '"+player.id+"' has already committed turn " + turn);
};

var processOrders = function(game, player, timelinesAndEntries){

  timelinesAndEntries.forEach(function(entry){
    var timeline = entry.timeline;
    var entries = entry.entries;

    processTimeline.call(this, game, player, timeline, entries);
  }, this);
};

var processTimeline = function(game, player, timeline, entries){
  entries.forEach(function(timelineEntry){
    var processor = this._processorFactory.getProcessor(timelineEntry);
    processor.process(game, player, timeline, timelineEntry);
    console.log("persisting");
    console.log(timelineEntry);
    this._timelineStorage.persist(timelineEntry);
  }, this);
};
