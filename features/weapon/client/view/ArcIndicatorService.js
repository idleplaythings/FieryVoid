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
		this.removeAll();

	if ( this._currentModule == module)
		return;

	this.removeAll();

	var point1 = {
		x:center.x + 200,
		y:center.y + 100
	};

	var point2 = {
		x:center.x + 200,
		y:center.y - 100
	};

	var arc = new model.Arc(center, point1, point2);
	this._gameScene.addToScene(arc.get());
	this._indicators.push({module: module, indicators: [arc]});
};