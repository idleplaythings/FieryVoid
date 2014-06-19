model.inputAction.ShowMomevemenTooltipOnRouteMouseOver = function ShowMomevemenTooltipOnRouteMouseOver(
  shipService, selectedShip, shipAnimationService, dispatcher, coordinateConverter, movementTooltip, gridService)
{
  this._shipService = shipService;
  this._selectedShip = selectedShip;
  this._shipAnimationService = shipAnimationService;
  this._coordinateConverter = coordinateConverter;
  this._movementTooltip = movementTooltip;
  this._gridService = gridService;


  this._currentShip = null;
  this._mouseOveredIndex = null;
};

model.inputAction.ShowMomevemenTooltipOnRouteMouseOver.prototype.onActivation = function(){
};

model.inputAction.ShowMomevemenTooltipOnRouteMouseOver.prototype.onDeactivation = function(){

};

model.inputAction.ShowMomevemenTooltipOnRouteMouseOver.prototype.onMouseOut = function(){
  this._mouseOveredIndex = null;
  this._movementTooltip.hide();
};

model.inputAction.ShowMomevemenTooltipOnRouteMouseOver.prototype.onMouseMove = function(event)
{
  var scenePosition = event.game;
  var ship = this._selectedShip.getShip();

  if ( ! ship)
    return;

  var routeIndex = this._shipAnimationService.findRouteSegmentOnPosition(ship, scenePosition);

  if (this._mouseOveredIndex === routeIndex)
    return;

  this._mouseOveredIndex = routeIndex;

  if (this._mouseOveredIndex !== null){
    var turn = this._shipAnimationService.getRouteTurnOnPosition(ship, scenePosition);
    var route = ship.getMovement().getRouteByTurn(turn);
    var routeStep = route.getRoute()[routeIndex];
    var hexCenterPosition = this._gridService.resolveGameCoordinates(routeStep.getPosition().toOddR());

    var pos = this._coordinateConverter.fromGameToViewPort(hexCenterPosition);
    this._movementTooltip.display(ship, pos, route, routeIndex);
  }else{
    this._movementTooltip.hide();
  }
};
