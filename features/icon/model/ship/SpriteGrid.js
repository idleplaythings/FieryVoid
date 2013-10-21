model.SpriteGrid = function SpriteGrid(grid, z)
{
	this.grid = grid;
    model.Sprite.call(this, z);
};

model.SpriteGrid.prototype =  Object.create(model.Sprite.prototype);

model.SpriteGrid.prototype.requestImageDataToCallback = function()
{
    this.update();
};

model.SpriteGrid.prototype.update = function(payload)
{
	this.receiveImageData(this.grid.getImageData(payload));
	this.setInitialScale();
};

model.SpriteGrid.prototype.setInitialScale = function()
{
    var width = this.grid.width;
    var height = this.grid.height;
    var scale = 30;

    this.object3d.scale.set(width*scale, height*scale, 1);
};