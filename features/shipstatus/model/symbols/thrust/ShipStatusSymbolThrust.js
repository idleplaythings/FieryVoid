model.ShipStatusSymbolThrust = function ShipStatusSymbolThrust(thrustGenerated, args)
{
    model.ShipStatusSymbol.call(this, args);
    this.deploymentPosition = 'top';
    this.size = {width:45, height:45};
    this.thrustGenerated = thrustGenerated;
    this.description = 'Generates ' + thrustGenerated + " thrust";

    this.iconSize = {width:1, height:1};
};

model.ShipStatusSymbolThrust.prototype =
    Object.create(model.ShipStatusSymbol.prototype);

model.ShipStatusSymbolThrust.prototype.createIconImage = function()
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(255,255,255,1)";

    this.drawThrustSymbol(context, 20, {x:this.size.width/2, y:this.size.height/2});

    return drawingCanvas;
};

model.ShipStatusSymbolThrust.prototype.drawThrustSymbol = function(context, size, center)
{
    context.beginPath();
    this.drawChewron(context, size*0.8, {x:center.x, y:center.y - size*0.4});
    this.drawChewron(context, size*0.8, center);
    this.drawChewron(context, size*0.8, {x:center.x, y:center.y + size*0.4});
    context.closePath();
    this.strokeAndFillWithShadow(context);

    this.drawString(context, this.thrustGenerated, center);


};

model.ShipStatusSymbolThrust.prototype.drawChewron = function(context, size, center)
{
    context.moveTo(center.x, center.y - size*0.5);
    context.lineTo(center.x - size, center.y);
    context.lineTo(center.x - size, center.y + size*0.5);
    context.lineTo(center.x, center.y);
    context.lineTo(center.x + size, center.y + size*0.5);
    context.lineTo(center.x + size, center.y);
    context.lineTo(center.x, center.y - size*0.5);
    this.strokeAndFillWithShadow(context);
};
