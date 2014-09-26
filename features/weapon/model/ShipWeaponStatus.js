model.weapon.ShipWeaponStatus = function(timeline){
  this._timeline = timeline;
};

model.weapon.ShipWeaponStatus.prototype.removeFireOrder = function(fireOrder){
  var entry = getTimelineEntry.call(this, fireOrder);

  if (! entry){
    throw new Error("Fire order timeline entry not found for remove");
  }

  if (! entry.canUpdate()){
    throw new Error("Trying to update fire order entry that cannot be updated");
  }

  entry.remove();
};

model.weapon.ShipWeaponStatus.prototype.addFireOrder = function(fireOrder){
  var entry = getTimelineEntry.call(this, fireOrder);

  if (entry ){
    throw new Error("Weapon already has a fire order entry for turn " + fireOrder.getTurn());
  }
 
  this._timeline.add('fireOrder', fireOrder.serialize());
};

model.weapon.ShipWeaponStatus.prototype.getFireOrders = function()
{
  return this._timeline.filter(function(entry){
    return entry.name == 'fireOrder';
  }).map( function(entry) { 
    return model.weapon.FireOrder.deserialize(entry.payload);
  });
};

model.weapon.ShipWeaponStatus.prototype.getFireOrdersForTurn = function(turn)
{
  return this.getFireOrders().filter(function(fireOrder){
    return fireOrder.getTurn() == turn;
  });
};

model.weapon.ShipWeaponStatus.prototype.hasFireOrder = function(turn, weaponId)
{
  var order = this.getFireOrderByTurnAndWeaponId(turn, weaponId);
  console.log("hasFireOrder", weaponId, turn, order);
  return Boolean(order);
};

model.weapon.ShipWeaponStatus.prototype.getFireOrderByTurnAndWeaponId = function(turn, weaponId)
{
  return this.getFireOrders().filter(function(fireOrder){
    return fireOrder.getTurn() === turn && fireOrder.getWeaponId() == weaponId;
  }).pop();
};

var getTimelineEntry = function(fireOrder)
{
  return this._timeline.filter(function(entry){ 
    return entry.name == 'fireOrder' && 
      entry.payload.turn == fireOrder.getTurn() &&
      entry.payload.weaponId == fireOrder.getWeaponId();

  }, this).pop();
};