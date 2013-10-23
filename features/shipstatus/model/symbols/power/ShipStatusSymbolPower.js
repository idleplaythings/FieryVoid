model.ShipStatusSymbolPower = function ShipStatusSymbolPower(powerGenerated, args)
{
	model.ShipStatusSymbol.call(this, args);
    this.deploymentPosition = 'top';
};

model.ShipStatusSymbolPower.prototype =
	Object.create(model.ShipStatusSymbol.prototype);


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
