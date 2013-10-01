model.GridHullLayout = function GridHullLayout(hullLayout, args)
{
    var tile = new model.TileHull(hullLayout, args);
    model.Grid.call(this, tile);
    this.setHullLayout(hullLayout);
};

model.GridHullLayout.prototype =  Object.create(model.Grid.prototype);

model.GridHullLayout.prototype.setHullLayout = function(hullLayout)
{
    this.width = hullLayout.getWidth();
    this.height = hullLayout.getHeight();
    this.tile.hullLayout = hullLayout;
};

model.GridHullLayout.prototype.getImageData = function(hullLayout)
{
    if (hullLayout)
        this.setHullLayout(hullLayout);

    return model.Grid.prototype.getImageData.call(this);
};