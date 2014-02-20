model.ArcIndicatorService = function ArcIndicatorService(gameScene)
{
	this._gameScene = gameScene;
	this._currentModule = null;
	this._indicators = [];
}

model.ArcIndicatorService.prototype.removeAll = function()
{
	this._indicators = this._indicators.filter(function(entry){
		entry.indicators.forEach(function(indicator){
			this._gameScene.removeFromScene(indicator.get());
		}, this);
		return false;
	}, this);
};


model.ArcIndicatorService.prototype.display = function(module, center)
{
	if (module === null)
	{
		this.removeAll();
		this._currentModule = null;
		return;
	}

	if ( this._currentModule == module)
		return;

	this.removeAll();
	this._currentModule = module;
	var arcs = module.weapon.getArcs();
	console.log(arcs);

	var indicators = [];

	arcs.forEach(function(arc){
		var arcIndicator = new model.Arc(center, 1000, arc.start, arc.end);
		//var arcIndicator = new model.Arc(center, 1000, 45, 180);
		this._gameScene.addToScene(arcIndicator.get());
		indicators.push(arcIndicator);
	}, this);

	
	this._indicators.push({module: module, indicators: indicators});
};