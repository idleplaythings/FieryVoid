model.ClickStrategyFactory = function ClickStrategyFactory(
	dispatcher,
	coordinateConverter,
	moduleView,
	shipView)
{
	this.coordinateConverter = coordinateConverter;
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
	
	return new model[className](args);
};

