model.movement.MovementRadialMenu = function MovementRadialMenu(
  gameContainer,
  id,
  canvasDrawingTool,
  coordinateConverter,
  dispatcher,
  movingService,
  gridService){

  this._gameContainer = gameContainer;
  this._id = id;
  this._size = 300;
  this._canvasDrawingTool = canvasDrawingTool;
  this._coordinateConverter = coordinateConverter;
  this._movingService = movingService;
  this._gridService = gridService;
  this._dispatcher = dispatcher;
  
  this._buttons = this._getButtons();
  this._element = null;

  dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
  dispatcher.attach("ZoomEvent", this.onZoom.bind(this));

  this._scenePosition = null;
  this._ship = null;
  this._turn = null;
  this._routeIndex = null;
  this._direction = null;

  this._routeChangedCallback = this._dispatcher.attach('MovementRouteChanged', this._onRouteChanged.bind(this));

};

model.movement.MovementRadialMenu.prototype.init = function(){
  this._createElement();
};

model.movement.MovementRadialMenu.prototype.destroy = function(){
  this._dispatcher.detach('MovementRouteChanged', this._routeChangedCallback);
  this._element.remove()
};

model.movement.MovementRadialMenu.prototype._onRouteChanged = function(event)
{
    var ship = event.ship;
    if (ship != this._ship)
      return;

    var route = ship.getMovement().getRouteByTurn(this._turn).getRoute();

    if (this._routeIndex >= route.length){
      this.hide();
      return;
    }

    this._direction = route[this._routeIndex].getDirection();
    this._rotate();
    this._validateButtons();
};

model.movement.MovementRadialMenu.prototype.show = function(position, ship, turn, routeIndex)
{
    this._ship = ship;
    this._turn = turn;
    this._routeIndex = routeIndex;
    this._direction = ship.getMovement().getRouteByTurn(turn).getRoute()[routeIndex].getDirection();

    this._scenePosition = position;
    this._rePosition();
    this._rotate();
    this._validateButtons();
    this._element.show();
};

model.movement.MovementRadialMenu.prototype.hide = function()
{
    this._scenePosition = null;
    this._element.hide();
};

model.movement.MovementRadialMenu.prototype._rePosition = function()
{
    if ( ! this._scenePosition)
      return; 

    var pos = this._coordinateConverter.fromGameToViewPort(this._scenePosition);

    this._element
        .css("top", (pos.y) + "px")
        .css("left", (pos.x) + "px")
};

model.movement.MovementRadialMenu.prototype._rotate = function()
{
    var degree = this._direction * 60;
    var template = this._element;
    template.css('-webkit-transform', 'rotate('+degree+'deg)');
    template.css('transform', 'rotate('+degree+'deg)');
};

model.movement.MovementRadialMenu.prototype.onScroll = function(event){
  this._rePosition();
};

model.movement.MovementRadialMenu.prototype.onZoom = function(event){
  this._rePosition();
  return;

  var zoom = event.zoom;
  if (zoom < 0.3)
    zoom = 0.3;

  var template = this._element;
  template.css('-webkit-transform', 'scale('+zoom+','+zoom+')');
  template.css('transform', 'scale('+zoom+','+zoom+')');
};

model.movement.MovementRadialMenu.prototype._createElement = function()
{
  var parent = this._gameContainer.get();
  var container = jQuery('' +
      '<div id="'+this._id+'" class="movementRadialMenu" style="display:none;position:absolute;z-index:100;width:'+0+'px;height:'+0+'px"></div>');
  /*
  var drawingTool = this._canvasDrawingTool;
  var drawingCanvas =
      $('<canvas width="'+this._size+'px" height="'+this._size+'px"></canvas>');

  var halfSize = this._size/2;
  var context = drawingCanvas.get(0).getContext("2d");

  context.strokeStyle = "rgba(159,187,202,0)";
  context.fillStyle = "rgba(47,54,72,0.5)";

  //context.strokeStyle = "rgba(255,255,255,1)";
  //context.fillStyle = "rgba(255,255,255,0.5)";

  drawingTool.drawHollowCircleAndFill(context, halfSize, halfSize, halfSize*0.62, halfSize*0.95, 2);
  drawingCanvas.appendTo(container);
  */

  this._buttons.forEach(function(buttonAndDegree){
      var button = buttonAndDegree.button;
      var degree = buttonAndDegree.degree;

      button.get().appendTo(container);
      this._placeButton(button.get(), degree);
  }, this)

  container.appendTo(parent);
  this._element = container;
};

model.movement.MovementRadialMenu.prototype._validateButtons = function(){
  this._buttons.forEach(function(button){
    button.button.validate(this._ship, this._turn, this._routeIndex);
  }, this);
};

model.movement.MovementRadialMenu.prototype._getButtons = function()
{
  return [
    this._createButton('TR', '', 60, this._turnRight.bind(this), this._canTurnRight.bind(this)),
    this._createButton('TL', '', 300, this._turnLeft.bind(this), this._canTurnLeft.bind(this)),
    this._createButton('+', '', 0, this._accelerate.bind(this), this._canAccelerate.bind(this)),
    this._createButton('-', '', 180, this._deaccelerate.bind(this), this._canDeaccelerate.bind(this))
  ];
};

model.movement.MovementRadialMenu.prototype._createButton = function(text, background, degree, callback, validationCallback){
  return {
    button: new model.MovementButton(
      text, 
      callback,
      validationCallback,
      {
        background: background,
      }
    ),
    degree: degree
  };
};

model.movement.MovementRadialMenu.prototype._turnLeft = function()
{
  this._movingService.turnLeft(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._canTurnLeft = function()
{
  return this._movingService.canTurnLeft(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._turnRight = function()
{
  this._movingService.turnRight(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._canTurnRight = function()
{
  return this._movingService.canTurnRight(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._accelerate = function()
{
  this._movingService.accelerate(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._canAccelerate = function()
{
  return this._movingService.canAccelerate(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._deaccelerate = function()
{
  this._movingService.deaccelerate(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._canDeaccelerate = function()
{
  return this._movingService.canDeaccelerate(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._placeButton = function(button, angle)
{
  var halfSize = this._size/2;
  var distance = this._size*0.4;

  var pos = MathLib.getPointInDirection(distance, angle, halfSize, halfSize);
  button
      .css("top", (pos.y - 20 - halfSize) + "px")
      .css("left", (pos.x - 20 - halfSize) + "px");
};

