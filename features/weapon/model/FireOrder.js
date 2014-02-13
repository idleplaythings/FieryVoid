model.FireOrder = function FireOrder(turn, targetId, targetTile, weapon)
{
	this.turn = turn;
	this.targetId = targetId;
	this.targetTile = targetTile;
	this.weapon = weapon;
}

model.FireOrder.prototype.serialize = function()
{
	return {
		weaponId: this.weapon.idOnShip,
		turn: this.turn,
		targetId: this.targetId,
		targetTile: this.targetTile
	};
}