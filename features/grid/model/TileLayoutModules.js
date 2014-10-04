model.TileLayoutModules = function TileLayoutModules(ship)
{
    this._ship = ship;
    this.gridSize = 30;
    this._border = 3;
};

model.TileLayoutModules.prototype.getImageData = function(tilePosition)
{
    var module = this._ship.getModuleOnPosition(tilePosition);


    var drawingCanvas =
        $('<canvas width="'+this.gridSize+'" height="'+this.gridSize+'"></canvas>').get(0);
    var context = drawingCanvas.getContext("2d");

    if (! module)
      return {data:context.getImageData(0, 0, this.gridSize, this.gridSize)};

    var drawingTool = Tools.getCanvasDrawingTool();

    setColor(module, context);

    context.lineWidth = this.lineWidth;

    drawingTool.drawBox(
        context, 0, this.gridSize, this.gridSize, true, getPadding.call(this, module, tilePosition), true);
    
    return {data:context.getImageData(0, 0, this.gridSize, this.gridSize)};
};

var getPadding = function(module, position){

  return {
    top: getModuleBorder.call(this, module, {x:position.x, y:position.y + 1}),
    right: getModuleBorder.call(this, module, {x:position.x+1, y:position.y}),
    bottom: getModuleBorder.call(this, module, {x:position.x, y:position.y - 1}),
    left: getModuleBorder.call(this, module, {x:position.x - 1, y:position.y}),
  }

};

var getModuleBorder = function(module, position){
  var otherModule = this._ship.getModuleOnPosition(position);

  if ( ! otherModule || otherModule._id !== module._id){
    return this._border;
  }

  return 0;
};

var setColor = function(module, context){

  var strokeOpacity = '0.6';
  var fillOpacity = '0.4';

  if (module.isWeapon){
    context.strokeStyle = "rgba(242, 140, 128, "+strokeOpacity+")";
    context.fillStyle =   "rgba(242, 140, 128, "+fillOpacity+")";
  }
  else if (module.isThruster){
    context.strokeStyle = "rgba(242, 206, 128, "+strokeOpacity+")";
    context.fillStyle =   "rgba(242, 206, 128, "+fillOpacity+")";
  }
  else if (module.isEnergyProducer){
    context.strokeStyle = "rgba(128, 199, 242, "+strokeOpacity+")";
    context.fillStyle =   "rgba(128, 199, 242, "+fillOpacity+")";
  }
  else if (module.isScanner){
    context.strokeStyle = "rgba(212, 128, 242, "+strokeOpacity+")";
    context.fillStyle =   "rgba(212, 128, 242, "+fillOpacity+")";
  }
  else
  {
    context.strokeStyle = "rgba(50, 50, 50, 0.8)";
    context.fillStyle =   "rgba(50, 50, 50, 0.6)";
  }
};
