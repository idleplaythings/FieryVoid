model.ClickStrategyWeapon = function ClickStrategyWeapon(args)
{
	model.ClickStrategy.call(this, args);
	this.weaponManager = args.weaponManager;
	this.weapons = [];
	this.uiEventResolver = null;
};


model.ClickStrategyWeapon.prototype = Object.create(model.ClickStrategy.prototype);

model.ClickStrategyWeapon.prototype.addWeapon = function(weapon)
{
	this.weapons = this.weapons.concat(weapon);
	return this;
};

model.ClickStrategyWeapon.prototype.clickShip = function(ship, position, event)
{
	this.weaponManager.hideTarget(this.weapons, 'targeting');
	this.weaponManager.target(ship, position, this.weapons);
	this.remove();
	event.stop();
};

model.ClickStrategyWeapon.prototype.mouseOverShip = function(ship, position, event)
{
	this.weaponManager.hideTarget(this.weapons, 'targeting');
	
	if (! ship)
	{
		this.moduleView.display(null);
		this.shipView.display(null);
		return;
	}
	
	var module = ship.shipDesign.getModuleInPosition(position);
	this.weaponManager.showTarget(ship, position, this.weapons, 'targeting');

    if (this.zoom < 1)
    {
        this.showShipView(ship, position, module, event);
    }
    else
    {
		this.showModuleView(ship, position, module, event);
	}
};

model.ClickStrategyWeapon.prototype.activate = function(uiEventResolver)
{
	console.log("activate weapon", uiEventResolver);
	this.uiEventResolver = uiEventResolver;
	jQuery("#gameContainer").addClass('weaponCursor');
};

model.ClickStrategyWeapon.prototype.deactivate = function()
{
	console.log("deactivating weapon click strategy");
	jQuery("#gameContainer").removeClass('weaponCursor');
};

