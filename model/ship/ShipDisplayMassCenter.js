model.ShipDisplayMassCenter = function ShipDisplayMassCenter(
    target, canvasClass)
{
    model.ShipDisplay.call(this, target, canvasClass);
}

model.ShipDisplayMassCenter.prototype = Object.create(model.ShipDisplay.prototype);

model.ShipDisplayMassCenter.prototype.start = function(ship)
{
    this.ship = ship;
    this.drawImage(ship.calculateCenterOfMass())
};

model.ShipDisplayMassCenter.prototype.drawImage = function(pos)
{
    this.clear();
    var size = 10;
    var width = size;
    var height = size;

    var zoom = this.calculateZoomForFit({width:width, height:height});
    var pos = this.getCanvasPosition(pos);
    //pos.x += 2;
    //pos.y += 2;

    //this.context.putImageData(data, 0, 0);
    window.Tools.getCanvasDrawingTool().drawCircleAndFill(
        this.getContext(), pos.x, pos.y, size/2);
};