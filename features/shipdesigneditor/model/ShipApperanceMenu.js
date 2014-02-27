model.ShipApperanceMenu = function ShipApperanceMenu()
{
    this.target = null;
    this.template = null;
    this.spectrum = null;
    this.shipDesign = null;
};

model.ShipApperanceMenu.prototype.init = function(target)
{
    this.target = target;
}

model.ShipApperanceMenu.prototype.create = function()
{
    if (this.spectrum)
    	return;

    this.spectrum = jQuery('#hullColor', this.target);

    if ( this.spectrum.length == 0)
    	this.spectrum = jQuery('<input id="hullColor" type="text" name="hullColor"/>').appendTo(this.target);

    var color = this.shipDesign ? this.shipDesign.getColor() : '0,0,0';

    this.spectrum.spectrum({
        color: "rgb("+color+")",
        preferredFormat: "rgb",
        showButtons: false,
        showInput: true,
        change: this.changeColor.bind(this)
    });

};

model.ShipApperanceMenu.prototype.setShipDesign  = function(shipDesign)
{
	this.shipDesign = shipDesign;
	this.create();
};

model.ShipApperanceMenu.prototype.changeColor  = function(color)
{
  var pattern = new RegExp(/^rgb\((.+)\)$/);
  var cleanColor = pattern.exec(color)[1];

  if ( ! this.shipDesign.validateVariable('hullColor', cleanColor))
     return false;

	this.shipDesign.updateIfDifferent('hullColor', cleanColor);
}

model.ShipApperanceMenu.prototype.hide = function(modules)
{
    this.target.hide();
    return this;
};

model.ShipApperanceMenu.prototype.show = function(modules)
{
    this.target.show();
    return this;
};

model.ShipApperanceMenu.prototype.update = function()
{
    return this;
};