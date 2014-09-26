order.TurnProcessor = function TurnProcessor(shipService, shipMovementHandler){
  this._shipService = shipService;
  this._shipMovementHandler = shipMovementHandler;
};

order.TurnProcessor.prototype.processTurn = function(game){
  var turn = game.gameState.getTurn();
  var nextTurn = turn+1;

  this._shipService.getShips().forEach(function(ship){
    this._shipMovementHandler.addDefaultRouteFor(ship, nextTurn);
  }, this);
};