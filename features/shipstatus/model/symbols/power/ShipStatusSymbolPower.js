model.ShipStatusSymbolPower = function ShipStatusSymbolPower(powerStatus)
{
	model.ShipStatusSymbol.call(this);
    this.set(powerStatus);
    this.deploymentPosition = 'top';
};

model.ShipStatusSymbolPower.prototype =
	Object.create(model.ShipStatusSymbol.prototype);


model.ShipStatusSymbolPower.prototype.set = function(powerStatus)
{
    if (powerStatus instanceof model.PowerStatusPowerOutput)
    {
        this.size = {width:45, height:45};
        this.description =
            powerStatus.totalOutput
            + ' total power produced, '
            + powerStatus.unusedPower + ' unused.';

        this.createIconImage = this.createIconImagePowerOutput.bind(
            this, powerStatus.unusedPower);
    }

    if (powerStatus instanceof model.PowerStatusOffline)
    {
        this.description =
            'System offline, '
            + powerStatus.powerRequired + ' power required.';

        this.createIconImage = this.createIconOffline.bind(this);
    }

    if (powerStatus instanceof model.PowerStatusPowered)
    {
        this.description =
            'System online, '
                + powerStatus.powerConsumption + ' power consumed.';

        this.createIconImage = this.createIconPowered.bind(this);
    }
};

model.ShipStatusSymbolPower.prototype.createIconImage = function()
{

};

model.ShipStatusSymbolPower.prototype.createIconImagePowerOutput = function(unusedOutput)
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(255,255,255,1)";

    var center = {x:this.size.width/2, y:this.size.height/2};
    this.drawLightningSymbol(context, 20, center);

    context.lineWidth = 4;
    context.font = '14pt Helvetica';
    this.drawString(context, unusedOutput, center);

    return drawingCanvas;
};


model.ShipStatusSymbolPower.prototype.createIconPowered = function()
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(255,255,255,1)";

    this.drawLightningSymbol(context, 14, {x:this.size.width/2, y:this.size.height/2});

    return drawingCanvas;
};

model.ShipStatusSymbolPower.prototype.createIconOffline = function()
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(255,255,255,1)";
    context.fillStyle = "rgba(200,50,50,1)";

    this.drawLightningSymbol(context, 14, {x:this.size.width/2, y:this.size.height/2});

    return drawingCanvas;
};


model.ShipStatusSymbolPower.prototype.drawLightningSymbol = function(context, size, center)
{
    context.beginPath();
    context.moveTo(center.x + size*0.2, center.y - size);
    context.lineTo(center.x - size, center.y);
    context.lineTo(center.x - size*0.2, center.y);
    context.lineTo(center.x - size*0.2, center.y + size);
    context.lineTo(center.x + size, center.y);
    context.lineTo(center.x + size*0.2, center.y);
    context.closePath();

    this.strokeAndFillWithShadow(context);
};
