model.TileLayout = function TileLayout(args)
{
    if ( ! args)
        args = {};
    
    model.Tile.call(this, args);
    this.layout = args.layout || null;
};

model.TileLayout.prototype =  Object.create(model.Tile.prototype);

model.TileLayout.prototype.getImageData = function(tilePosition)
{
    if ( ! this.layout)
        throw new Error("Layout is not defined for TileLayout");


    var drawingCanvas =
        $('<canvas width="'+this.gridSize+'" height="'+this.gridSize+'"></canvas>').get(0);
    var context = drawingCanvas.getContext("2d");

    var drawingTool = Tools.getCanvasDrawingTool();

    context.strokeStyle = "rgba(0,0,0,0.5)";
    context.lineWidth = this.lineWidth;

 
    if (this.layout.isDisabledTile(tilePosition))
    {
        return null;
    }
    else if (this.layout.isOutsideTile && this.layout.isOutsideTile(tilePosition))
    {
        context.strokeStyle = "rgba(184,30,13,0.5)";
        context.fillStyle = "rgba(184,30,13,0.2)";

    }
    else if (this.layout.getTileHeight && this.layout.getTileHeight(tilePosition) == 2)
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
