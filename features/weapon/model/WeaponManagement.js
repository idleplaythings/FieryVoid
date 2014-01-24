model.WeaponManagement = function WeaponManagement(
	modules, timeline, ship, power, crew)
{
	this.modules = modules;
	this.crew = crew;
	this.power = power;
	this.timeline = timeline;
	this.ship = ship;
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
		current  = new model.ClickStrategyWeapon(this);
		this.uiResolver.addClickStrategy(current);
	}
	
	current.addWeapon(module);
};

model.WeaponManagement.prototype.target = function(target, position, weapons)
{

	var targetPos = target.getIcon().getPositionInIcon(position);
	
	weapons.forEach(function(weapon){
		var weaponPosition = this.ship.getIcon().getModulePositionInGame(weapon)
		this.gameScene.scene.add(new model.Line(weaponPosition, targetPos).get());
	}, this);
	
	console.log("targeting", target, "with", weapons);
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
