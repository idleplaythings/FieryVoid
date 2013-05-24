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

model.CoordinateConverter.prototype.convert = function(pos)
{
    var endPos = {
        x: Math.floor((pos.x - this.startPos.x) / this.tileSize),
        y: Math.floor((pos.y - this.startPos.y) / this.tileSize)
    };

    if (endPos.x < 0 || endPos.y < 0)
        return null;

    return endPos;
};
