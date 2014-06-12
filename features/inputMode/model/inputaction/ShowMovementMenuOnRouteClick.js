model.inputAction.ShowMovementMenuOnRouteClick = function ShowMovementMenuOnRouteClick(shipService, selectedShip, shipAnimationService, dispatcher, menu, gridService)
{
  this._shipService = shipService;
  this._selectedShip = selectedShip;
  this._shipAnimationService = shipAnimationService;
  this._gridService = gridService;

  this._dispatcher = dispatcher;
  this._shipDeselectedCallback = null;
  this._routeChangedCallback = null;

  this._menu = menu;
};

model.inputAction.ShowMovementMenuOnRouteClick.prototype.onActivation = function(){
  this._shipDeselectedCallback = this._dispatcher.attach('ShipDeselectedEvent', this._onShipDeselected.bind(this));
  this._routeChangedCallback = this._dispatcher.attach('MovementRouteChanged', this._onRouteChanged.bind(this));
  this._menu.init();
};

model.inputAction.ShowMovementMenuOnRouteClick.prototype.onDeactivation = function(){
  this._dispatcher.detach('ShipDeselectedEvent', this._shipDeselectedCallback);
  this._dispatcher.detach('MovementRouteChanged', this._routeChangedCallback);
  this._menu.destroy();
};

model.inputAction.ShowMovementMenuOnRouteClick.prototype.onClick = function(event)
{
  var scenePosition = event.game;
  var ship = this._selectedShip.getShip();

  if ( ! ship)
    return;

  var routeIndex = this._shipAnimationService.findRouteSegmentOnPosition(ship, scenePosition);

  if (routeIndex !== null){
    var turn = this._shipAnimationService.getRouteTurnOnPosition(ship, scenePosition);
    var routeStep = ship.getMovement().getRouteByTurn(turn).getRoute()[routeIndex];
    var hexCenterPosition = this._gridService.resolveGameCoordinates(routeStep.getPosition().toOddR());
    
    this._menu.show(hexCenterPosition, ship, turn, routeIndex);
  }
  else
    this._menu.hide();
};

model.inputAction.ShowMovementMenuOnRouteClick.prototype._onShipDeselected = function(event){

};

model.inputAction.ShowMovementMenuOnRouteClick.prototype._onRouteChanged = function(event){
  /*
  var ship = this._selectedShip.getShip();
  if (event.ship == ship)
    this._menu.hide();
  */
};
