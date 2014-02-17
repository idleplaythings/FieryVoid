model.WeaponManagement = function WeaponManagement(
	ship, modules, timeline, power, crew, movement)
{
	model.ShipStatusManager.call(this, ship, modules, timeline);
	
	this.crew = crew;
	this.power = power;
	this.movement = movement;

	this.hitLocationService = new model.HitLocationService();
	this.fireOrders = [];
	this.loadFireOrdersFromTimeline();
};

model.WeaponManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.WeaponManagement.prototype.startTurn = function(turn)
{
	this.loadFireOrdersFromTimeline();
};

model.WeaponManagement.prototype.loadFireOrdersFromTimeline = function()
{
	this.fireOrders = this.timeline.filter(function(entry){ 
		return entry.name == 'fireOrder'
	}).map(function(entry){
		serialized = entry.payload;
		console.log(serialized);
		return new model.FireOrder(
			serialized.turn, 
			serialized.targetId, 
			serialized.targetTile, 
			this.getModuleById(serialized.weaponId)
		);
	}, this);

	console.log("loaded fireOrders", this.fireOrders);
};

model.WeaponManagement.prototype.getFireOrders = function(turn)
{
	return this.fireOrders.filter(function(order){return order.turn == turn;});
};

model.WeaponManagement.prototype.getWeapons = function()
{
	var self = this;
    return this.modules.filter(function(module){
			return module.weapon
		});
};

model.WeaponManagement.prototype.getClosestValidTarget = function(shooter, weapon, target, targetTile, turn)
{
	var positionServiceShooter = new model.ShipPositionService(shooter, turn);
	var positionServiceTarget = new model.ShipPositionService(target, turn);

	var weaponPosition = positionServiceShooter.getModuleCenterPositionInScene(weapon);
	var targetPosition = positionServiceTarget.getTilePositionInScene(targetTile);

	var weaponDirection = MathLib.getAzimuthFromTarget(targetPosition, weaponPosition);

	return this.hitLocationService.getClosestValidTarget(weaponDirection, targetTile, target.shipDesign, target.status.managers.damage);
};

model.WeaponManagement.prototype.target = function(target, position, weapons, turn)
{
	var positionService = new model.ShipPositionService(this.ship, turn);

	weapons.forEach(function(weapon){
		var weaponPosition = positionService.getModuleCenterPositionInScene(
			weapon,
			this.movement.getScenePositionAtTurn(this.currentTurn),
			this.movement.getSceneFacingAtTurn(this.currentTurn)
		);
		
		var targetPos = this.getClosestValidTarget(
			this.ship,
			weapon,
			target,
			position,
			turn
		);

		var fireOrder = new model.FireOrder(turn, target._id, targetPos, weapon);
		this.addFireOrder(fireOrder);

	}, this);
};

model.WeaponManagement.prototype.addFireOrder = function(fireOrder)
{
	this.fireOrders = this.fireOrders.filter(function(order){
		return order.weapon != fireOrder.weapon && order.turn != this.getTurn();
	}, this);

	this.fireOrders.push(fireOrder);

	var entry = this.timeline.filter(function(entry){ 
		return entry.name == 'fireOrder' && entry.payload.weaponId == fireOrder.weapon.idOnShip && entry.payload.turn == this.getTurn();
	}, this).pop();

	if (entry && entry.canUpdate())
		entry.update(fireOrder.serialize());
	else
		this.timeline.add('fireOrder', fireOrder.serialize());
};

