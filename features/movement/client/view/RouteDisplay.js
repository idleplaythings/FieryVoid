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
		 
        if (last) {
            var lastCenter = this._gridService.resolveGameCoordinates(last.getPosition().toOddR());
           
            if (typeof a[i+1] !== 'undefined') {
                var nextCenter = this._gridService.resolveGameCoordinates(a[i+1].getPosition().toOddR());
            } else {
                var nextCenter = currentCenter;
            }

            if (occupiedPositions[nextCenter.x + '_' + nextCenter.y])
				this._offset(nextCenter);

			occupiedPositions.push(nextCenter.x + '_' + nextCenter.y);

            var start = {
                x: (lastCenter.x + currentCenter.x) / 2,
                y: (lastCenter.y + currentCenter.y) / 2,
            }
            var control = {
                x: currentCenter.x,
                y: currentCenter.y
            }
            var end = {
                x: (nextCenter.x + currentCenter.x) / 2,
                y: (nextCenter.y + currentCenter.y) / 2,
            }

            this._gameScene.scene.add(new model.Curve(start, control, end).get());
        }

        return position;
    }.bind(this));

};

model.movement.RouteDisplay.prototype.offset = function(position)
{
	position.x += 50;
	position.y += 50;
};
