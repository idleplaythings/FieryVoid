model.ew.EWRadialMenu = function EWRadialMenu(
  gameContainer,
  id,
  canvasDrawingTool,
  coordinateConverter,
  dispatcher,
  EWService,
  gridService){

  this._gameContainer = gameContainer;
  this._id = id;
  this._size = 300;
  this._canvasDrawingTool = canvasDrawingTool;
  this._coordinateConverter = coordinateConverter;
  this._EWService = EWService;
  this._gridService = gridService;
  this._dispatcher = dispatcher;
  
  this._buttons = this._getButtons();
  this._element = null;

  dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
  dispatcher.attach("ZoomEvent", this.onZoom.bind(this));

  this._scenePosition = null;
  this._ownerShip = null;
  this._targetShip = null;
  this._turn = null;
  this._routeIndex = null;
  this._direction = null;

  this._EWChangedCallback = this._dispatcher.attach('EWChanged', this._onEWChanged.bind(this));

};

model.ew.EWRadialMenu.prototype.init = function(){
  this._createElement();
};

model.ew.EWRadialMenu.prototype.destroy = function(){
  this._dispatcher.detach('EWChanged', this._EWChangedCallback);
  this._element.remove()
};

model.ew.EWRadialMenu.prototype._onEWChanged = function(event)
{
    var ship = event.ship;
    if (ship != this._ship)
      return;

    this._validateButtons();
};

model.ew.EWRadialMenu.prototype.show = function(position, owner, target, turn)
{
    this._ownerShip = owner;
    this._targetShip = target;
    this._turn = turn;
    this._scenePosition = position;
    this._rePosition();
    this._validateButtons();
    this._element.show();
};

model.ew.EWRadialMenu.prototype.hide = function()
{
    this._scenePosition = null;
    this._element.hide();
};

model.ew.EWRadialMenu.prototype._rePosition = function()
{
    if ( ! this._scenePosition)
      return; 

    var pos = this._coordinateConverter.fromGameToViewPort(this._scenePosition);

    this._element
        .css("top", (pos.y) + "px")
        .css("left", (pos.x) + "px")
};

model.ew.EWRadialMenu.prototype.onScroll = function(event){
  this._rePosition();
};

model.ew.EWRadialMenu.prototype.onZoom = function(event){
  this._rePosition();
};

model.ew.EWRadialMenu.prototype._createElement = function()
{
  var parent = this._gameContainer.get();
  var container = jQuery('' +
      '<div id="'+this._id+'" class="radialMenu" style="display:none;position:absolute;z-index:100;width:'+0+'px;height:'+0+'px"></div>');

  this._buttons.forEach(function(buttonAndDegree){
      var button = buttonAndDegree.button;
      var degree = buttonAndDegree.degree;

      button.get().appendTo(container);
      this._placeButton(button.get(), degree);
  }, this)

  container.appendTo(parent);
  this._element = container;
};

model.ew.EWRadialMenu.prototype._validateButtons = function(){
  this._buttons.forEach(function(button){
    button.button.validate();
  }, this);
};

model.ew.EWRadialMenu.prototype._getButtons = function()
{
  return [
    this._createButton('+ OEW', '', 60, increaseOEW.bind(this), canIncreaseOEW.bind(this)),
    this._createButton('- OEW', '', 300, decreaseOEW.bind(this), canDecreaseOEW.bind(this)),
  ];
};

model.ew.EWRadialMenu.prototype._createButton = function(text, background, degree, callback, validationCallback){
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

model.ew.EWRadialMenu.prototype._placeButton = function(button, angle)
{
  var halfSize = this._size/2;
  var distance = this._size*0.4;

  var pos = MathLib.getPointInDirection(distance, angle, halfSize, halfSize);
  button
      .css("top", (pos.y - 20 - halfSize) + "px")
      .css("left", (pos.x - 20 - halfSize) + "px");
};

var increaseOEW = function(){

};

var canIncreaseOEW = function(){
  return true;
};

var decreaseOEW = function(){

};

var canDecreaseOEW = function(){
  return true;
};