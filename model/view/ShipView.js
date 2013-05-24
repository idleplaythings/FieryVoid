model.ShipView = function ShipView(hullLayout, hullCanvas, gridCanvas)
{
    this.hullLayout = hullLayout;
    this.systemLayout = null;
    this.shipDetails = null;

    this.shiphullimage = null;
    this.outerHull = null;
    this.hullGrid = null;

    this.create(hullCanvas, gridCanvas);

    this.drawImages();
};

model.ShipView.prototype.create = function(hullCanvas, gridCanvas)
{
    this.shiphullimage =
        new model.ShipHullCompositeImage({hullName: this.hullLayout.hullImgName});

    this.outerHull =
        new model.ShipDisplayOuterHull(this.hullLayout, hullCanvas, this.shiphullimage);

    this.hullGrid = new model.ShipDisplayGrid(this.hullLayout, gridCanvas)
};

model.ShipView.prototype.drawImages = function()
{
    this.outerHull.start();
    this.hullGrid.start();
};