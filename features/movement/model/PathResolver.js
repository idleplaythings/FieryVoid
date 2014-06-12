if ( typeof model.movement === 'undefined')
    model.movement = {};

model.movement.PathResolver = function PathResolver(gridService)
{
    this._gridService = gridService;
};

model.movement.PathResolver.prototype.resolvePathForRoute = function(route)
{
    var path = [];
    var occupiedPositions = {};

    var route = route.getRoute();

    route.push(
        new model.movement.Action.Move()
            .apply(route[route.length -1])
    );

    route.reduce(function(last, position, i, a) {
        var currentCenter = this._gridService.resolveGameCoordinates(position.getPosition().toOddR());

        if (a[i+1] !== undefined) {
            var nextCenter = this._gridService.resolveGameCoordinates(a[i+1].getPosition().toOddR());
        } else {
            return;
        }

        var control = {
            x: currentCenter.x,
            y: currentCenter.y
        }

        var end = {
            x: (currentCenter.x + nextCenter.x) / 2,
            y: (currentCenter.y + nextCenter.y) / 2,
        }

        var start;

        if (last) {
            start = last;
        }
        else
        {
            start = control;
        }

        this._offsetIfOccupied(start, control, end, occupiedPositions);

        path.push(new model.Path(start, control, end));
        this._occupyPosition(end, occupiedPositions);

        return end;

    }.bind(this), null);

    return path;
};

model.movement.PathResolver.prototype._offsetIfOccupied = function(start, control, end, occupiedPositions){
    if ( ! occupiedPositions[this._serialize(end)])
        return;

    this._offsetInPlace(start, control, end);
};

model.movement.PathResolver.prototype._occupyPosition = function(position, occupiedPositions){
    occupiedPositions[this._serialize(position)] = position;
};

model.movement.PathResolver.prototype._serialize = function(position)
{
    return position.x + "_" + position.y;
};

model.movement.PathResolver.prototype._offsetPath = function(path)
{
    path = path.reduce(function(last, step) {
        return step;
    });

    return path;

    // path = path.reduce(function(last, position, i, a) {
    //     var currentCenter = this._gridService.resolveGameCoordinates(position.getPosition().toOddR());

    //     if (typeof a[i+1] !== 'undefined') {
    //         var nextCenter = this._gridService.resolveGameCoordinates(a[i+1].getPosition().toOddR());
    //     } else {
    //         var nextCenter = currentCenter;
    //     }

    //     center =

    //     var control = {
    //         x: currentCenter.x,
    //         y: currentCenter.y
    //     }

    //     var end = {
    //         x: (currentCenter.x + nextCenter.x) / 2,
    //         y: (currentCenter.y + nextCenter.y) / 2,
    //     }

    //     if (last) {
    //         var start = last;

    //         if (occupiedPositions[this._serialize(end)])
    //          this._offsetInPlace(start, control, end);

    //      occupiedPositions[this._serialize(end)] = end;
    //         var path = new model.Path(start, control, end);


    //         var curve = new model.Curve(start, control, end, 0x005500);
    //         var particlePath = new model.ParticlePath(
    //             path,
    //             0x00ff00,
    //             0,
    //             this._dispatcher
    //         );

    //         this._gameScene.scene.add(curve.get());
    //         this._gameScene.scene.add(particlePath.get());
    //         this._gameScene.animators.push(particlePath);
    //     }

    //     return end;
    // }.bind(this), null);

}

model.movement.PathResolver.prototype._offsetInPlace = function(start, control, end)
{
    console.log(start, control, end);
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
     console.log(corners);

     for (var i=0; i<corners.length; i++) {
         var next = corners[i+1];

         if (!next) {
             next = corners[0];
         }

         if (MathLib.isBetweenPoints(corners[i], next, 1, end)) {
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

     var offset  = {
         x: (offSideCorner.x + end.x) / 2 - end.x,
         y: (offSideCorner.y + end.y) / 2 - end.y
     }

     end.x += offset.x;
     end.y += offset.y;

     control.x += offset.x;
     control.y += offset.y;
};