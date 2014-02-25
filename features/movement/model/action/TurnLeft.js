model.movement.Action.TurnLeft = function TurnLeft()
{
	model.movement.Action.Turn.call(this, {turnDirection: model.movement.Action.Turn.CCW});
}

model.movement.Action.TurnLeft.prototype = 
	Object.create(model.movement.Action.Turn.prototype);
