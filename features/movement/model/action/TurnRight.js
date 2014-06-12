model.movement.Action.TurnRight = function TurnRight()
{
	model.movement.Action.Turn.call(this, {turnDirection: model.movement.Action.Turn.CW});
}

model.movement.Action.TurnRight.prototype = 
	Object.create(model.movement.Action.Turn.prototype);

model.movement.Action.TurnRight.prototype.serialize = function()
{
  return {className: 'TurnRight', args: {turnDirection: this._turnDirection}};
};