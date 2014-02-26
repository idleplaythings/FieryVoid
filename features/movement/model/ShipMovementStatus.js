model.movement.ShipMovementStatus = function ShipMovementStatus(timeline)
{
	this._timeline = timeline;
}

model.movement.ShipMovementStatus.prototype.addRoute = function(route)
{
    var entry = this._getTimelineRouteEntry(route);

    if (entry )
    {
    	if (! entry.canUpdate())
			throw new Error("Trying to update movementRoute entry that cannot be updated");

		entry.update(route.serialize());
    }
	else
	{
		this._timeline.add('movementRoute', route.serialize());
	}
};

model.movement.ShipMovementStatus.prototype.getRoutes = function()
{
    return this._timeline.filter(function(entry){
    	return entry.name == 'movementRoute';
    }).map( function(entry) { 
    	return model.movement.Route.deserialize(entry.payload);
    });
};

model.movement.ShipMovementStatus.prototype._getTimelineRouteEntry = function(route)
{
	return this._timeline.filter(function(entry){ 
		return entry.name == 'movementRoute' && entry.payload.turn == route.turn;
	}, this).pop();
};