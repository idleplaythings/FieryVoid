model.ClickStrategyWeapon = function ClickStrategyWeapon(weaponManager)
{
	this.weaponManager = weaponManager;
	this.weapons = [];
};

model.ClickStrategyWeapon.prototype = Object.create(model.ClickStrategy.prototype);

model.ClickStrategyWeapon.prototype.addWeapon = function(weapon)
{
	this.weapons = this.weapons.concat(weapon);
	return this;
};

model.ClickStrategyWeapon.prototype.clickShip = function(ship, position, event)
{
	this.weaponManager.target(ship, position, this.weapons);
	
	event.stop();
};

model.ClickStrategyWeapon.prototype.activate = function()
{
	jQuery("#gameContainer").addClass('weaponCursor');
};

model.ClickStrategyWeapon.prototype.deactivate = function()
{
	jQuery("#gameContainer").removeClass('weaponCursor');
};

