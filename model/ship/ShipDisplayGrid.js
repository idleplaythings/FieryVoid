model.ShipDisplayGrid = function ShipDisplayGrid(layout, target)
{
    model.ShipDisplay.call(this, layout, target);

    this.drawingTool = window.Tools.getCanvasDrawingTool();
}

model.ShipDisplayGrid.prototype = Object.create(model.ShipDisplay.prototype);

model.ShipDisplayGrid.prototype.start = function()
{
    this.drawImage();
}

model.ShipDisplayGrid.prototype.drawImage = function()
{
    var dimensions = this.getDimensions();
    this.context.clearRect(0, 0, dimensions.width, dimensions.height);
    var zoom = this.calculateZoomForFit({
        width:dimensions.width,
        height:dimensions.height
    });

    var gridWidth = this.layout.width;
    var gridHeight = this.layout.height;
    var gridSize = this.calculateGridSize();

    var width = gridSize * gridWidth;
    var height = gridSize * gridHeight;

    var pos = {
        x: (dimensions.width - width)/2,
        y: (dimensions.height - height)/2
    };


    var lineWidth = 2;

    this.context.strokeStyle = "rgba(0,0,0,0.5)";
    this.context.lineWidth = lineWidth;

    for (var y = 0; y < gridHeight; y++)
    {
        for (var x = 0; x < gridWidth; x++)
        {

            if (this.layout.isDisabledTile({x:x, y:y}))
            {
                continue;
                //this.context.strokeStyle = "rgba(184,30,13,0.5)";
            }
            else
            {
                this.context.strokeStyle = "rgba(0,40,255,0.3)";
            }
            this.drawingTool.drawBox(
                this.context, x*gridSize + pos.x - lineWidth/2, y*gridSize + pos.y - lineWidth/2, gridSize-lineWidth
            );
        }
    }
};

model.ShipDisplayGrid.prototype.getClickedTile = function(pos)
{
    return this.getCoordinateTool().convert(pos);
};

model.ShipDisplayGrid.prototype.getCoordinateTool = function()
{
    var gridWidth = this.layout.width;
    var gridHeight = this.layout.height;

    return new model.CoordinateConverter(
        this.getDimensions(),
        {width: gridWidth, height: gridHeight},
        this.calculateGridSize()
    );
};


