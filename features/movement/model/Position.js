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

model.movement.Position.prototype.moveToDirection = function(direction)
{
	return this._position.moveToDirection(direction);
};

model.movement.Position.prototype.turnDirection = function(turn)
{
	return this._turn(this._direction, turn);
};

model.movement.Position.prototype.turnFacing = function(turn)
{
	return this._turn(this._facing, turn);
};

model.movement.Position.prototype.getAngleTo = function(position)
{
    var h = 2;
    var dv = 3/4 * h;

    var w = Math.sqrt(3) / 2 * h;
    var dh = w;

    var x = new THREE.Vector2(w/2, dv);
    var y = new THREE.Vector2(-w/2, dv);
    var z = new THREE.Vector2(w, 0);

    var axis = null;
    var normal = null;

    switch (this.getFacing()) {
        case 0:
            axis = z;
            break;
        case 1:
            axis = x;
            break;
        case 2:
            axis = y;
            break;
        case 3:
            axis = z.clone().multiplyScalar(-1);
            break;
        case 4:
            axis = x.clone().multiplyScalar(-1);
            break;
        case 5:
            axis = y.clone().multiplyScalar(-1)
;            break;
    }

    var startPosition = this.getPosition();
    var targetPosition = position.getPosition();


    var start = x.clone().multiplyScalar(startPosition.x).add(y.clone().multiplyScalar(startPosition.y));
    var target = x.clone().multiplyScalar(targetPosition.x).add(y.clone().multiplyScalar(targetPosition.y));
    var result = target.sub(start);

    var dot = result.clone().normalize().dot(axis.clone().normalize());
    var angle = Math.acos(dot);


    var cross = new THREE.Vector3(result.x, result.y, 0).cross(new THREE.Vector3(axis.x, axis.y, 0));

    if (cross.z < 0) {
        angle *= -1;
    }

    angle = angle * 180 / Math.PI;
    angle = angle.toFixed(2);

    return parseFloat(angle);
}

model.movement.Position.prototype._turn = function(current, turn)
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
