model.ClickStrategyFactory = function ClickStrategyFactory(
	dispatcher,
	coordinateConverter,
	moduleView,
	shipView,
	gameScene,
	gameState)
{
	this.coordinateConverter = coordinateConverter;
	this.gameScene = gameScene;
	this.gameState = gameState;
	this.dispatcher = dispatcher;
	dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
	this.zoom = 1.0;
	
	this.moduleView = moduleView;
	this.shipView = shipView;
	
};

model.ClickStrategyFactory.prototype.onZoom = function(event)
{
	this.zoom = event.zoom;
};

model.ClickStrategyFactory.prototype.construct = function(className, args)
{
	if ( ! args)
		args = {};
		
	args.coordinateConverter = this.coordinateConverter;
	args.dispatcher = this.dispatcher;
	args.zoom = this.zoom;
	args.moduleView = this.moduleView;
	args.shipView = this.shipView;
	args.gameScene = this.gameScene;
	args.gameState = this.gameState;
	
	return new model[className](args);
};

