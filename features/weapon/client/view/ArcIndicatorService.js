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


	var arc = new model.Arc(center, 1000, 270, 90);
	this._gameScene.addToScene(arc.get());
	this._indicators.push({module: module, indicators: [arc]});
};