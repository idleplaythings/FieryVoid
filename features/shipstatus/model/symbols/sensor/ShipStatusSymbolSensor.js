model.ShipStatusSymbolSensor = function ShipStatusSymbolSensor(type, value)
{
	model.ShipStatusSymbol.call(this);
    this.set(type, value);
    this.deploymentPosition = 'top';
};

model.ShipStatusSymbolSensor.prototype =
	Object.create(model.ShipStatusSymbol.prototype);



model.ShipStatusSymbolSensor.prototype.getBest = function(value)
{
	return Object.keys(value).map(function(entry){
		return value[entry];
	}).sort().pop();
};

model.ShipStatusSymbolSensor.prototype.set = function(type, value)
{
    if (type == 'best')
    {
        this.size = {width:45, height:45};
        this.description ='';
        var best = this.getBest(value);

		this.displayOnModule = true;
		this.displayOnModuleView = false;
    
        this.createIconImage = this.createIconImageSensorOutput.bind(
            this, best);
    }
};

model.ShipStatusSymbolSensor.prototype.createIconImage = function()
{

};

model.ShipStatusSymbolSensor.prototype.createIconImageSensorOutput = function(efficiency)
{
	console.log("create sensor symbol");
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(255,255,255,1)";

    var center = {x:this.size.width/2, y:this.size.height/2};
    this.drawSensorSymbol(context, 20, center);

    context.lineWidth = 4;
    context.font = '14pt Helvetica';
    this.drawString(context, efficiency, center);

    return drawingCanvas;
};


model.ShipStatusSymbolSensor.prototype.drawSensorSymbol = function(context, size, center)
{
    context.beginPath();
    context.moveTo(center.x - size*0.3, center.y + size*0.3);
    context.lineTo(center.x - size, center.y - size*0.5);
    
    
    context.bezierCurveTo(
		center.x-size, center.y-size,
		center.x+size, center.y-size,
		center.x + size, center.y - size*0.5
	);
	
	
	//context.lineTo(center.x + size, center.y - size*0.8);
	
	context.lineTo(center.x + size*0.3, center.y + size*0.3);
	
	context.bezierCurveTo(
		center.x + size*0.3, center.y,
		center.x - size*0.3, center.y,
		center.x - size*0.3, center.y + size*0.3
	);
	
    context.closePath();
    this.strokeAndFillWithShadow(context);
    
    
    context.beginPath();
    context.arc(center.x, center.y+size*0.5, size*0.3, 0, 2*Math.PI);
	context.closePath();
	
    this.strokeAndFillWithShadow(context);
};
