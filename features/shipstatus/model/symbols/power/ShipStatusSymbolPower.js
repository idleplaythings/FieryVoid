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

    context.shadowColor = '#000';
    context.shadowBlur = 5;
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.fill();
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.stroke();

};
