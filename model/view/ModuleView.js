model.ModuleView = function ModuleView(moduleLayout, moduleCanvas, gridCanvas)
{
    this.moduleLayout = moduleLayout;

    this.img = null;
    this.module = null;
    this.grid = null;

    this.create(moduleCanvas, gridCanvas);

    this.drawImages();
};

model.ModuleView.prototype.create = function(moduleCanvas, gridCanvas)
{
    console.log(moduleCanvas);
    this.img =
        new model.CompositeImageModule({
            imgName: this.moduleLayout.moduleImgName,
            imgType: 'inside'
        });

    this.module =
        new model.ShipDisplayOuterHull(
            this.moduleLayout, moduleCanvas, this.img);

    this.grid = new model.ShipDisplayGrid(this.moduleLayout, gridCanvas)
};

model.ModuleView.prototype.drawImages = function()
{
    this.module.start();
    this.grid.start();
};

model.ModuleView.prototype.getClickedTile = function(pos)
{
    return this.grid.getClickedTile(pos);
};