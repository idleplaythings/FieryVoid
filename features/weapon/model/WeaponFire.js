model.weapon.WeaponFire = function WeaponFire(shooter, target, weapon, targetTile, turn, hitLocationService)
{
	this._shooter = shooter;
	this._target = target;
	this._weapon = weapon;
	this._targetTile = targetTile;
	this._turn = turn;
	this._hitLocationService = hitLocationService;

	validate.call(this);
};

model.weapon.WeaponFire.prototype.getShooter = function(){
	return this._shooter;
};

model.weapon.WeaponFire.prototype.getTarget = function(){
	return this._target;
};

model.weapon.WeaponFire.prototype.getWeapon = function(){
	return this._weapon;
};

model.weapon.WeaponFire.prototype.getTargetTile = function(){
	return this._targetTile;
};

model.weapon.WeaponFire.prototype.getTurn = function(){
	return this._turn;
};

model.weapon.WeaponFire.prototype.getFireOrder = function()
{
	return new model.weapon.FireOrder(
		this._turn, this._shooter._id, this._target._id, this._targetTile, this._weapon._id
	);
};

var validate = function()
{
	//TODO: make sure the weapon can fire, is present on the ship etc

	if ( ! (this._shooter instanceof model.Ship))
		throw new Error("Shooter is not a ship");

	if ( ! (this._target instanceof model.Ship))
		throw new Error("Target is not a ship");

	if ( ! (this._weapon instanceof model.Module))
		throw new Error("Weapon is not a module on a ship");

	if (isNaN(parseInt(this._targetTile.x ,10)) || isNaN(parseInt(this._targetTile.y ,10)))
		throw new Error("Target tile is not a valid position");

	if ( ! this._hitLocationService.isValidTarget(this._shooter, this._weapon, this._target, this._targetTile, this._turn))
		throw new Error("Target tile is not valid");
};