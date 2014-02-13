model.WeaponIndicatorService = function WeaponIndicatorService(gameScene, dispatcher)
{
	this._gameScene = gameScene;
	this._dispatcher = dispatcher;
	this._indicators = [];
}

model.WeaponIndicatorService.prototype.removeIndicators = function(weapons, type)
{
	this._indicators = this._indicators.filter(function(entry){
		var found = weapons.some(function(weapon){
			return weapon == entry.weapon && entry.type == type;
		});

		if (found)
		{
			this._gameScene.scene.remove(entry.indicator.get());
			return false;
		}

		return true;

	}, this);
};

model.WeaponIndicatorService.prototype.removeAllIndicators = function(type)
{
	this._indicators = this._indicators.filter(function(entry){

		if (! type || entry.type == type)
		{
			this._gameScene.scene.remove(entry.indicator.get());
			return false;
		}

		return true;

	}, this);
};

model.WeaponIndicatorService.prototype.addIndication = function(weapon, weaponPosition, targetPos, type)
{

	var weaponDirection = MathLib.getAzimuthFromTarget(targetPos, weaponPosition);

	var line = new model.Line(weaponPosition, targetPos);
	this._indicators.push({weapon: weapon, indicator: line, type: type});
	this._gameScene.scene.add(line.get());

	if (type == "targeting")
	{
		var ellipse = new model.Ellipse(targetPos, 45, 90, weaponDirection);
		this._indicators.push({weapon: weapon, indicator: ellipse, type: type});
		this._gameScene.scene.add(ellipse.get());
	}
};