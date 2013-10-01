model.ShipStatusSymbolPower = function ShipStatusSymbolPower(args)
{
	model.ShipStatusSymbol.call(this, args);
	this.size = 50;
};

model.ShipStatusSymbolPower.prototype =
	Object.create(model.ShipStatusSymbol.prototype);

model.ShipStatusSymbolPower.prototype.getHtmlElement = function()
{
	if ( ! this.element)
	{
		this.element = jQuery('<div class="shipstatussymbol"></div>');
		this.element.append(this.createIconImage());
	}

	return this.element;
};

model.ShipStatusSymbolPower.prototype.createIconImage = function()
{
	var drawingCanvas =
        $('<canvas width="'+this.size+'" height="'+this.size+'"></canvas>').get(0);
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 4;
    //context.strokeStyle = "rgba(255,255,255,1)";
    context.strokeStyle = "rgba(0,0,0,1)";

    context.fillStyle = "rgba(255,255,255,1)";
    //context.fillStyle = "rgba(0,0,0,1)";

  	var size = this.size/2*0.9;
    var center = {x:this.size/2, y:this.size/2};

    context.beginPath();
    context.moveTo(center.x + size*0.2, center.y - size);
    context.lineTo(center.x - size, center.y);
    context.lineTo(center.x - size*0.2, center.y);
    context.lineTo(center.x - size*0.2, center.y + size);
    context.lineTo(center.x + size, center.y);
    context.lineTo(center.x + size*0.2, center.y);

   	context.closePath();
    context.stroke();
    context.fill();

    context.lineWidth = 4;
    context.font = '16pt Helvetica';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
     context.shadowColor = '#000';
      context.shadowBlur = 5;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
    context.strokeText('16', center.x, center.y);
    context.fillText('16', center.x, center.y);

    return drawingCanvas;
};
