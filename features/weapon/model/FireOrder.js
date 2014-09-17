model.weapon.FireOrder = function FireOrder(turn, shooterId, targetId, targetTile, weaponId)
{
	this._turn = turn;
	this._shooterId = shooterId;
	this._targetId = targetId;
	this._targetTile = targetTile;
	this._weaponId = weaponId;
}

model.weapon.FireOrder.deserialize = function(serialized){
	return new model.weapon.FireOrder(
		serialized.turn,
		serialized.shooterId,
		serialized.targetId,
		serialized.targetTile,
		serialized.weaponId
	);
};

model.weapon.FireOrder.prototype.serialize = function()
{
	return {
		shooterId: this._shooterId,
		weaponId: this._weaponId,
		turn: this._turn,
		targetId: this._targetId,
		targetTile: this._targetTile
	};
};

model.weapon.FireOrder.prototype.getShooterId = function()
{
	return this._shooterId;
};

model.weapon.FireOrder.prototype.getTargetId = function()
{
	return this._targetId;
};

model.weapon.FireOrder.prototype.getTargetTile = function()
{
	return this._targetTile;
};

model.weapon.FireOrder.prototype.getTurn = function()
{
	return this._turn;
};

model.weapon.FireOrder.prototype.getWeaponId = function()
{
	return this._weaponId;
};