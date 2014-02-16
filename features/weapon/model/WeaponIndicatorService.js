model.WeaponIndicatorService = function WeaponIndicatorService(gameScene, dispatcher, gameState)
{
	this._gameScene = gameScene;
	this._dispatcher = dispatcher;
	this._gameState = gameState;
	this._indicators = [];
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


model.WeaponIndicatorService.prototype.addLine = function(shooter, target, weapon, targetTile, args)
{
	this.remove(shooter, weapon);
	this._addIndication(shooter, target, weapon, targetTile, args, [this._addLine]);
};

model.WeaponIndicatorService.prototype.addLineAndEllipse = function(shooter, target, weapon, targetTile, args)
{
	this.remove(shooter, weapon);
	this._addIndication(shooter, target, weapon, targetTile, args, [this._addLine, this._addEllipse]);
};

model.WeaponIndicatorService.prototype._addIndication = function(shooter, target, weapon, targetTile, args, actionsToDo)
{
	var positionServiceShooter = new model.ShipPositionService(shooter, this._gameState.getTurn());
	var positionServiceTarget = new model.ShipPositionService(target, this._gameState.getTurn());

	var weaponPosition = positionServiceShooter.getModuleCenterPositionInScene(weapon);
	var targetPosition = positionServiceTarget.getTilePositionInScene(targetTile);

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

model.WeaponIndicatorService.prototype._addLine = function(weaponPosition, targetPosition, weaponDirection, args)
{
	return new model.Line(weaponPosition, targetPosition);
};

model.WeaponIndicatorService.prototype._addEllipse = function(weaponPosition, targetPosition, weaponDirection, args)
{
	return new model.Ellipse(targetPosition, 45, 90, weaponDirection);
};

model.WeaponIndicatorService.prototype.destroy = function()
{

};