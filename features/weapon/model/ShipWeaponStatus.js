model.weapon.ShipWeaponStatus = function(timeline){
  this._timeline = timeline;
};

model.weapon.ShipWeaponStatus.prototype.addFireOrder = function(fireOrder){
  var entry = this._getTimelineEntry(fireOrder);

  if (entry )
  {
    if (! entry.canUpdate())
    throw new Error("Trying to update fire order entry that cannot be updated");

    entry.update(fireOrder.serialize());
  }
  else
  {
    this._timeline.add('fireOrder', fireOrder.serialize());
  }
};

model.weapon.ShipWeaponStatus.prototype.getFireOrders = function()
{
  return this._timeline.filter(function(entry){
    return entry.name == 'fireOrder';
  }).map( function(entry) { 
    return model.weapon.FireOrder.deserialize(entry.payload);
  });
};

model.weapon.ShipWeaponStatus.prototype.getFireOrderByTurnAndWeaponId = function(turn, weaponId)
{
  return this.getFireOrders().filter(function(fireOrder){
    return fireOrder.getTurn === turn && fireOrder.getWeaponId === weaponId;
  }).pop();
};

model.weapon.ShipWeaponStatus.prototype._getTimelineEntry = function(fireOrder)
{
  return this._timeline.filter(function(entry){ 
    return entry.name == 'fireOrder' && 
      entry.payload.turn == fireOrder.getTurn() &&
      entry.payload.weaponId === fireOrder.getWeaponId();

  }, this).pop();
};
