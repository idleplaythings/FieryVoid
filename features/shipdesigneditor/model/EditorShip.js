model.EditorShip = function EditorShip()
{
	this._ship = null;

    this._hullViewModeSetter = null;
    this._toggleHullVisibility = this.hideHull.bind(this);
}

model.EditorShip.prototype.setShip = function(ship) 
{
    console.log("setting editor ship");
	this._ship = ship;
    this._executeHullViewMode();
};

model.EditorShip.prototype.getShipAndTileOnScenePosition = function(scenePosition)
{
    var ship = this._ship;

    if (! ship)
        return {ship: null, tile: null};

    var componentPosition = new model.ShipDesignPositionService(ship.shipDesign);

    var tile = componentPosition.getTileOnPosition(scenePosition);

    if (! componentPosition.occupiesPosition(ship, scenePosition))
        return {ship: null, tile: null};

    return {ship: ship, tile: tile}
};

model.EditorShip.prototype.hideHull = function() 
{
    this._hullViewModeSetter = this._doHideHull.bind(this);
    this._toggleHullVisibility = this.showHull.bind(this);
    this._executeHullViewMode();
};

model.EditorShip.prototype.showHull = function() 
{
    this._hullViewModeSetter = this._doShowHull.bind(this);
    this._toggleHullVisibility = this.hideHull.bind(this);
    this._executeHullViewMode();
};

model.EditorShip.prototype._executeHullViewMode = function() 
{
    if (this._hullViewModeSetter)
        this._hullViewModeSetter();
};

model.EditorShip.prototype._doHideHull = function() 
{
    var ship = this._ship;

    if ( ! ship)
        return;

    ship.getIcon().setInsideMode();

    this._hullViewModeSetter = function(){ship.getIcon().setInsideMode()}
};

model.EditorShip.prototype._doShowHull = function() 
{
     var ship = this._ship;

    if ( ! ship)
        return;

    ship.getIcon().sethullMode();
    
};

model.EditorShip.prototype.toggleHullVisibility = function() 
{
    this._toggleHullVisibility();
};