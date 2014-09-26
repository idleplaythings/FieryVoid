model.movement.Thruster = function Thruster(args)
{
  this.moduleId = args.moduleId;
  this.direction = args.direction;
  this.efficiency = args.efficiency;
  this.max = args.max;
  this.over = args.over;
};

model.movement.Thruster.prototype.getThrusterInUse = function(turn)
{
  //TODO: calculate cababilities for given turn
  return new model.movement.ThrusterInUse(this);
};