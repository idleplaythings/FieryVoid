model.ShipDisplayPlacingModule = function ShipDisplayPlacingModule(
    ship, target, canvasClass, module, pos)
{
    model.ShipDisplay.call(this, target, canvasClass);

    var image = module.image.getDefault() ;
    this.img = new model.CompositeImageModule({
        imageSrc: image,
        rotation: module.getRotation()
    });

    this.ship = ship;
    this.module = module;
    this.pos = pos;
    this.drawingTool = window.Tools.getCanvasDrawingTool();
}

model.ShipDisplayPlacingModule.prototype = Object.create(model.ShipDisplay.prototype);

model.ShipDisplayPlacingModule.prototype.start = function()
{
    this.img.getImageDataToCallback(jQuery.proxy(this.receiveImageData, this));
};

model.ShipDisplayPlacingModule.prototype.drawImage = function()
{
    if (! this.image || ! this.image.data)
        return;

    var context = this.getContext();

    var dimensions = this.getDimensions();
    context.clearRect(0, 0, dimensions.width, dimensions.height);
    var data = this.image.data;

    var width = data.width;
    var height = data.height;
    var gridSize = this.calculateGridSize();

    var zoom = this.calculateZoomForFit({width:width, height:height});


    var pos = this.getCanvasPosition(this.pos);

    //this.context.putImageData(data, 0, 0);
    window.Tools.getCanvasDrawingTool().resizeImageDataAndDraw(
        context, pos, data, zoom);

    console.log(this.pos);
    console.log("hi");
    for (var x = 0; x < this.module.getWidth(); x++)
    {
        for (var y = 0; y < this.module.getHeight(); y++)
        {
            console.log((this.pos.x+x) + "," + (this.pos.y-y));
            //if ( ! this.module.isValidTileForPosition(this.ship, this.pos, {x:x, y:y}))
            //{
                var currentPos = this.getCanvasPosition(
                    {x: this.pos.x + x, y: this.pos.y - y});

                context.strokeStyle = "rgba(255,0,0,0.5)";
                context.fillStyle = "rgba(255,0,0,0.5)";
                this.drawingTool.drawBox(
                    context, currentPos.x, currentPos.y, gridSize, true
                );

            //}
        }
    }

    this.flushBuffer();
};