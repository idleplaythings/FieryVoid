model.ShipStatusSymbolPowerConsumer = function ShipStatusSymbolPowerConsumer(energyConsumed, args)
{
    model.ShipStatusSymbolPower.call(this, args);
    this.energyConsumed = energyConsumed;
    this.size = {width:30, height:30};
    this.iconSize = {width:1, height:1};
};

model.ShipStatusSymbolPowerConsumer.prototype =
    Object.create(model.ShipStatusSymbolPower.prototype);

model.ShipStatusSymbolPowerConsumer.prototype.createIconImage = function()
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(255,255,255,1)";

    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(255,138,119,0.9)";
    //context.fillStyle = "rgba(225,110,75,1)";

    context.strokeStyle = "rgba(255,255,255,1)";
    context.fillStyle = "rgba(200,50,50,1)";

    this.drawLightningSymbol(context, 14, {x:this.size.width/2, y:this.size.height/2});

    return drawingCanvas;
};
