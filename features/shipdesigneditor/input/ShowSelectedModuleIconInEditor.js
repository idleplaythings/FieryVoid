model.inputAction.ShowSelectedModuleIconInEditor = function ShowSelectedModuleIconInEditor(dispatcher, icon, moduleContainer, shipContainer){
  this._dispatcher = dispatcher;

  this._positionService = null;
  this._moduleContainer = moduleContainer;
  this._shipContainer = shipContainer;

  this._moduleContainer.onChange(this.onModuleChange.bind(this));
  this._shipContainer.onChange(this.onShipChange.bind(this));

  this._selectedModuleIcon = icon;

  model.inputAction.ShipEditorInputAction.call(this);
  this.hide();
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype = Object.create(model.inputAction.ShipEditorInputAction.prototype);

model.inputAction.ShowSelectedModuleIconInEditor.prototype.onKeyUp = function(event){

  var key = event.key;

  if ( key instanceof model.Hotkey.Left)
  {
    this._turnModule("left");
  }
  else if ( key instanceof model.Hotkey.Right)
  {
    this._turnModule("right");
  }
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.onMouseMove = function(event){

  var module = this._moduleContainer.get();

  if ( ! module)
    return;

  var pos = this._getTileSnap(module, this._positionService.getClosestTilePositionInScene(event.game));
  var tile = this._positionService.getTileOnPosition(pos);

  var current = this._selectedModuleIcon.getPosition();

  if (pos.x == current.x && pos.y == current.y)
    return;

  var moduleLowerLeftCorner = this._getModuleOffset(module, tile);
  this._selectedModuleIcon.changePositionOnShipDesign(moduleLowerLeftCorner);
  this._selectedModuleIcon.setPosition(pos);
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.onActivation = function(event)
{
  var ship = this._shipContainer.get();

  if (ship)
    this._setShipDesign(ship.shipDesign);

  this._setModule(this._moduleContainer.get());
  
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.onDeactivation = function(event)
{
  this.hide();
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.onMouseOver = function(event)
{
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.onMouseOut = function(event)
{
  this.hide();
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.onModuleChange = function(event){
  var module = event.payload;
  this._setModule(module);
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype._setModule = function(module){
  if ( ! module)
    return;

  console.log(module);
  this._selectedModuleIcon.create(module);
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.onShipChange = function(event){
  var ship = event.payload;

  if ( ! ship)
    return;


  this._setShipDesign(ship.shipDesign);
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype._setShipDesign = function(shipDesign){
  if ( ! shipDesign)
    return;

  console.log(shipDesign);
  this._positionService = new model.ShipDesignPositionService(shipDesign);
  this._selectedModuleIcon.setShipDesign(shipDesign);
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.hide = function(shipDesign)
{
  this._selectedModuleIcon.setPosition({x:100000, y:100000});
  this._selectedModuleIcon.hide();
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype.show = function(shipDesign)
{
  this._selectedModuleIcon.show();
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype._getTileSnap = function(module, pos)
{
    var scale = 30;

    var snap = {x:pos.x, y:pos.y};

    if (module.getWidth() % 2 == 1)
        snap.x += scale/2;

    if (module.getHeight() % 2 == 1)
        snap.y += scale/2;

    return snap;
};


model.inputAction.ShowSelectedModuleIconInEditor.prototype._turnModule = function(direction)
{
    var module = this._moduleContainer.get();

    if ( ! module)
        return;

    console.log("turn")

    var newDirection = this._getNewModuleDirection(module, direction);

    if (newDirection == module.direction)
      return;

    module.setDirection(newDirection);
    this._setModule(module);
};

model.inputAction.ShowSelectedModuleIconInEditor.prototype._getNewModuleDirection = function(module, direction)
{
    var allowed = module.allowedDirections;
    var currentDirection = module.direction;

    if (direction == 'right')
    {
        if (currentDirection >= allowed.length)
            return allowed[0];

        return allowed[currentDirection];
    }
    else
    {
        if (currentDirection == 1)
            return allowed[allowed.length-1];

        return allowed[currentDirection-2];
    }
};