model.WeaponFire = function WeaponFire(shooter, target, weapon, targetTile, turn)
{
	this._shooter = shooter;
	this._target = target;
	this._weapon = weapon;
	this._targetTile = targetTile;
	this._turn = turn;

	this._validate();
};

model.WeaponFire.prototype._validate = function()
{
	//TODO: make sure the weapon can fire, is present on the ship etc

	if (  ! this._shooter instanceof model.Ship)
		throw new Error("Shooter is not a ship");

	if (  ! this._target instanceof model.Ship)
		throw new Error("Target is not a ship");

	if (  ! this._weapon instanceof model.ModuleLayoutOnShip)
		throw new Error("Weapon is not a module on a ship");

	if (isNaN(parseInt(this._targetTile.x ,10)) || isNaN(parseInt(this._targetTile.y ,10)))
		throw new Error("Target tile is not a valid position");

	if ( ! new model.HitLocationService().isValidTarget(this._shooter, this._weapon, this._target, this._targetTile, this._turn))
		throw new Error("Target tile is not valid");
};

model.WeaponFire.prototype.getFireOrder = function()
{
	return new model.FireOrder(
		this._turn, this._target._id, this._targetTile, this._weapon
	);
};