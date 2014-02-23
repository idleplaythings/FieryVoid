model.CoordinateConverter = function CoordinateConverter(
   containerDimensions,
   gridDimensions,
   tileSize)
{
    this.tileSize = tileSize;
    this.startPos = {
        x: (containerDimensions.width - (gridDimensions.width * tileSize))/2,
        //y: (containerDimensions.height - (gridDimensions.height * tileSize))/2
        y: containerDimensions.height - ((containerDimensions.height - (gridDimensions.height * tileSize))/2)
    };
};

model.CoordinateConverter.prototype.convertWindowToGrid = function(pos)
{
    var endPos = {
        x: Math.floor((pos.x - this.startPos.x) / this.tileSize),
        y: Math.floor((this.startPos.y - pos.y) / this.tileSize)
    };

    //pos.y = 20;
    //tartPos.y = 375;
    return endPos;
};

model.CoordinateConverter.prototype.convertGridToCanvas = function(pos)
{
    var endPos = {
        x: Math.floor(pos.x * this.tileSize + this.startPos.x),
        y: Math.floor(this.startPos.y - pos.y * this.tileSize)
    };

    return endPos;
};
