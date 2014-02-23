model.ClickStrategyWeapon = function ClickStrategyWeapon(args)
{
	model.ClickStrategy.call(this, args);
	this.ship = args.ship;
	this.weapons = [];
	this.uiEventResolver = null;

	this.weaponIndicatorService = new model.WeaponIndicatorService(this.gameScene, this.gameState);
	this.hitLocationService =  new model.HitLocationService();
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

model.ClickStrategyWeapon.prototype.onClick = function(event)
{
	var scenePosition = event.game;
	var shipAndTile = this.shipService.getShipAndTileOnScenePosition(scenePosition);

	if (shipAndTile)
	{
		this.target(shipAndTile.ship, shipAndTile.tile);
		event.stop();
	}
};

model.ClickStrategyWeapon.prototype.onMouseMove = function(event)
{
	var scenePosition = event.game;

	var shipAndTile = this.shipService.getShipAndTileOnScenePosition(scenePosition);
	var ship = shipAndTile ? shipAndTile.ship : null;
	var tile = shipAndTile ? shipAndTile.tile : null;
	var module = ship ? ship.shipDesign.getModuleInPosition(tile) : null;

	this.showMouseOverView(ship, module, tile);
	this.displayWeaponTargeting(ship, tile);
};

model.InputMode.WeaponShipTargeting.prototype.target = function(target, tile)
{

};

model.InputMode.WeaponShipTargeting.prototype.displayWeaponTargeting = function(target, tile)
{
	var shooter, target, tile, selectedWeapons
};

model.ClickStrategyWeapon.prototype.target = function(target, tile)
{
	this.weaponIndicatorService.removeAll();

	var shooter = this.ship;
	var turn = this.gameState.getTurn();
	
	this.weapons.forEach(function(weapon){
		var targetTile = this.hitLocationService.getClosestValidTarget(shooter, weapon, target, tile, turn);
		console.log(this.hitLocationService.isValidTarget(shooter, weapon, target, targetTile, turn));
		var weaponFire = new model.WeaponFire(shooter, target, weapon, targetTile, turn);

		shooter.status.managers.weapon.addFireOrder(weaponFire.getFireOrder());

		this.removeWeapon(weapon);
	}, this);

	this.dispatcher.dispatch({name: 'FireOrdersChangedEvent', ship:this.ship, turn:turn});

	this.removeIfEmpty();

	event.stop();
};

model.ClickStrategyWeapon.prototype.displayWeaponTargeting = function(target, tile)
{
	this.weaponIndicatorService.removeAll();

	if (! target || ! tile)
		return;

	var shooter = this.ship;
	var turn = this.gameState.getTurn();

	this.weapons.forEach(function(weapon){
		var targetTile = this.hitLocationService.getClosestValidTarget(shooter, weapon, target, tile, turn);
		this.weaponIndicatorService.addLineAndEllipse(shooter, target, weapon, targetTile, turn, {});
	}, this);
};

model.ClickStrategyWeapon.prototype.activate = function(uiResolver)
{
	this.mouseClickCallback = uiResolver.registerListener('click', this.onClick.bind(this), 1);
    this.mouseMovekCallback = uiResolver.registerListener('mousemove', this.onMouseMove.bind(this), 1);
	this.cancelCallback = uiResolver.registerListener('keyup', this.onKeyUp.bind(this));
	jQuery("#gameContainer").addClass('weaponCursor');
};

model.ClickStrategyWeapon.prototype.deactivate = function(uiResolver)
{
	uiResolver.unregisterListener('click', this.mouseClickCallback);
    uiResolver.unregisterListener('mousemove', this.mouseMovekCallback);
	uiResolver.unregisterListener('keyup', this.cancelCallback);
	jQuery("#gameContainer").removeClass('weaponCursor');
};

model.ClickStrategyWeapon.prototype.onKeyUp = function(event)
{
	var key = event.key;

	if (key instanceof model.Hotkey.Cancel)
		this.remove();
};