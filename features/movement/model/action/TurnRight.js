model.movement.Action.TurnRight = function TurnRight()
{
	model.movement.Action.Turn.call(this, model.movement.Action.Turn.CW);
}

model.movement.Action.TurnRight.prototype = 
	Object.create(model.movement.Action.Turn.prototype);
