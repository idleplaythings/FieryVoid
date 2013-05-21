model.ShipDisplayGrid = function ShipDisplayGrid(layout, target)
{
    model.ShipDisplay.call(this, layout, target);

    this.drawingTool = window.Tools.getCanvasDrawingTool();
    this.drawImage();
}

model.ShipDisplayGrid.prototype = Object.create(model.ShipDisplay.prototype);

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
    var gridSize = this.calculateGridSize(gridWidth, gridHeight);

    var width = gridSize * gridWidth;
    var height = gridSize * gridHeight;

    var pos = {
        x: (dimensions.width - width)/2,
        y: (dimensions.height - height)/2
    };

    this.context.strokeStyle = "rgba(0,0,0,0.5)";
    for (var y = 0; y < gridHeight; y++)
    {
        for (var x = 0; x < gridWidth; x++)
        {
            if (x === 0 && y === 0)
            {
                this.drawingTool.drawBox(
                    this.context, x*gridSize + pos.x, y*gridSize + pos.y, gridSize
                );
            }
            else if (x === 0)
            {
                this.drawingTool.drawHalfBoxWithSide(
                    this.context, x*gridSize + pos.x, y*gridSize + pos.y, gridSize
                );
            }
            else if (y === 0)
            {
                this.drawingTool.drawHalfBoxWithTop(
                    this.context, x*gridSize + pos.x, y*gridSize + pos.y, gridSize
                );
            }
            else
            {
                this.drawingTool.drawHalfBox(
                    this.context, x*gridSize + pos.x, y*gridSize + pos.y, gridSize
                );
            }
        }
    }
};

