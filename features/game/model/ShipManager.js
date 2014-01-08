model.ShipManager = function ShipManager(
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
    
    this.uiEventResolver.registerListener('mousemove', this.onMouseMove.bind(this), 0);
    window.ships = this.getShips();
}

model.ShipManager.prototype.selectShip = function(ship)
{
    this.selectedShip = ship;
    this.dispatcher.dispatch({name: 'ShipSelectedEvent', payload:ship});
};

model.ShipManager.prototype.subscribeToScene = function(scene, effectManager, dispatcher, eventResolver)
{
	this.getShips().forEach(
        function(ship){
            ship.subscribeToScene(scene, effectManager, dispatcher, eventResolver);
        }, this);
        
	this.selectShip(this.getClosestShip());
};

model.ShipManager.prototype.getShips = function()
{
    return this.fleets.reduce(function(value, fleet){
		return value.concat(fleet.ships);
	}, []);
};

model.ShipManager.prototype.getShipById = function(id)
{
    return this.getShips().filter(function(ship) {
        return ship._id == id;
    })[0];
};

model.ShipManager.prototype.getClosestShip = function()
{
	var center = this.scroll;
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

model.ShipManager.prototype.onScroll = function(event)
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

model.ShipManager.prototype.onZoom = function(event)
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

model.ShipManager.prototype.onMouseMove = function(event)
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
