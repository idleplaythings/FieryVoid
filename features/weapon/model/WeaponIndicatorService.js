model.WeaponIndicatorService = function WeaponIndicatorService(gameScene, dispatcher)
{
	this._gameScene = gameScene;
	this._dispatcher = dispatcher;
	this._indicators = [];
}

model.WeaponIndicatorService.prototype.removeIndicators = function(weapons)
{
	this._indicators = this._indicators.filter(function(entry){
		var found = weapons.some(function(weapon){
			return weapon == entry.weapon;
		});

		if (found)
		{
			this._gameScene.scene.remove(entry.indicator.get());
			return false;
		}

		return true;

	}, this);
};

model.WeaponIndicatorService.prototype.addIndication = function(weapon, weaponPosition, targetPos)
{

	var weaponDirection = MathLib.getAzimuthFromTarget(targetPos, weaponPosition);

	var line = new model.Line(weaponPosition, targetPos);
	this._indicators.push({weapon: weapon, indicator: line});
	this._gameScene.scene.add(line.get());

	var ellipse = new model.Ellipse(targetPos, 45, 90, weaponDirection);
	this._indicators.push({weapon: weapon, indicator: ellipse});
	this._gameScene.scene.add(ellipse.get());
};