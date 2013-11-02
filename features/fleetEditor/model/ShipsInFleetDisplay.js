model.ShipsInFleetDisplay = function ShipsInFleetDisplay(
	targetElement, shipClickCallback)
{
	this.targetElement = targetElement;
	this.shipIcons = [];
	this.shipClickCallback = shipClickCallback;
};

model.ShipsInFleetDisplay.prototype.display = function(ships)
{
	console.log("displaying ships");
	var existing = jQuery('.ship', this.targetElement);
	ships.forEach(function(ship){
		console.log(ship._id);
		
		if (this.updateIfExists(ship))
			return;
		
		var shipIcon = new model.ShipHtmlEntry(ship, this.shipClickCallback);
		shipIcon.render(this.targetElement);
		this.shipIcons.push(shipIcon);
	}, this);
	
	for(var i = this.shipIcons.length-1; i >= 0; i--)
	{
		var shipIcon = this.shipIcons[i];
		var found = ships.some(function(ship){
			return shipIcon.equals(ship);
		}, this);
		
		if ( ! found)
		{
			shipIcon.remove();
			this.shipIcons.splice(i, 1);
		};
	}
};

model.ShipsInFleetDisplay.prototype.updateIfExists = function(ship)
{
	return this.shipIcons.some(function(shipIcon){
		if (shipIcon.equals(ship))
		{
			shipIcon.update(ship);
			return true;
		};
		return false;
	});
};
