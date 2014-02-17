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
		return new model.FireOrder(
			serialized.turn, 
			serialized.targetId, 
			serialized.targetTile, 
			this.getModuleById(serialized.weaponId)
		);
	}, this);
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

model.WeaponManagement.prototype.addFireOrder = function(fireOrder)
{
	this.fireOrders = this.fireOrders.filter(function(order){
		return  ! (order.weapon === fireOrder.weapon && order.turn === fireOrder.turn);
	}, this);

	this.fireOrders.push(fireOrder);

	var entry = this.timeline.filter(function(entry){ 
		return entry.name == 'fireOrder' && entry.payload.weaponId == fireOrder.weapon.moduleIdOnShip && entry.payload.turn == fireOrder.turn;
	}, this).pop();

	if (entry && entry.canUpdate())
		entry.update(fireOrder.serialize());
	else
		this.timeline.add('fireOrder', fireOrder.serialize());
};

