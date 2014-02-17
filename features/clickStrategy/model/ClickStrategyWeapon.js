model.ClickStrategyWeapon = function ClickStrategyWeapon(args)
{
	model.ClickStrategy.call(this, args);
	this.ship = args.ship;
	this.weapons = [];
	this.uiEventResolver = null;
	this.weaponIndicatorService = new model.WeaponIndicatorService(this.gameScene, this.gameState)
};


model.ClickStrategyWeapon.prototype = Object.create(model.ClickStrategy.prototype);

model.ClickStrategyWeapon.prototype.addWeapon = function(weapon)
{
	this.weapons = this.weapons.concat(weapon);
	return this;
};

model.ClickStrategyWeapon.prototype.clickShip = function(ship, position, event)
{
	this.weaponIndicatorService.removeAll(); 
	var weaponManager = this.ship.status.managers.weapon;
	weaponManager.target(ship, position, this.weapons, this.gameState.getTurn());

	this.weapons.forEach(function(weapon){
		this.dispatcher.dispatch({name: 'ModuleDeselectedEvent', module:weapon});
	}, this);

	this.remove();
	event.stop();
};

model.ClickStrategyWeapon.prototype.mouseOverShip = function(ship, position, event)
{
	this.weaponIndicatorService.removeAll(); 

	if (! ship)
	{

		this.moduleView.display(null);
		this.shipView.display(null);
		return;
	}
	
	var module = ship.shipDesign.getModuleInPosition(position);
	this.displayWeaponTargeting(this.ship, ship, position);

	var positionService = new model.ShipPositionService(ship);
	
    if (this.zoom < 1)
    {
        this.showShipView(ship, positionService, module, event);
    }
    else
    {
		this.showModuleView(ship, positionService, module, event);
	}
};

model.ClickStrategyWeapon.prototype.displayWeaponTargeting = function(shooter, target, tile)
{
	var weaponManager = this.ship.status.managers.weapon;

	this.weapons.forEach(function(weapon){
		var targetTile = weaponManager.getClosestValidTarget(shooter, weapon, target, tile, this.gameState.getTurn())
		this.weaponIndicatorService.addLineAndEllipse(shooter, target, weapon, targetTile, this.gameState.getTurn(), {});
	}, this);
};

model.ClickStrategyWeapon.prototype.activate = function(uiEventResolver)
{
	this.uiEventResolver = uiEventResolver;
	jQuery("#gameContainer").addClass('weaponCursor');
};

model.ClickStrategyWeapon.prototype.deactivate = function()
{
	jQuery("#gameContainer").removeClass('weaponCursor');
};

