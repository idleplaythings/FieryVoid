model.TooltipView = function TooltipView(target, dispatcher)
{
    this.target = target;
    this.htmlClass = 'tooltip';
    
    this.zoom = 1.0;
    dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
};

model.TooltipView.prototype.display = function(
	module, position, shipStatus)
{
 
};

model.TooltipView.prototype.hide = function()
{
    this.getTemplate().hide();
};

model.TooltipView.prototype.onZoom = function(event)
{
    this.zoom = event.zoom;
};

model.TooltipView.prototype.position = function()
{
};

model.TooltipView.prototype.getTemplate = function()
{
    var template = jQuery('.tooltipView.'+ this.htmlClass, this.target);

    if (template.length == 0)
    {
        template = jQuery('<div class="tooltipView '+ this.htmlClass+'" style="display:none;position:absolute;left:0px;top:0px;"></div>').appendTo(this.target);
    }

    return template;
};
