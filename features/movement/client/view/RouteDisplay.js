model.movement.RouteDisplay = function RouteDisplay(scene, gridService, dispatcher)
{
	this._gameScene = scene;
	this._gridService = gridService;
    this._dispatcher = dispatcher;
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

            // if (occupiedPositions[this._serialize(end)])
				// this._offsetInPlace(start, control, end);

			occupiedPositions[this._serialize(end)] = end;
            var path = new model.Path(start, control, end);

            var curve = new model.Curve(start, control, end, 0x005500);
            var particlePath = new model.ParticlePath(path, 0x00ff00, this._dispatcher);

            this._gameScene.scene.add(curve.get());
            this._gameScene.scene.add(particlePath.get());
            this._gameScene.animators.push(particlePath);

            // particlePath.animate();
            // particlePath.animate();
            // particlePath.animate();

        }

        return end;

    }.bind(this), null);

};

model.movement.RouteDisplay.prototype._serialize = function(position)
{
    return position.x + '_' + position.y;
}

model.movement.RouteDisplay.prototype._offsetInPlace = function(start, control, end)
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
            break;
        }
    }

    if (distanceBetween(start, corner1) < distanceBetween(start, corner2)) {
        var offSideCorner = corner1;
    } else {
        var offSideCorner = corner2;
    }

    end.x = (offSideCorner.x + end.x) / 2;
    end.y = (offSideCorner.y + end.y) / 2;

    control.x = (control.x + start.x + end.x) / 3;
    control.y = (control.y + start.y + end.y) / 3;
};
