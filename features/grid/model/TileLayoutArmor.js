model.TileLayoutArmor = function TileLayoutArmor(ship)
{
    this._ship = ship;
    this.gridSize = 30;
    this._border = 3;
};

model.TileLayoutArmor.prototype.setShip = function(ship){
  this._ship = ship;
};

model.TileLayoutArmor.prototype.getImageData = function(tilePosition)
{
    var module = this._ship.getModuleOnPosition(tilePosition);
    var size  = this.gridSize;

    var drawingCanvas =
        $('<canvas width="'+size+'" height="'+size+'"></canvas>').get(0);
    var context = drawingCanvas.getContext("2d");

    var armors = getArmor(this._ship, tilePosition);

    setColor(context);

    if (armors.top){
      drawLine(context, 0, 0, size, 0, armors.top.getThickness());
    }  

    if (armors.right){
      drawLine(context, size, 0, size, size, armors.right.getThickness());
    }

    if (armors.bottom){
      drawLine(context, 0, size, size, size, armors.bottom.getThickness());
    }

    if (armors.left){
      drawLine(context, 0, 0, 0, size, armors.left.getThickness());
    }

    context.lineCap="square";
    context.stroke();
    
    return {data:context.getImageData(0, 0, this.gridSize, this.gridSize)};
};

var drawLine = function(context, x1, y1, x2, y2, thickness){
  context.lineWidth = thickness;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
};

var getArmor = function(ship, position){

  return {
    top: ship.getArmor(position, {x:position.x, y:position.y + 1}),
    right: ship.getArmor(position, {x:position.x+1, y:position.y}),
    bottom: ship.getArmor(position, {x:position.x, y:position.y - 1}),
    left: ship.getArmor(position, {x:position.x - 1, y:position.y}),
  }

};

var setColor = function(context){

  var strokeOpacity = '0.6';
  var fillOpacity = '0.4';

  context.strokeStyle = "rgba(255, 255, 255, "+strokeOpacity+")";
  context.fillStyle =   "rgba(255, 255, 255, "+fillOpacity+")";
 
};
