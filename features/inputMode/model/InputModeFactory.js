model.InputModeFactory = function InputModeFactory(
	dispatcher,
	coordinateConverter,
	moduleView,
	shipView,
	gameScene,
	gameState,
	shipService)
{
	this.coordinateConverter = coordinateConverter;
	this.gameScene = gameScene;
	this.gameState = gameState;
	this.dispatcher = dispatcher;
	this.shipService = shipService;
	dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
	this.zoom = 1.0;

	this.moduleView = moduleView;
	this.shipView = shipView;

};

model.InputModeFactory.prototype.onZoom = function(event)
{
	this.zoom = event.zoom;
};

model.InputModeFactory.prototype.construct = function(className, args)
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
	args.shipService = this.shipService;

	return new model[className](args);
};

