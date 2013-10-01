model.ShipStatusView = function ShipStatusView(target, coordinateConverter, dispatcher)
{
	this.coordinateConverter = coordinateConverter;
	this.target = target;

	dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
    dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
};

model.ShipStatusView.prototype.display = function(shipDesign)
{
	var template = this.getTemplate();
	var position = this.coordinateConverter.fromGameToViewPort({x:0, y:0});
	template.css('left', position.x +'px');
	template.css('top', position.y +'px');

	var symbol = new model.ShipStatusSymbolPower().getHtmlElement();
	console.log(symbol);
	template.append(symbol);
};

model.ShipStatusView.prototype.onScroll = function(event)
{

};

model.ShipStatusView.prototype.onZoom = function(event)
{

};

model.ShipStatusView.prototype.getTemplate = function()
{
	var template = jQuery('#shipStatusViewParent', this.target);

	if (template.length == 0)
	{
		template = jQuery('<div id="shipStatusViewParent" style="position:absolute;width:1px;height:1px;"></div>').appendTo(this.target);
	}

	return template;
};