order.FireOrderProcessor = function(weaponFireFactory, shipService, gameState){
  this._weaponFireFactory = weaponFireFactory;
  this._shipService = shipService;
  this._gameState = gameState;
}

order.FireOrderProcessor.prototype.process = function(game, player, timeline, timelineEntry){
  var fireOrder = model.weapon.FireOrder.deserialize(timelineEntry.payload);
  var turn = this._gameState.getTurn();
  var ship = this._shipService.getShipById(fireOrder.getShooterId());

  if ( ! ship.isOwnedBy(player.id)){
    throw new Error("Trying to give a fire order ship owned by another player")
  }

  if ( ! ship.ownsTimeline(timeline)){
    throw new Error("Trying to persist a fire order on wrong timeline");
  }

  if ( fireOrder.getTurn() !== turn){
    throw new Error("Trying to give a fire order at some other than current turn");
  }

  this._weaponFireFactory.getWeaponFireFromFireOrder(fireOrder);
};
