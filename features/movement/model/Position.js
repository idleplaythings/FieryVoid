model.movement.Position = function Position(args)
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

model.movement.THRUSTER_FRONT = 0;
model.movement.THRUSTER_RIGHT = 90;
model.movement.THRUSTER_REAR = 180;
model.movement.THRUSTER_LEFT = 270;

model.movement.Position.prototype.occupiesSamePosition = function(position)
{
	return this.getPosition().equals(position.getPosition());
};

model.movement.Position.prototype.getThrustCost = function()
{
	return this._thrustCost;
};

model.movement.Position.prototype.getPosition = function()
{
	return this._position;
};

model.movement.Position.prototype.getFacing = function()
{
	return this._facing;
};

model.movement.Position.prototype.getDirection = function()
{
	return this._direction;
};

model.movement.Position.prototype.getSpeed = function()
{
	return this._speed;
};

model.movement.Position.prototype.getTurnDelay = function()
{
	return this._turnDelay;
};

model.movement.Position.prototype.getSlipDelay = function()
{
	return this._slipDelay;
};

model.movement.Position.prototype.moveToDirection = 
	function(direction)
{
	return this._position.moveToDirection(direction);
};

model.movement.Position.prototype.turnDirection = 
	function(turn)
{
	return this._turn(this._direction, turn);
};

model.movement.Position.prototype.turnFacing = 
	function(turn)
{
	return this._turn(this._facing, turn);
};

model.movement.Position.prototype._turn = 
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

model.movement.Position.prototype.getThrusterDirection = function(dir)
{
	var diff = (Math.abs(this.getDirection() - this._facing));
	var max = this._position.getNeighbours().length;
	
	if (max - diff < diff)
		diff = max - diff;
		
	if (diff > 1)
		dir = MathLib.addToAzimuth(dir, 180);
		
	if (dir == 360)
		dir = 0;
		
	return dir;
};
