model.TileHull = function TileHull(hullLayout, args)
{
    if ( ! args)
        args = [];

    this.hullLayout = hullLayout;
    this.lineWidth = args.lineWidth || 2;
    this.color = args.color || "rgba(0,40,255,0.5)";
    this.fillColor = args.fillColor || "rgba(0,40,255,0.2)";
    this.gridSize = 30;
};


model.TileHull.prototype.getImageData = function(tilePosition)
{
    var drawingCanvas =
        $('<canvas width="'+this.gridSize+'" height="'+this.gridSize+'"></canvas>').get(0);
    var context = drawingCanvas.getContext("2d");

    var drawingTool = Tools.getCanvasDrawingTool();

    context.strokeStyle = "rgba(0,0,0,0.5)";
    context.lineWidth = this.lineWidth;

    var layout = this.hullLayout;

 
    if (layout.isDisabledTile(tilePosition))
    {
        return null;
    }
    else if (layout.isOutsideTile && layout.isOutsideTile(tilePosition))
    {
        context.strokeStyle = "rgba(184,30,13,0.5)";
        context.fillStyle = "rgba(184,30,13,0.2)";

    }
    else if (layout.getTileHeight && layout.getTileHeight(tilePosition) == 2)
    {
        context.strokeStyle = "rgba(0,200,255,0.5)";
        context.fillStyle = "rgba(0,200,255,0.2)";
    }
    else
    {
        context.strokeStyle = this.color;
        context.fillStyle = this.fillColor;
    }

    drawingTool.drawBox(
        context, 0, this.gridSize, this.gridSize, true);
    
    return {data:context.getImageData(0, 0, this.gridSize, this.gridSize)};
};
