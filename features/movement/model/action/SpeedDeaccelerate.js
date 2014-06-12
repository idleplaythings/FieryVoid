model.movement.Action.SpeedDeaccelerate = function SpeedDeaccelerate()
{
	model.movement.Action.Speed.call(this, {change: model.movement.Action.Speed.DEACCELERATE});
}

model.movement.Action.SpeedDeaccelerate.prototype = 
	Object.create(model.movement.Action.Speed.prototype);

model.movement.Action.SpeedDeaccelerate.prototype.serialize = function()
{
  return {className: 'SpeedDeaccelerate', args: {change: this._change}};
};