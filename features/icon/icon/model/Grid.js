model.Grid = function Grid(tile)
{
    this.tile = tile;
    this.tileSize = 30;
    this.width = 0;
    this.height = 0;
};

model.Grid.prototype.getImageData = function()
{
    var width = this.tileSize * this.width;
    var height = this.tileSize * this.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);
    var context = drawingCanvas.getContext("2d");

    if (width === 0 || height === 0)
        return {data:context.createImageData(1, 1)};

    var pos = {x:0, y:0};

    for (var y = 0; y < this.height; y++)
    {
        for (var x = 0; x < this.width; x++)
        {
            var image = this.tile.getImageData({x:x, y:y});

            if (image)
            {
                context.putImageData(image.data, x*this.tileSize, (this.height-1-y)*this.tileSize);
            }
        }
    }

    return {data:context.getImageData(0, 0, width, height)};
};