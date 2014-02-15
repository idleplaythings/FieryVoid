model.HullLayoutPositionService = function HullLayoutPositionService(hullLayout, position, facing)
{
    model.ComponentPositionService.call(
        this,
        hullLayout.getWidth(),
        hullLayout.getHeight(),
        position,
        facing
    );

	this._hullLayout = hullLayout;
};

model.HullLayoutPositionService.prototype = Object.create(model.ComponentPositionService.prototype);

model.HullLayoutPositionService.prototype.occupiesPosition = function(scenePosition)
{
    var tile = this.getTileOnPosition(scenePosition);
    return ! this._hullLayout.isUnavailableTile(tile);
};