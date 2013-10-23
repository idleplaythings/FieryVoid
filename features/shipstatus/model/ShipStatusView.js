model.ShipStatusView = function ShipStatusView(target, coordinateConverter, dispatcher)
{
	this.coordinateConverter = coordinateConverter;
	this.target = target;
    this.symbolResolver = new model.ShipStatusResolver();

	dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
    dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
};

model.ShipStatusView.prototype.display = function(shipIcon, modules)
{
    var template = this.getTemplate();
    this.clean();
    this.symbolResolver.setModules(modules);
    var position = this.coordinateConverter.fromGameToViewPort(shipIcon.getPosition());
    template.css('left', position.x +'px');
    template.css('top', position.y +'px');

    modules.forEach(function(module){
        this.createIcons(shipIcon, module, template);
    }, this);

};

model.ShipStatusView.prototype.createIcons = function(shipIcon, module, template)
{
    var symbols = this.symbolResolver.getSymbols(module);

    if (symbols.length == 0)
        return;

    this.resolveIconDeploymentZone(module, symbols);
    var modulePosition = shipIcon.getCustomModulePositionInIcon(module.getPosition());

    var num = 0;
    symbols.forEach(function(symbol){
        var position = this.getModulePosition(shipIcon, modulePosition, symbol);
        var element = symbol.getHtmlElement();
        symbol.getPlacementOffset(position);

        element.css({left: position.x + 'px', bottom: position.y +'px'});
        template.append(element);
        num++;
    }, this);
};

model.ShipStatusView.prototype.resolveIconDeploymentZone = function(module, symbols)
{
    symbols.forEach(function(symbol){
        if (symbol.deploymentPosition == "bottom")
            symbol.positionOnIcon = this.findValidTileFromBottom(module, symbol, symbols);
        else
            symbol.positionOnIcon = this.findValidTileFromTop(module, symbol, symbols);
    }, this);
};

model.ShipStatusView.prototype.symbolFits = function(module, symbol, position, symbols)
{
    for (var y = 0; y < symbol.iconSize.height; y++)
    {
        for (var x = 0; x < symbol.iconSize.width; x++)
        {
            var pos = {x:position.x + x, y:position.y + y};

            if (module.isOutOfBounds(pos) || module.isDisabledTile(pos) || module.isOutsideTile(pos))
                return false;

            var other = symbols.some(function(symbol){
                return symbol.occupiesPosition(pos);
            });

            if (other)
            {
                return false;
            }

        }
    }

    return true;

}

model.ShipStatusView.prototype.findValidTileFromBottom = function(module, symbol, symbols)
{
    for (var y = 0; y < module.getHeight(); y++)
    {
        for (var x = module.getWidth() -1 ; x >= 0; x--)
        {
            var pos = {x:x, y:y};
            if (this.symbolFits(module, symbol, pos, symbols))
                return pos;
        }
    }

    return {x:0, y:0};
};

model.ShipStatusView.prototype.findValidTileFromTop = function(module, symbol, symbols)
{
    for (var y = module.getHeight() - 1; y >=0; y--)
    {
        for (var x = 0; x < module.getWidth(); x++)
        {
            var pos = {x:x, y:y};
            if (this.symbolFits(module, symbol, pos, symbols))
                return pos;
        }
    }

    return {x:0, y:0};
};

model.ShipStatusView.prototype.getModulePosition = function(shipIcon, modulePosition, symbol)
{
    var position = {x:modulePosition.x, y:modulePosition.y};
    position.x += symbol.iconSize.width / 2 * 30;
    position.y += symbol.iconSize.height / 2 * 30;

    var moduleTilePos = symbol.positionOnIcon;

    position.x += moduleTilePos.x * 30;
    position.y += moduleTilePos.y * 30;
    return position;
    //return this.coordinateConverter.fromGameToViewPort(modulePosition);
};

model.ShipStatusView.prototype.onScroll = function(event)
{

};

model.ShipStatusView.prototype.onZoom = function(event)
{

};

model.ShipStatusView.prototype.show = function()
{
    this.getTemplate().show();
    return this;
};

model.ShipStatusView.prototype.hide = function()
{
    this.getTemplate().hide();
    return this;
};

model.ShipStatusView.prototype.getTemplate = function()
{
	var template = jQuery('#shipStatusViewParent', this.target);

	if (template.length == 0)
	{
		template = jQuery('<div id="shipStatusViewParent" style="position:absolute;left:0px;top:0px;width:1px;height:1px;"></div>').appendTo(this.target);
	}

	return template;
};

model.ShipStatusView.prototype.clean = function()
{
   jQuery('canvas', this.getTemplate()).remove();
};