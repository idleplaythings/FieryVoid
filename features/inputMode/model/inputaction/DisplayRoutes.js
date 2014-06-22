model.inputAction.DisplayRoutes = function DisplayRoutes(shipAnimationService, gameState, dispatcher)
{
    this._shipAnimationService = shipAnimationService;
    this._shipAniamtions = [];
    this._gameState = gameState;
    this._dispatcher = dispatcher;

    this.zoom = 1.0;
    this._callback = null;
};

model.inputAction.DisplayRoutes.prototype.onActivation = function()
{
  this._shipAnimationService.showAllRoutes(this._gameState.getTurn());
  this._callback = this._dispatcher.attach('MovementRouteChanged', this._onRouteChanged.bind(this));
};

model.inputAction.DisplayRoutes.prototype.onDeactivation = function()
{
  this._shipAnimationService.hideAllRoutes();
  this._dispatcher.detach('MovementRouteChanged', this._callback);
};

model.inputAction.DisplayRoutes.prototype.onZoom = function(event)
{
  //TODO: hide routes on extreme zoom levels
};

model.inputAction.DisplayRoutes.prototype._onRouteChanged = function(event){
  this._shipAnimationService.showRouteFor(event.ship, this._gameState.getTurn());
  console.log('route changed', event);
};
