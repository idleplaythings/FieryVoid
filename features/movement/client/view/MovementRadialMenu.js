model.movement.MovementRadialMenu = function MovementRadialMenu(
  gameContainer,
  id,
  canvasDrawingTool,
  coordinateConverter,
  dispatcher,
  movingService){

  this._gameContainer = gameContainer;
  this._id = id;
  this._size = 900;
  this._canvasDrawingTool = canvasDrawingTool;
  this._coordinateConverter = coordinateConverter;
  this._movingService = movingService;
  
  this._buttons = this._getButtons();
  this._element = null;

  dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
  dispatcher.attach("ZoomEvent", this.onZoom.bind(this));

  this._scenePosition = null;
  this._ship = null;
  this._turn = null;
  this._routeIndex = null;

};

model.movement.MovementRadialMenu.prototype.init = function(){
  this._createElement();
};

model.movement.MovementRadialMenu.prototype.destroy = function(){
  this._element.remove()
};

model.movement.MovementRadialMenu.prototype.show = function(position, ship, turn, routeIndex)
{
    this._ship = ship;
    this._turn = turn;
    this._routeIndex = routeIndex;

    this._scenePosition = position;
    this._rePosition();
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
        .css("top", (pos.y - this._size/2) + "px")
        .css("left", (pos.x - this._size/2) + "px")
};

model.movement.MovementRadialMenu.prototype.onScroll = function(event){
  this._rePosition();
};

model.movement.MovementRadialMenu.prototype.onZoom = function(event){
  this._rePosition();

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
      '<div id="'+this._id+'" class="movementRadialMenu" style="position:absolute;z-index:100;width:'+this._size+'px;height:'+this._size+'px"></div>');

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

  this._buttons.forEach(function(buttonAndDegree){
      var button = buttonAndDegree.button;
      var degree = buttonAndDegree.degree;

      button.get().appendTo(container);
      this._placeButton(button.get(), degree);
  }, this)

  container.appendTo(parent);
  this._element = container;
};

model.movement.MovementRadialMenu.prototype._getButtons = function()
{
  return [
    this._createButton('TR', '', 60, this._turnRight.bind(this)),
    this._createButton('TL', '', 300, this._turnLeft.bind(this))
  ];
};

model.movement.MovementRadialMenu.prototype._createButton = function(text, background, degree, callback){
  return {
    button: new model.Button(
      text, 
      callback,
      {
        background: background,
      }
    ),
    degree: degree
  };
};

model.movement.MovementRadialMenu.prototype._turnLeft = function()
{
  console.log("turn left", this._movingService);
  this._movingService.turnLeft(this._ship, this._turn, this._routeIndex);
};

model.movement.MovementRadialMenu.prototype._turnRight = function()
{
};

model.movement.MovementRadialMenu.prototype._placeButton = function(button, angle)
{
    var halfSize = this._size/2;
    var distance = this._size/2 - 95;

    var pos = MathLib.getPointInDirection(distance, angle, halfSize, halfSize);
    button
        .css("top", (pos.y - 60) + "px")
        .css("left", (pos.x - 60) + "px");
};

