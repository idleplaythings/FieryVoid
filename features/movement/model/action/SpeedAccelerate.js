model.movement.Action.SpeedAccelerate = function SpeedAccelerate()
{
	model.movement.Action.Speed.call(this, model.movement.Action.Speed.ACCELERATE);
}

model.movement.Action.SpeedAccelerate.prototype = 
	Object.create(model.movement.Action.Speed.prototype);
