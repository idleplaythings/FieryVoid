model.movement.Action.Current = function Current(args)
{
	if (! args)
		args = {};
		
	this._position = args.position;
	this._facing = args.facing || 0;
	this._direction = args.direction || 0;
	this._speed = args.speed || 0;
	this._turnDelay = args.turnDelay || 0;
	this._slipDelay = args.slipDelay || 0;
	
	this._thrustCost = args.thrustCost || new model.movement.ThrustCost();
};

model.movement.Action.THRUSTER_FRONT = 0;
model.movement.Action.THRUSTER_RIGHT = 90;
model.movement.Action.THRUSTER_REAR = 180;
model.movement.Action.THRUSTER_LEFT = 270;

model.movement.Action.Current.prototype.getThrustCost = function()
{
	return this._thrustCost;
};

model.movement.Action.Current.prototype.getPosition = function()
{
	return this._position;
};

model.movement.Action.Current.prototype.getFacing = function()
{
	return this._facing;
};

model.movement.Action.Current.prototype.getDirection = function()
{
	return this._direction;
};

model.movement.Action.Current.prototype.getSpeed = function()
{
	return this._speed;
};

model.movement.Action.Current.prototype.getTurnDelay = function()
{
	return this._turnDelay;
};

model.movement.Action.Current.prototype.getSlipDelay = function()
{
	return this._slipDelay;
};

model.movement.Action.Current.prototype.moveToDirection = 
	function(direction)
{
	return this._position.moveToDirection(direction);
};

model.movement.Action.Current.prototype.turnDirection = 
	function(turn)
{
	return this._turn(this._direction, turn);
};

model.movement.Action.Current.prototype.turnFacing = 
	function(turn)
{
	return this._turn(this._facing, turn);
};

model.movement.Action.Current.prototype._turn = 
	function(current, turn)
{
	var max = this._position.getNeighbours().length;
	var direction = current + turn;
	
	if (direction < 0)
		direction = max + (direction % max);
		
	if (direction > max - 1)
		direction = direction % max;
		
	return direction;
};

model.movement.Action.Current.prototype.getThrusterDirection = function(dir)
{
	var diff = (Math.abs(this._direction - this._facing));
	var max = this._position.getNeighbours().length;
	
	if (max - diff < diff)
		diff = max - diff;
		
	//if (this.getSpeed() < 0)
	//	dir = MathLib.addToAzimuth(dir, 180);
	
	if (diff > 1)
		dir = MathLib.addToAzimuth(dir, 180);
		
	if (dir == 360)
		dir = 0;
		
	return dir;
};
