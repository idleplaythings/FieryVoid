model.WeaponManagement = function WeaponManagement(
	modules, timeline, ship, power, crew)
{
	this.modules = modules;
	this.crew = crew;
	this.power = power;
	this.timeline = timeline;
	this.ship = ship;
	this.hitLocationService = new model.HitLocationService();
};

model.WeaponManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.WeaponManagement.prototype.getActionButtons = function()
{
	var self = this;
    return this.modules.filter(function(module){
			return module.weapon
		}).map(function(module){
			return new model.ActionButton('', function(){self.selectWeapon(module);}, {background: module.image.getByType('ui')});
		}, this);
};

model.WeaponManagement.prototype.selectWeapon = function(module)
{
	var current = this.uiResolver.getCurrentClickStrategy();
	
	if ( ! (current instanceof model.ClickStrategyWeapon))
	{
		current  = this.uiResolver.clickStrategyFactory.construct(
			'ClickStrategyWeapon', {weaponManager: this});
		this.uiResolver.addClickStrategy(current);
	}
	
	current.addWeapon(module);
};

model.WeaponManagement.prototype.getClosestValidTarget = function(target, position, weaponPosition)
{
	var gamePosition = target.getIcon().getPositionInIcon(position);
	var weaponDirection = MathLib.getAzimuthFromTarget(gamePosition, weaponPosition);
	return this.hitLocationService.getClosestValidTarget(weaponDirection, position, target.shipDesign, target.status.managers.damage);
};

model.WeaponManagement.prototype.target = function(target, position, weapons)
{
	/*
	this.getClosestValidTarget(target, position, weapon);
	this.weaponIndicatorService.hideTarget(weapons);

	var targetPos = this.getClosestValidTarget(
		target,
		target.getIcon().getPositionInIcon(position),
		weapon
	);

	this.showTarget(target, position, weapons);
	*/
};

model.WeaponManagement.prototype.showTarget = function(target, position, weapons)
{
	weapons.forEach(function(weapon){
		var weaponPosition = this.ship.getIcon().getModulePositionInGame(weapon);
		var targetPos = this.getClosestValidTarget(
			target,
			position,
			weaponPosition
		);

		targetPos = target.getIcon().getPositionInIcon(targetPos),
		targetPos.x += 15;
		targetPos.y += 15;

		this.weaponIndicatorService.addIndication(weapon, weaponPosition, targetPos);
	}, this);
};

model.WeaponManagement.prototype.hideTarget = function(weapons)
{
	this.weaponIndicatorService.removeIndicators(weapons);
};

model.WeaponManagement.prototype.subscribeToScene = function(
    gameScene, effectManager, dispatcher, uiResolver, gridService)
{
    this.gameScene = gameScene;
    this.effectManager = effectManager;
    this.dispatcher = dispatcher;
    this.uiResolver = uiResolver;
    this.gridService = gridService;
    this.weaponIndicatorService = new model.WeaponIndicatorService(gameScene, dispatcher);
};


/*
model.WeaponManagement.prototype.setRandomTarget = function(module)
{
	var hit = Math.random() > 0.5;
	var start = {x: 0, y: 0};
	
	var pos = {
		x:Math.floor(Math.random() * 1000 - 500),
		y:Math.floor(Math.random() * 1000 - 500)
	}
	
	var time = 0; //Math.floor(Math.random() * 10000);
	
	/*
	this.timeline.add('fire', 
		{
			moduleId: module._id,
			position: pos,
			hit: hit,
			time: time
		}
	);
	
	
	this.effectManager.register(new model.Bolt(start, pos, time));
	this.effectManager.createBatch(0);
};
*/
