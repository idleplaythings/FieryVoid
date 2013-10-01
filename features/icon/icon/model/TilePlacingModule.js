model.TilePlacingModule = function TilePlacingModule(shipDesign, args)
{
    if ( ! args)
        args = {};
    
    model.Tile.call(this, args);
    this.shipDesign = shipDesign;
    this.layout = args.layout || null;
    this.position = {x:0, y:0};
};

model.TilePlacingModule.prototype =  Object.create(model.Tile.prototype);

model.TilePlacingModule.prototype.setPosition = function(pos)
{
    this.position = pos;
};

model.TilePlacingModule.prototype.getImageData = function(tilePosition)
{
    if ( ! this.layout)
        throw new Error("Layout is not defined for TilePlacingModule");


    var drawingCanvas =
        $('<canvas width="'+this.gridSize+'" height="'+this.gridSize+'"></canvas>').get(0);
    var context = drawingCanvas.getContext("2d");

    var drawingTool = Tools.getCanvasDrawingTool();

    context.strokeStyle = "rgba(255,0,0,0.5)";
    context.fillStyle = "rgba(255,0,0,0.5)";

    if (this.layout.isValidTileForPosition(this.shipDesign, this.position, tilePosition))
        return null;

    drawingTool.drawBox(
        context, 0, this.gridSize, this.gridSize, true);
    
    return {data:context.getImageData(0, 0, this.gridSize, this.gridSize)};
};
