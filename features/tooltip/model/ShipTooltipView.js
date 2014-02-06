model.ShipTooltipView = function ShipTooltipView(target, dispatcher)
{
    model.TooltipView.call(this, target, dispatcher);
    this.currentShip = null;
    this.shipPosition = null;
    this.htmlClass = 'shiptooltipview';
};

model.ShipTooltipView.prototype = Object.create(model.TooltipView.prototype);


model.ShipTooltipView.prototype.display = function(
	ship, position)
{
    if (ship === null)
    {
        this.currentShip = null;
        this.hide();
        return;
    }

    if (ship == this.currentShip)
        return;

    this.currentShip = ship;

    var template = this.getTemplate();
    template.html('');
    template.append('<h4>'+ship.name+'</h4>');

	this.shipPosition = position;
    this.position(position);
};

model.ShipTooltipView.prototype.position = function(position)
{
    this.getTemplate().css(
        {
            'left': (position.x)+ 'px',
            'top': (position.y + 6*30 * this.zoom) + 'px'
        })
        .show();
};

model.ShipTooltipView.prototype.onZoom = function(event)
{
    this.zoom = event.zoom;
    if (this.currentShip)
		this.position(this.shipPosition);
};
