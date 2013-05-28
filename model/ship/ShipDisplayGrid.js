model.ShipDisplayGrid = function ShipDisplayGrid(target, canvasClass, settings)
{
    model.ShipDisplay.call(this, target, canvasClass);

    if ( ! settings)
        settings = {};

    this.color = settings.color || "rgba(0,40,255,0.3)";
    this.width = settings.width || 2;

    this.drawingTool = window.Tools.getCanvasDrawingTool();
}

model.ShipDisplayGrid.prototype = Object.create(model.ShipDisplay.prototype);

model.ShipDisplayGrid.prototype.start = function(ship)
{
    this.ship = ship;
    this.drawImage();
};

model.ShipDisplayGrid.prototype.drawImage = function()
{
    var dimensions = this.getDimensions();
    var context = this.getContext();

    context.clearRect(0, 0, dimensions.width, dimensions.height);
    var zoom = this.calculateZoomForFit({
        width:dimensions.width,
        height:dimensions.height
    });

    var gridWidth = this.ship.hullLayout.width;
    var gridHeight = this.ship.hullLayout.height;
    var gridSize = this.calculateGridSize();

    var width = gridSize * gridWidth;
    var height = gridSize * gridHeight;

    var pos = {
        x: (dimensions.width - width)/2,
        y: (dimensions.height - height)/2
    };


    var lineWidth = this.width;
    var offset = Math.floor(this.width/2);

    context.strokeStyle = "rgba(0,0,0,0.5)";
    context.lineWidth = lineWidth;

    var layout = this.ship.hullLayout;

    for (var y = 0; y < gridHeight; y++)
    {
        for (var x = 0; x < gridWidth; x++)
        {

            if (layout.isDisabledTile({x:x, y:y}))
            {
                continue;
            }
            else if (layout.isOutsideTile && layout.isOutsideTile({x:x, y:y}))
            {
                context.strokeStyle = "rgba(184,30,13,0.5)";
            }
            else
            {
                context.strokeStyle = this.color;
            }
            this.drawingTool.drawBox(
                context, x*gridSize + pos.x + offset, y*gridSize + pos.y + offset, gridSize-lineWidth
            );
        }
    }

    this.flushBuffer();
};