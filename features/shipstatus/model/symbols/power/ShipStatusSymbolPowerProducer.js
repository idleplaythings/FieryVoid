model.ShipStatusSymbolPowerProducer = function ShipStatusSymbolPowerProducer(powerGenerated, args)
{
    model.ShipStatusSymbolPower.call(this, args);
    this.size = {width:50, height:50};
    this.powerGenerated = powerGenerated;

    this.iconSize = {width:2, height:2};
};

model.ShipStatusSymbolPowerProducer.prototype =
    Object.create(model.ShipStatusSymbolPower.prototype);

model.ShipStatusSymbolPowerProducer.prototype.createIconImage = function()
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(255,255,255,1)";

    var center = {x:this.size.width/2, y:this.size.height/2};
    this.drawLightningSymbol(context, 23, center);

    context.lineWidth = 4;
    context.font = '16pt Helvetica';
    this.drawString(context, this.powerGenerated, center);

    return drawingCanvas;
};
