model.ShipHtmlEntry = function ShipHtmlEntry(ship, clickCallback)
{
	this.ship = ship;
	this.clickCallback = clickCallback;
};

model.ShipHtmlEntry.prototype.update = function(ship)
{
	this.addShipName(ship);
	this.ship = ship;
	return this;
};

model.ShipHtmlEntry.prototype.render = function(target)
{	
	target.append(this.getTemplate());
    new model.ShipDesignIconOnCanvas(
		this.ship.shipDesign).drawTo(this.getTemplate());
	
	this.addShipName(this.ship);
	
    return this;
};

model.ShipHtmlEntry.prototype.equals = function(ship)
{
	return this.ship._id == ship._id;
};

model.ShipHtmlEntry.prototype.getTemplate = function()
{

	if ( ! this.template)
	{
		this.template = jQuery('<div class="ship selectable entry"></div>');
		this.template.on('click', function(e){this.clickCallback(this.ship);}.bind(this));
	}
	
	return this.template;
};

model.ShipHtmlEntry.prototype.addShipName = function(ship)
{
	var name = ship.name || ship.shipDesign.name;

	var template = this.getTemplate();
	
	if (jQuery('.name', template).length == 0)
	{
		this.getTemplate().append(
			'<div class="label name" style="font-weight: bold;"><input type="text" name="name" value=""></div>');
			
		var input = jQuery('.name input', template)
			.on('blur', this.onNameBlur.bind(this))
			.on("keyup", this.onNameKeyUp.bind(this))
			.on("click", function(e){e.stopPropagation();});
	}
	
	var input = jQuery('.name input', template);
	
	if (input.val() !== name)
		input.val(name)
};

model.ShipHtmlEntry.prototype.onNameBlur = function(event)
{
	var element = jQuery(event.currentTarget);
	var value = element.val();
	console.log(element);
	
	if (value === this.ship.name)
		return;
		
	console.log("name", value);
	Meteor.call('renameShip', this.ship._id, value);
};

model.ShipHtmlEntry.prototype.onNameKeyUp = function(event)
{
	switch(event.keyCode)
	{
		case 13: //enter
			jQuery(event.currentTarget).blur();
			break;
		case 27: //esc
			this.addShipName(this.ship);
			break;
	}
};

model.ShipHtmlEntry.prototype.remove = function()
{
	this.getTemplate().remove();
};

