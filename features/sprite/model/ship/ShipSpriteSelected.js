if ( typeof model === 'undefined')
    model = {};

model.ShipSpriteSelected = function ShipSpriteSelected(shipDesign)
{
    model.ShipSprite.call(this, shipDesign.hullLayout);
    this.z = -1;

    this.circle = null;
    this.arrow = null;
};

model.ShipSpriteSelected.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteSelected.prototype.animate = function()
{
    this.circle.rotation.z -= Math.PI/180;
};

model.ShipSpriteSelected.prototype.setInitialScale = function()
{
    var size = this.getSize();
    
    this.scale(size, size, 1);
};

model.ShipSpriteSelected.prototype.getSize = function()
{
    var width = this.hullLayout.width;
    var height = this.hullLayout.height;
    var scale = 30;

    var larger = (width > height) ? width : height;
    larger *= scale*1.2;
    return larger;
};

model.ShipSpriteSelected.prototype.requestImageDataToCallback = function()
{
	var size = this.getSize();
	var r = size / 2;
	var r1 = r * 0.6;
	var r2 = r * 0.75;
	var segments = 6;
	var gapratio = 0.2;

	var circle = this.getCircle(size, r, r1, r2, segments, gapratio);
        
    this.receiveImageData(circle);
};

model.ShipSpriteSelected.prototype.update = function(shipDesign)
{

};

