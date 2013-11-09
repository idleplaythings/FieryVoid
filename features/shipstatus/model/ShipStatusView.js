model.ShipStatusView = function ShipStatusView(target, coordinateConverter, dispatcher)
{
	this.coordinateConverter = coordinateConverter;
	this.moduleView = new model.ModuleDetailView(target);
	this.target = target;
    this.shipIcon = null;
    this.hidden = false;
    this.targetId = null;
    this.dragging = false;
    
    this.symbols = [];

	dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
    dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
};

model.ShipStatusView.prototype.display = function(shipIcon, shipStatus)
{
    this.shipIcon = shipIcon;
    this.positionStatusView();
    var template = this.getTemplate();
    this.clean();
   
    shipStatus.modules.forEach(function(module){
        this.createIcons(shipStatus, shipIcon, module, template);
    }, this);

    return this;
};

model.ShipStatusView.prototype.displayModuleView = 
	function(module, modulePos, status)
{
    if (this.hidden || this.dragging)
		return;
		
	this.moduleView.display(module, modulePos, status);
};

model.ShipStatusView.prototype.unsetShipIcon = function()
{
    this.shipIcon = null;
};

model.ShipStatusView.prototype.positionStatusView = function()
{
    if ( ! this.shipIcon)
        return;

    var template = this.getTemplate();
    var position = this.coordinateConverter.fromGameToViewPort(this.shipIcon.getPosition());
    template.css('left', position.x +'px');
    template.css('top', position.y +'px');
};

model.ShipStatusView.prototype.createIcons = function(shipStatus, shipIcon, module, template)
{
    var symbols = shipStatus.getSymbols(module);
    
	symbols.forEach(function(symbol){
		symbol.enableDrag(
			this.onDragStart.bind(this),
			this.onDragEnd.bind(this)
		);
	}, this);
	
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
    
    this.symbols = this.symbols.concat(symbols);
};

model.ShipStatusView.prototype.onDragStart = function(
	event, draggedSymbol)
{
	this.dragging = true;
	this.moduleView.display(null);
	
	this.symbols.forEach(function(symbol){
		if (symbol.allowDrop(draggedSymbol))
			symbol.show();
		else
			symbol.getHtmlElement().css('opacity', '0.5');
	});
};

model.ShipStatusView.prototype.onDragEnd = function()
{
	this.dragging = false;
	this.symbols.forEach(function(symbol){
		if (symbol.dropTarget)
			symbol.hide();
		else
			symbol.getHtmlElement().css('opacity', '1.0');
	});
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

    var shipFacing = shipIcon.getAzimuth();

    position = MathLib.turnVector(position, shipFacing);

    return position;
    //return this.coordinateConverter.fromGameToViewPort(modulePosition);
};

model.ShipStatusView.prototype.onScroll = function(event)
{
    this.positionStatusView();
};

model.ShipStatusView.prototype.onZoom = function(event)
{

};

model.ShipStatusView.prototype.show = function()
{
    this.getTemplate().show();
    this.hidden = false;
    return this;
};

model.ShipStatusView.prototype.hide = function()
{
    this.getTemplate().hide();
    this.hidden = true;
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
