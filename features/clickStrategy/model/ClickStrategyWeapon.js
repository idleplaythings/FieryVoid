model.ClickStrategyWeapon = function ClickStrategyWeapon(args)
{
	model.ClickStrategy.call(this, args);
	this.ship = args.ship;
	this.weapons = [];
	this.uiEventResolver = null;

	this.weaponIndicatorService = new model.WeaponIndicatorService(this.gameScene, this.gameState);
	this.HitLocationService =  new model.HitLocationService();
};


model.ClickStrategyWeapon.prototype = Object.create(model.ClickStrategy.prototype);

model.ClickStrategyWeapon.prototype.removeIfEmpty = function()
{
	if (this.weapons.length == 0)
		this.remove();
};

model.ClickStrategyWeapon.prototype.hasWeapon = function(weapon)
{
	return this.weapons.filter(function(entry){return entry === weapon;})[0];
};

model.ClickStrategyWeapon.prototype.addWeapon = function(weapon)
{
	if (this.hasWeapon(weapon))
		throw new Error("Trying to add weapon twice");

	this.weapons = this.weapons.concat(weapon);
	var turn = this.gameState.getTurn();
	var fireOrder = this.ship.status.managers.weapon.getFireOrder(weapon, turn);

	if (fireOrder)
	{
		console.log("has fireOrder");
		this.ship.status.managers.weapon.removeFireOrder(fireOrder, turn);
		this.dispatcher.dispatch({name: 'FireOrdersChangedEvent', ship:this.ship, turn:turn});
	}

	return this;
};

model.ClickStrategyWeapon.prototype.removeWeapon = function(weapon)
{
	this.weapons = this.weapons.filter(function(entry){ return entry != weapon;});
	this.removeIfEmpty();
	this.dispatcher.dispatch({name: 'ModuleDeselectedEvent', module:weapon});
	return this;
};

model.ClickStrategyWeapon.prototype.clickShip = function(ship, position, event)
{
	this.weaponIndicatorService.removeAll();

	var shooter = this.ship;
	var target = ship;
	var turn = this.gameState.getTurn();
	
	this.weapons.forEach(function(weapon){
		var targetTile = this.HitLocationService.getClosestValidTarget(shooter, weapon, target, position, turn);
		var weaponFire = new model.WeaponFire(shooter, target, weapon, targetTile, turn);

		shooter.status.managers.weapon.addFireOrder(weaponFire.getFireOrder());

		this.removeWeapon(weapon);
	}, this);

	this.dispatcher.dispatch({name: 'FireOrdersChangedEvent', ship:this.ship, turn:turn});

	this.removeIfEmpty();

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

	var positionService = new model.ShipPositionService(ship, this.gameState.getTurn());
	
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
	var turn = this.gameState.getTurn();

	this.weapons.forEach(function(weapon){
		var targetTile = this.HitLocationService.getClosestValidTarget(shooter, weapon, target, tile, turn);
		this.weaponIndicatorService.addLineAndEllipse(shooter, target, weapon, targetTile, turn, {});
	}, this);
};

model.ClickStrategyWeapon.prototype.activate = function(uiEventResolver)
{
	this.uiEventResolver = uiEventResolver;
	this.cancelCallback = uiEventResolver.registerListener('keyup', this.onKeyUp.bind(this));
	jQuery("#gameContainer").addClass('weaponCursor');
};

model.ClickStrategyWeapon.prototype.deactivate = function()
{
	this.uiEventResolver.unregisterListener('keyup', this.cancelCallback);
	jQuery("#gameContainer").removeClass('weaponCursor');
};

model.ClickStrategyWeapon.prototype.onKeyUp = function(event)
{
	var key = event.key;

	if (key instanceof model.Hotkey.Cancel)
		this.remove();
};

