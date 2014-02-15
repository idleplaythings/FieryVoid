model.WeaponManagement = function WeaponManagement(
	ship, modules, timeline, power, crew, movement)
{
	model.ShipStatusManager.call(this, ship, modules, timeline);
	
	this.crew = crew;
	this.power = power;
	this.movement = movement;

	this.hitLocationService = new model.HitLocationService();
	this.fireOrders = [];
	this.weaponIndicatorService = null;
};

model.WeaponManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.WeaponManagement.prototype.startTurn = function(turn)
{
	this.weaponIndicatorService.removeAllIndicators(null);
	this.loadFireOrdersFromTimeline(turn);
	this.displayFireOrders();
};

model.WeaponManagement.prototype.loadFireOrdersFromTimeline = function(turn)
{
	this.fireOrders = this.timeline.filter(function(entry){ 
		return entry.name == 'fireOrder' && entry.payload.turn == turn;
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
};

model.WeaponManagement.prototype.displayFireOrders = function()
{
	this.fireOrders.forEach(function(fireOrder){
		console.log("displaying", fireOrder);
		this.showTarget(
			this.shipService.getShipById(fireOrder.targetId),
			fireOrder.targetTile,
			fireOrder.weapon,
			null);
	}, this);
};

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
	var positionService = new model.ShipPositionService(target, this.currentTurn);
	var gamePosition = positionService.getTilePositionInScene(position);
	var weaponDirection = MathLib.getAzimuthFromTarget(gamePosition, weaponPosition);
	return this.hitLocationService.getClosestValidTarget(weaponDirection, position, target.shipDesign, target.status.managers.damage);
};

model.WeaponManagement.prototype.target = function(target, position, weapons)
{
	this.hideTarget(weapons, null);
	this.showTarget(target, position, weapons, null);
	var positionService = new model.ShipPositionService(this.ship, this.currentTurn);

	weapons.forEach(function(weapon){
		var weaponPosition = positionService.getModuleCenterPositionInScene(
			weapon,
			this.movement.getScenePositionAtTurn(this.currentTurn),
			this.movement.getSceneFacingAtTurn(this.currentTurn)
		);
		
		var targetPos = this.getClosestValidTarget(
			target,
			position,
			weaponPosition
		);

		var fireOrder = new model.FireOrder(this.getTurn(), target._id, targetPos, weapon);
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


model.WeaponManagement.prototype.showTarget = function(target, position, weapons, type)
{
	weapons = [].concat(weapons);
	var positionService = new model.ShipPositionService(this.ship, this.currentTurn);

	weapons.forEach(function(weapon){
		var weaponPosition = positionService.getModuleCenterPositionInScene(
			weapon,
			this.movement.getScenePositionAtTurn(this.currentTurn),
			this.movement.getSceneFacingAtTurn(this.currentTurn)
		);

		var targetPos = this.getClosestValidTarget(
			target,
			position,
			weaponPosition
		);

		targetPos = new model.ShipPositionService(target, this.currentTurn).getTilePositionInScene(targetPos);

		targetPos.x += 15;
		targetPos.y += 15;

		this.weaponIndicatorService.addIndication(weapon, weaponPosition, targetPos, type);
	}, this);
};

model.WeaponManagement.prototype.hideTarget = function(weapons, type)
{
	this.weaponIndicatorService.removeIndicators(weapons, type);
};

model.WeaponManagement.prototype.onSubscribedToScene = function()
{
    this.weaponIndicatorService = new model.WeaponIndicatorService(this.gameScene, this.dispatcher);
};
