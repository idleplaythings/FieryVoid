if ( typeof model.movement === 'undefined')
    model.movement = {};

model.movement.PathResolver = function PathResolver(gridService)
{
    this._gridService = gridService;
};

model.movement.PathResolver.prototype.resolvePathForRoute = function(route)
{
    var path = [];

    route.getRoute().reduce(function(last, position, i, a) {
        var currentCenter = this._gridService.resolveGameCoordinates(position.getPosition().toOddR());

        if (a[i+1] !== undefined) {
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
            path.push(new model.Path(last, control, end));
        }

        return end;

    }.bind(this), null);

    return path;
}