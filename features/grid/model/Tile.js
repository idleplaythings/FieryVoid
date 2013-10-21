model.Tile = function Tile(args)
{
    if ( ! args)
        args = [];

    this.lineWidth = args.lineWidth || 2;
    this.color = args.color || "rgba(0,40,255,0.5)";
    this.fillColor = args.fillColor || "rgba(0,40,255,0.2)";
    this.gridSize = 30;
};


model.Tile.prototype.getImageData = function(tilePosition)
{
};
