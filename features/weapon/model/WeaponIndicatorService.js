model.WeaponIndicatorService = function WeaponIndicatorService(
	gameScene,
	positionService)
{
	this._gameScene = gameScene;
	this._indicators = [];
	this._positionService = positionService;
}

model.WeaponIndicatorService.prototype.remove = function(shooter, weapon)
{
	this._indicators = this._indicators.filter(function(entry){

		if (entry.shooter == shooter && entry.weapon == weapon)
		{
			entry.indicators.forEach(function(indicator){
				this._gameScene.removeFromScene(indicator.get());
			}, this);
			return false;
		}

		return true;

	}, this);
};

model.WeaponIndicatorService.prototype.removeAll = function()
{
	this._indicators = this._indicators.filter(function(entry){
		entry.indicators.forEach(function(indicator){
			this._gameScene.removeFromScene(indicator.get());
		}, this);
		return false;
	}, this);
};


model.WeaponIndicatorService.prototype.addLine = function(shooter, target, weapon, targetTile, turn, args)
{
	this.remove(shooter, weapon);
	this._addIndication(shooter, target, weapon, targetTile, turn, args, [this._addLine]);
};

model.WeaponIndicatorService.prototype.addLineAndEllipse = function(shooter, target, weapon, targetTile, turn, args)
{
	this.remove(shooter, weapon);
	this._addIndication(shooter, target, weapon, targetTile, turn, args, [this._addLine, this._addEllipse]);
};

model.WeaponIndicatorService.prototype._addIndication = function(shooter, target, weapon, targetTile, turn, args, actionsToDo)
{
	var positionServiceShooter = this._positionService.getComponentPositionService(shooter);
	var positionServiceTarget = this._positionService.getComponentPositionService(target);
	var targetFacing = this._positionService.getSceneFacing(target);

	var weaponPosition = positionServiceShooter.getModuleCenterPositionInScene(weapon);
	var targetPosition = positionServiceTarget.getTilePositionInScene(targetTile);
	targetPosition = MathLib.getPointInDirectionInvertY(15, targetFacing, targetPosition.x, targetPosition.y);
	targetPosition = MathLib.getPointInDirectionInvertY(15, MathLib.addToAzimuth(targetFacing, -90), targetPosition.x, targetPosition.y);
		//targetPosition.x += 15;
		//targetPosition.y += 15;

	var weaponDirection = MathLib.getAzimuthFromTarget(targetPosition, weaponPosition);

	var indicators = [];
	actionsToDo.forEach(function(action){
		indicators = indicators.concat(action(weaponPosition, targetPosition, weaponDirection, args));
	});

	this._indicators.push({
		shooter: shooter,
		weapon: weapon,
		indicators: indicators
	});

	indicators.forEach(function(indicator){
		this._gameScene.addToScene(indicator.get());
	}, this);
};

model.WeaponIndicatorService.prototype.displayFireOrders = function(shooter, fireOrders, shipService)
{
	fireOrders.forEach(function(order){
		this.addLine(
			shooter,
			shipService.getShipById(order.targetId),
			order.weapon,
			order.targetTile,
			order.turn,
			{})
		;
	}, this);
};

model.WeaponIndicatorService.prototype._addLine = function(weaponPosition, targetPosition, weaponDirection, args)
{
	return [
		new model.Line(weaponPosition, targetPosition, null, 10, 0.2, 20),
		new model.Line(weaponPosition, targetPosition, null, 5, 0.2, 30)
	];
};

model.WeaponIndicatorService.prototype._addEllipse = function(weaponPosition, targetPosition, weaponDirection, args)
{
	return [
		new model.Ellipse(targetPosition, 45, 90, weaponDirection, null, 0.2, 8),
		new model.Ellipse(targetPosition, 45-5, 90-5, weaponDirection, null, 0.2, 8.1)
	];
};

model.WeaponIndicatorService.prototype.destroy = function()
{

};