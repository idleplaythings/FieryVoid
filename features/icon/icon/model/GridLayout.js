model.GridLayout = function GridLayout(tile, layout)
{
    model.Grid.call(this, tile);
    this.setLayout(layout);
};

model.GridLayout.prototype =  Object.create(model.Grid.prototype);

model.GridLayout.prototype.setLayout = function(layout)
{
    this.width = layout.getWidth();
    this.height = layout.getHeight();
    this.tile.layout = layout;
};

model.GridLayout.prototype.getImageData = function(layout)
{
    if (layout)
        this.setLayout(layout);

    return model.Grid.prototype.getImageData.call(this);
};