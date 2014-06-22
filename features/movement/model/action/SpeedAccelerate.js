model.movement.Action.SpeedAccelerate = function SpeedAccelerate()
{
	model.movement.Action.Speed.call(this, {change: model.movement.Action.Speed.ACCELERATE});
}

model.movement.Action.SpeedAccelerate.prototype = 
	Object.create(model.movement.Action.Speed.prototype);

model.movement.Action.SpeedAccelerate.prototype.serialize = function()
{
  return {className: 'SpeedAccelerate', args: {change: this._change}};
};