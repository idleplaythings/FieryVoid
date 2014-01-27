if ( typeof model === 'undefined')
    model = {};

if ( typeof model.movement === 'undefined')
    model.movement = {};

model.movement.Action = function Action(args)
{
	if (! args)
		args = {};
		
	this._position = args.position;
	this._facing = args.facing || 0;
	this._direction = args.direction || 0;
	this._speed = args.speed || 0;
	
	this._validate();
};

model.movement.Action.THRUSTER_FRONT = 0;
model.movement.Action.THRUSTER_RIGHT = 90;
model.movement.Action.THRUSTER_REAR = 180;
model.movement.Action.THRUSTER_LEFT = 270;

model.movement.Action.createFrom = 
	function(lastAction, movementStatus)
{
	return new model.movement.Action(lastAction);
};

model.movement.Action.prototype.getPosition = function()
{
	return this._position;
};

model.movement.Action.prototype.getFacing = function()
{
	return this._facing;
};

model.movement.Action.prototype.getDirection = function()
{
	return this._direction;
};

model.movement.Action.prototype.getSpeed = function()
{
	return this._speed;
};

model.movement.Action.prototype.getTurnDelay = function(movementStatus)
{
	return 0;
};

model.movement.Action.prototype.getSlipDelay = function(movementStatus)
{
	return 0;
};

model.movement.Action.prototype.getThrustCost = function(movementStatus)
{
	return null;
};

model.movement.Action.prototype.getStepInDirection = 
	function(direction)
{
	return this._position.add(this._position.getNeighbours()[direction]);
};

model.movement.Action.prototype.turnDirection = 
	function(turn)
{
	return this._turn(this.direction, turn);
};

model.movement.Action.prototype.turnFacing = 
	function(turn)
{
	return this._turn(this.facing, turn);
};

model.movement.Action.prototype._turn = 
	function(current, turn)
{
	var max = this._position.getNeighbours().length;
	var direction = this._direction + turn;
	
	if (direction < 0)
		direction = max + (direction % max);
		
	if (direction > max - 1)
		direction = direction % max;
		
	return direction;
};

model.movement.Action.prototype._validate = function()
{
	if ( ! this._position)
		throw new Error("Movement action requires a position");
		
	if ( ! this._position.getNeighbours || ! this._position.add)
		throw new Error("Movement action requires a position that implements 'getNeighbours' and 'add'");
		
	var neighbours = this._position.getNeighbours();
	
	if (this._direction < 0 || this._direction > neighbours.length -1)
		throw new Error("Illegal direction for movement action: '"+this.direction+"'");
		
	if (this._facing < 0 || this._facing > neighbours.length -1)
		throw new Error("Illegal facing for movement action: '"+this.facing+"'");
		
	if (this.speed < 0)
		throw new Error("Negative speed not allowed for movement action");
};

model.movement.Action.prototype._getThrusterDirection = function(dir)
{
	var diff = (Math.abs(this._direction - this._facing));
	var max = this._position.getNeighbours().length;
	
	if (max - diff < diff)
		diff = max - diff;
		
	if (diff > 1)
		dir = MathLib.addToAzimuth(dir, 180);
		
	if (dir == 360)
		dir = 0;
		
	return dir;
};
