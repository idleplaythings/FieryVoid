model.inputAction.HighlightActiveRoute = function HighlightActiveRoute(
    dispatcher,
    selectedShip,
    shipAnimationService,
    gameState
)
{
    this._dispatcher = dispatcher;
    this._selectedShip = selectedShip;
    this._shipAnimationService = shipAnimationService;
    this._gameState = gameState;

    this._shipSelectedCallback = null;
    this._routeChangedCallback = null;
}

model.inputAction.HighlightActiveRoute.prototype.onShipSelected = function(event)
{
    this._shipAnimationService.clearRouteHighlights();
    this._shipAnimationService.highlightRouteFor(event.ship, this._gameState.getTurn());
};

model.inputAction.HighlightActiveRoute.prototype.onActivation = function()
{
    var ship = this._selectedShip.getShip();

    if (ship) {
        this._shipAnimationService.clearRouteHighlights();
        this._shipAnimationService.highlightRouteFor(ship, this._gameState.getTurn());
    }


    this._shipSelectedCallback = this._dispatcher.attach('ShipSelectedEvent', this.onShipSelected.bind(this));
    this._routeChangedCallback = this._dispatcher.attach('MovementRouteChanged', this._onRouteChanged.bind(this));
};

model.inputAction.HighlightActiveRoute.prototype.onDeactivation = function()
{
    this._shipAnimationService.clearRouteHighlights();
    this._dispatcher.detach('ShipSelectedEvent', this._shipSelectedCallback);
    this._dispatcher.detach('MovementRouteChanged', this._routeChangedCallback);
};

model.inputAction.HighlightActiveRoute.prototype._onRouteChanged = function(event){

    var ship = this._selectedShip.getShip();
    if (ship == event.ship){
        this._shipAnimationService.clearRouteHighlights();
        this._shipAnimationService.highlightRouteFor(ship, this._gameState.getTurn());
    }
};
