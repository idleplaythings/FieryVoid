model.inputAction.SelectMovementStepOnClick = function SelectMovementStepOnClick(shipService, selectedShip, shipAnimationService, dispatcher)
{
  this._shipService = shipService;
  this._selectedShip = selectedShip;
  this._shipAnimationService = shipAnimationService;
  this._currentShip = null;
  this._mouseOverHighLight = null;
  this._clickHighlight = null;

  this._dispatcher = dispatcher;
  this._shipSelectedCallback = null;
  this._shipDeselectedCallback = null;
};

model.inputAction.SelectMovementStepOnClick.prototype.onActivation = function(){
  this._shipSelectedCallback = this._dispatcher.attach('ShipSelectedEvent', this._onShipSelected.bind(this));
  this._shipDeselectedCallback = this._dispatcher.attach('ShipDeselectedEvent', this._onShipDeselected.bind(this));
};

model.inputAction.SelectMovementStepOnClick.prototype.onDeactivation = function(){
  this._unHighlightCurrent();
  this._dispatcher.detach('ShipSelectedEvent', this._shipSelectedCallback);
  this._dispatcher.detach('ShipDeselectedEvent', this._shipDeselectedCallback);
};

model.inputAction.SelectMovementStepOnClick.prototype.onClick = function(event)
{
  var scenePosition = event.game;
  var ship = this._getCurrentShip();

  if ( ! ship)
    return;

  var routeIndex = this._shipAnimationService.findRouteSegmentOnPosition(ship, scenePosition);

  if (this._clickHighlight === routeIndex)
    return;

  var toUnHighlight = this._clickHighlight;
  this._clickHighlight = routeIndex;

  if (this._clickHighlight !== null)
    this._shipAnimationService.highlightRouteSegment(ship, routeIndex);

  this._unHighlight(ship, toUnHighlight);
};

model.inputAction.SelectMovementStepOnClick.prototype.onMouseMove = function(event)
{
  var scenePosition = event.game;
  var ship = this._getCurrentShip();

  if ( ! ship)
    return;

  var routeIndex = this._shipAnimationService.findRouteSegmentOnPosition(ship, scenePosition);

  if (this._mouseOverHighLight === routeIndex)
    return;

  var toUnHighlight = this._mouseOverHighLight;
  this._mouseOverHighLight = routeIndex;

  if (this._mouseOverHighLight !== null)
    this._shipAnimationService.highlightRouteSegment(ship, this._mouseOverHighLight);

  this._unHighlight(ship, toUnHighlight);
};

model.inputAction.SelectMovementStepOnClick.prototype._getCurrentShip = function(ship, index){

  if ( ! this._currentShip)
    this._currentShip = this._selectedShip.getShip();
  
  return this._currentShip;
};

model.inputAction.SelectMovementStepOnClick.prototype._onShipDeselected = function(event){
  this._unHighlightCurrent();
};

model.inputAction.SelectMovementStepOnClick.prototype._onShipSelected = function(event){
  this._currentShip = event.payload;
};

model.inputAction.SelectMovementStepOnClick.prototype._unHighlightCurrent = function(){
  
  if ( ! this._currentShip)
    return;

  if (this._clickHighlight)
    this._shipAnimationService.unhighlightRouteSegment(this._currentShip, this._clickHighlight);

  if (this._mouseOverHighLight)
    this._shipAnimationService.unhighlightRouteSegment(this._currentShip, this._mouseOverHighLight);

  this._clickHighlight = null;
  this._mouseOverHighLight = null;
};

model.inputAction.SelectMovementStepOnClick.prototype._unHighlight = function(ship, index){
  if (index === null || this._mouseOverHighLight === index || this._clickHighlight === index )
    return;

  this._shipAnimationService.unhighlightRouteSegment(ship, index);
};