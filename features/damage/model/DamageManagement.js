model.DamageManagement = function DamageManagement(
	modules, timeline, ship, power, crew)
{
	this.modules = modules;
	this.timeline = timeline;
	this.ship = ship;
};

model.DamageManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.DamageManagement.prototype.generateDamageLookup = function()
{
	var width = this.ship.shipDesign.hullLayout.width;
	var height = this.ship.shipDesign.hullLayout.height;
	
	var canvas = document.createElement('canvas');
	var imageData = canvas.getContext('2d').createImageData(width, height);
	

	for (var x = 0; x < width; x++)
	{
		for (var y = 0; y < height; y++)
		{
			this.setTile(imageData, {x:x, y:y, w:width, h:height}, 0, 0, 0);
		}
	}

	this.setTile(imageData, {x:12, y:1, w:width, h:height}, 1, 12, 1);
	this.setTile(imageData, {x:12, y:2, w:width, h:height}, 1, 12, 1);
	this.setTile(imageData, {x:13, y:2, w:width, h:height}, 1, 12, 1);
	this.setTile(imageData, {x:12, y:3, w:width, h:height}, 1, 12, 1);
	this.setTile(imageData, {x:5, y:1, w:width, h:height}, 1, 12, 1);
	this.setTile(imageData, {x:5, y:7, w:width, h:height}, 1, 12, 1);
	this.ship.getIcon().setDamageLookup('hull', imageData);
};

model.DamageManagement.prototype.setTile = function(imageData, position, texture, brush, z)
{
	var i = (position.y * position.w + position.x) * 4;
	
	var data = imageData.data;

	console.log("i:", i);
	data[i] = texture;
	data[i+1] = brush;
	data[i+2] = position.x;
	data[i+3] = position.h - position.y -1;
	
	console.log("pos y", data[i+3]); 
    imageData.data = data;
}
