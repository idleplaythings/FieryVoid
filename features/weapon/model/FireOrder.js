model.FireOrder = function FireOrder(turn, shooter, target, targetTile, weapon)
{
	this.turn = turn;
	this.shooter = shooter;
	this.target = target;
	this.targetTile = targetTile;
	this.weapon = weapon;
}

model.FireOrder.prototype.serialize = function()
{
	return {
		weaponId: this.weapon.idOnShip,
		turn: this.turn,
		shooterId: this.shooter._id,
		targetId: this.target._id,
		targetTile: this.targetTile
	};
}