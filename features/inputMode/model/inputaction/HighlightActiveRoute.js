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

    this._dispatcher.attach('ShipSelectedEvent', this.onShipSelected.bind(this));
}

model.inputAction.HighlightActiveRoute.prototype.onShipSelected = function(event)
{
    this._shipAnimationService.clearRouteHighlights();
    this._shipAnimationService.highlightRouteFor(event.ship);
};

model.inputAction.HighlightActiveRoute.prototype.onActivation = function()
{
    var ship = this._selectedShip.getShip();

    if (ship) {
        this._shipAnimationService.clearRouteHighlights();
        this._shipAnimationService.highlightRouteFor(ship, this._gameState.getTurn());
    }
};

model.inputAction.HighlightActiveRoute.prototype.onDeactivation = function()
{
    this._shipAnimationService.clearRouteHighlights();
};