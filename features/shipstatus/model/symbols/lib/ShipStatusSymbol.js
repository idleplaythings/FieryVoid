if ( typeof model === 'undefined')
    model = {};

model.ShipStatusSymbol = function ShipStatusSymbol(args)
{
	if ( ! args)
		args = {};

	this.size = args.size || {width:30, height:30};


    this.offset = args.offset || {x:0, y:0};
	this.element = args.element || null;
    this.deploymentPosition = args.deploymentPosition || 'bottom';
    this.iconSize = args.iconSize || {width:1, height:1};
    this.positionOnIcon = null;
};

model.ShipStatusSymbol.prototype.getHtmlElement = function()
{
    if ( ! this.element)
    {
        this.element = jQuery(this.createIconImage());
    }

    return this.element;
};

model.ShipStatusSymbol.prototype.getPlacementOffset = function(position)
{
    position.x -= this.size.width/2 + this.offset.x;
    position.y -= this.size.height/2 + this.offset.y;
    return position;
};

model.ShipStatusSymbol.prototype.occupiesPosition = function(position)
{
    if (this.positionOnIcon === null)
        return false;

    for (var y = 0; y < this.iconSize.height; y++)
    {
        for (var x = 0; x < this.iconSize.width; x++)
        {
            var current = {
                x: this.positionOnIcon.x + x,
                y: this.positionOnIcon.y +y
            };

            if (position.x == current.x && position.y == current.y)
                return true;
        }
    }

    return false;
};

model.ShipStatusSymbol.prototype.drawString = function(context, text, center)
{
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.shadowColor = '#000';
    context.shadowBlur = 5;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.strokeText(text, center.x, center.y);
    context.fillText(text, center.x, center.y);
};

model.ShipStatusSymbol.prototype.strokeAndFillWithShadow = function(context)
{
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

model.ShipStatusSymbol.prototype.getCanvas = function()
{
    return jQuery('<canvas width="'+this.size.width+'" height="'+this.size.height+'"></canvas>').get(0);
};