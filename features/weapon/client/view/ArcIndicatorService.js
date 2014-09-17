model.ArcIndicatorService = function ArcIndicatorService(gameScene)
{
	this._gameScene = gameScene;
	this._currentModule = null;
	this._indicators = [];
}

model.ArcIndicatorService.prototype.removeAll = function()
{
	this._currentModule = null;
	this._indicators = this._indicators.filter(function(entry){
		entry.indicators.forEach(function(indicator){
			this._gameScene.removeFromScene(indicator.get());
		}, this);
		return false;
	}, this);
};


model.ArcIndicatorService.prototype.display = function(shipFacing, module, center)
{
	if (module === null)
	{
		this.removeAll();
		return;
	}

	if ( this._currentModule == module)
		return;

	this.removeAll();
	this._currentModule = module;
	var arcs = module.getWeapon().getArcs();

	var indicators = [];

	arcs.forEach(function(arc){
		var arcIndicator = new model.Arc(center, 10000, MathLib.addToAzimuth(arc.start, shipFacing), MathLib.addToAzimuth(arc.end, shipFacing));
		//var arcIndicator = new model.Arc(center, 1000, 45, 180);
		this._gameScene.addToScene(arcIndicator.get());
		indicators.push(arcIndicator);
	}, this);

	
	this._indicators.push({module: module, indicators: indicators});
};