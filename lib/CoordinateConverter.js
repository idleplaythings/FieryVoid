model.CoordinateConverter = function CoordinateConverter(
   containerDimensions,
   gridDimensions,
   tileSize)
{
    this.tileSize = tileSize;
    this.startPos = {
        x: (containerDimensions.width - (gridDimensions.width * tileSize))/2,
        y: (containerDimensions.height - (gridDimensions.height * tileSize))/2
    };
};

model.CoordinateConverter.prototype.convertWindowToGrid = function(pos)
{
    var endPos = {
        x: Math.floor((pos.x - this.startPos.x) / this.tileSize),
        y: Math.floor((pos.y - this.startPos.y) / this.tileSize)
    };

    return endPos;
};

model.CoordinateConverter.prototype.convertGridToCanvas = function(pos)
{
    var endPos = {
        x: Math.floor(pos.x * this.tileSize + this.startPos.x),
        y: Math.floor(pos.y * this.tileSize +  this.startPos.y)
    };

    return endPos;
};
