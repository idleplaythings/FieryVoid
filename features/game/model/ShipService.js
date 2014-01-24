model.ShipService = function ShipService(
	fleets,
	moduleView,
	shipStatusView,
	dispatcher,
	uiEventResolver,
	coordinateConverter)
{
	this.fleets = fleets;
	this.dispatcher = dispatcher;
	this.uiEventResolver = uiEventResolver;
	this.moduleView = moduleView;
	this.shipStatusView = shipStatusView;
	this.coordinateConverter = coordinateConverter
	
	
	
	this.selectedShip = null;
	this.zoom = 1;
	this.scroll = {x:0, y:0};;
	
	this.dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
    this.dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
    
    this.uiEventResolver.registerListener('click', this.onClick.bind(this), 1);
    this.uiEventResolver.registerListener('mousemove', this.onMouseMove.bind(this), 1);
    window.ships = this.getShips();
}

model.ShipService.prototype.selectShip = function(ship)
{
	if (this.selectedShip)
		this.selectedShip.deselect();
		
    this.selectedShip = ship;
    this.selectedShip.select();
    
    console.trace();
    this.dispatcher.dispatch({name: 'ShipSelectedEvent', payload:ship});
};

model.ShipService.prototype.subscribeToScene = function(scene, effectManager, dispatcher, eventResolver)
{
	this.getShips().forEach(
        function(ship){
            ship.subscribeToScene(scene, effectManager, dispatcher, eventResolver);
        }, this);
        
	//this.selectShip(this.getClosestShip());
};

model.ShipService.prototype.getShips = function()
{
    return this.fleets.reduce(function(value, fleet){
		return value.concat(fleet.ships);
	}, []);
};

model.ShipService.prototype.getShipById = function(id)
{
    return this.getShips().filter(function(ship) {
        return ship._id == id;
    })[0];
};

model.ShipService.prototype.getClosestShip = function(center)
{
	if ( ! center)
		center = this.scroll;
		
    var ships = this.getShips().slice(0).filter(function(ship){return ! ship.isHidden()});

    ships.sort(function(a, b){
       return MathLib.distance(center, a.getPosition()) - MathLib.distance(center, b.getPosition());
    });

    if (ships.length == 0)
        return null;

    var ship = ships[0];
    if (MathLib.distance(center, ship.getPosition()) > 2000)
        return null;

    return ship;
};

model.ShipService.prototype.onScroll = function(event)
{
	this.scroll = event.position;
	
    if (this.zoom < 1)
        return;

    var ship = this.getClosestShip();
    if (! ship)
        this.getShips().forEach(function(ship){ship.getIcon().showHull()});

    if ( this.shipStatusView.targetId == ship._id)
        return;

    this.getShips().forEach(function(ship){ship.getIcon().showHull()});
    ship.getIcon().hideHull();
    this.shipStatusView.targetId = ship._id;
    this.shipStatusView.display(ship.getIcon(), ship.status).show();
};

model.ShipService.prototype.onZoom = function(event)
{
	this.zoom = event.zoom;
	
    if (event.oldZoom < 1 && event.zoom < 1)
        return;

    if ( event.zoom == 1)
    {
        var ship = this.getClosestShip();
        if (! ship)
            return;

        ship.getIcon().hideHull();
        this.shipStatusView.targetId = ship._id;
        this.shipStatusView.display(ship.getIcon(), ship.status).show();
    }
    else
    {
        this.getShips().forEach(function(ship){ship.getIcon().showHull()});
        this.shipStatusView.unsetShipIcon();
        this.shipStatusView.targetId = null;
        this.shipStatusView.hide();
    }
};

model.ShipService.prototype.onClick = function(event)
{
    var ship = this.getClosestShip(event.game);
    if (! ship)
        return;
        
	var position = ship.getIcon().getTileOnPosition(event.game);
	
	if (! ship.getIcon().occupiesPosition(position))
		return;

    //var module = ship.getIcon().getModuleOnPosition(event.game);

    //if (! module)
    event.clickStrategy.clickShip(ship, position, event);
};


model.ShipService.prototype.onMouseMove = function(event)
{
    if (this.zoom < 1)
    {
        this.moduleView.display(null);
        return;
    }

    var ship = this.getClosestShip();
    if (! ship)
        return;

    var module = ship.getIcon().getModuleOnPosition(event.game);

    if (! module)
    {
        this.moduleView.display(null);
        return;
    }

    var modulePos = this.coordinateConverter.fromGameToViewPort(
        ship.getIcon().getModulePositionInGame(module));

    this.moduleView.display(module, modulePos, ship.status);
};
