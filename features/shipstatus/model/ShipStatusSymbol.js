model.ShipStatusSymbol = function ShipStatusSymbol(args)
{
	if ( ! args)
		args = {};

	this.size = args.size || 30;
	this.element = args.element || null;
};

model.ShipStatusSymbol.prototype.getHtmlElement = function()
{
	if ( ! this.element)
	{
		this.element = jQuery('<div class="shipstatussymbol"></div>');
	}
};