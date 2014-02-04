model.movement.ThrusterUsage = function ThrusterUsage(thrusters, thrust)
{
	this._thrusters = thrusters.map(function(thruster){
		return new model.movement.Thruster(thruster);
	});
	
	this._thrustAvailable = thrust;
	this._thrustUsed = 0;
};


model.movement.ThrusterUsage.prototype.payOrFail = function(thrustCost)
{
	var costs = thrustCost.getCosts();

	for (var directions in costs)
	{
		var trusters = this._getThrustersToDirection(directions);
		if (! this._resolveAndPay(trusters, costs[directions]))
		{
			throw new Error("Unable to pay thrust for an action");
		}
	};
	
	return true;
};

model.movement.ThrusterUsage.prototype._getThrustersToDirection = function(directions)
{
	directions = [].concat(directions);
	
	return this._thrusters.filter(function(thruster){
		return directions.some(function(dir){
			return dir == thruster.getThrustDirection();
		});
	});
	
};

model.movement.ThrusterUsage.prototype._resolveAndPay = function(thrusters, cost)
{
	
	this._thrustUsed += cost;
	if ( this._thrustUsed > this._thrustAvailable)
		return false;
		
	//TODO: Sort thrusters so that intact thrusters are preferred
	while (cost > 0)
	{
		if (thrusters.length == 0)
			return false;
			
		cost = thrusters.pop().pay(cost);
	}
	
	return true;
};