model.movement.Action.SpeedDeaccelerate = function SpeedDeaccelerate()
{
	model.movement.Action.Speed.call(this, {change: model.movement.Action.Speed.DEACCELERATE});
}

model.movement.Action.SpeedDeaccelerate.prototype = 
	Object.create(model.movement.Action.Speed.prototype);
