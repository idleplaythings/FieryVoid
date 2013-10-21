model.ShipDesignIconOnCanvas = function ShipDesignIconOnCanvas(shipDesign, tileSize)
{
    this.shipDesign = shipDesign;
    this.tileSize = tileSize;
};

model.ShipDesignIconOnCanvas.prototype.drawTo = function(target)
{
    this.width = jQuery(target).width();
    this.height = jQuery(target).height();

    this.target = jQuery(
        '<canvas class="shipDisplay"'
            +' width="'
            +this.width
            +'" height="'
            +this.height
            +'"></canvas>')
        .appendTo(target)[0];

    new model.CompositeImageShipHullAndModules(this.shipDesign)
        .getImageDataToCallback(this.receiveImageData.bind(this));
};

model.ShipDesignIconOnCanvas.prototype.receiveImageData = function(data)
{
    Tools.getCanvasDrawingTool().resizeToFitAndDrawToMiddle(this.target, data.data);
};
