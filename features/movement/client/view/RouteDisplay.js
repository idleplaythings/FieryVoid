model.movement.RouteDisplay = function RouteDisplay(scene, gridService)
{
	this._gameScene = scene;
	this._gridService = gridService;

};

model.movement.RouteDisplay.prototype.makeItSo = function(route)
{
	var occupiedPositions = {};

	route.getRoute().reduce(function(last, position, i, a) {

        var currentCenter = this._gridService.resolveGameCoordinates(position.getPosition().toOddR());

        if (typeof a[i+1] !== 'undefined') {
            var nextCenter = this._gridService.resolveGameCoordinates(a[i+1].getPosition().toOddR());
        } else {
            var nextCenter = currentCenter;
        }

        var control = {
            x: currentCenter.x,
            y: currentCenter.y
        }

        var end = {
            x: (currentCenter.x + nextCenter.x) / 2,
            y: (currentCenter.y + nextCenter.y) / 2,
        }

        if (last) {
            var start = last;

            if (occupiedPositions[this._serialize(end)])
				end = this._offset(start, control, end);

			occupiedPositions[this._serialize(end)] = end;

            this._gameScene.scene.add(new model.Curve(start, control, end, 0x00ff00).get());
        }

        return end;

    }.bind(this), null);

};

model.movement.RouteDisplay.prototype._serialize = function(position)
{
    return position.x + '_' + position.y;
}

model.movement.RouteDisplay.prototype._offset = function(start, control, end)
{
    var prototypeHex = this._gridService.getPrototypeHex();
    prototypeHex.setCentrePoint(control);

    var isPointBetween = function(point, corner1, corner2) {
        return point.x >= Math.min(corner1.x, corner2.x) && point.x <= Math.max(corner1.x, corner2.x) &&
               point.y >= Math.min(corner1.y, corner2.y) && point.y <= Math.max(corner1.y, corner2.y);
    }

    var distanceBetween = function(point1, point2) {
        var dx = point2.x - point1.x;
        var dy = point2.y - point1.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }

    var corner1;
    var corner2;

    var corners = prototypeHex.corners;

    for (var i=0; i<corners.length; i++) {
        var next = corners[i+1];

        if (!next) {
            next = corners[0];
        }

        if (isPointBetween(end, corners[i], next)) {
            corner1 = corners[i];
            corner2 = next;
            console.log(i);
            break;
        }
    }

    if (distanceBetween(start, corner1) < distanceBetween(start, corner2)) {
        var offSideCorner = corner1;
    } else {
        var offSideCorner = corner2;
    }

    return {
        x: (offSideCorner.x + end.x) / 2,
        y: (offSideCorner.y + end.y) / 2,
    }
};
