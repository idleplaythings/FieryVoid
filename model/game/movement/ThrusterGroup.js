model.ThrusterGroup = function ThrusterGroup(thrusters)
{
    this.thrusters = thrusters;
    this.sorted = false;

    this._xPositive = [];
    this._xNegative = [];
    this._yPositive = [];
    this._yNegative = [];

    this._rPositive = [];
    this._rNegative = [];
};

model.ThrusterGroup.prototype.refreshThrusterUsage = function()
{
    this.thrusters.forEach(function(t){
        t.assignedThrust = 0;
        t.assignedRotationThrust = 0;
    });
};

model.ThrusterGroup.prototype.getThrustersByMovementDirection = function(vector)
{
    this.sortThrusters();

    if (vector.x > 0)
        return this._xPositive.filter(function(t){return t.canBeUsed()});
    if (vector.x < 0)
        return this._xNegative.filter(function(t){return t.canBeUsed()});
    if (vector.y > 0)
        return this._yPositive.filter(function(t){return t.canBeUsed()});
    if (vector.y < 0)
        return this._yNegative.filter(function(t){return t.canBeUsed()});
};

model.ThrusterGroup.prototype.sortThrusters = function()
{
    if (this.sorted)
        return;

    this._xPositive = this.thrusters.filter(function(t){return t.acceleration.x > 0;});
    this._xNegative = this.thrusters.filter(function(t){return t.acceleration.x < 0;});
    this._yPositive = this.thrusters.filter(function(t){return t.acceleration.y > 0;});
    this._yNegative = this.thrusters.filter(function(t){return t.acceleration.y < 0;});

    this._rPositive = this.thrusters
        .filter(function(t){return t.rotationAcceleration > 0;})
        .sort(function(a,b){return b.rotationAcceleration - a.rotationAcceleration});
    this._rNegative = this.thrusters
        .filter(function(t){return t.rotationAcceleration < 0;})
        .sort(function(a,b){return a.rotationAcceleration - b.rotationAcceleration});

    this.sorted = true;
};

model.ThrusterGroup.prototype.getBestRotator = function(targetRotation)
{
    var list = this._rNegative;
    if (targetRotation>0)
        list = this._rPositive;

    list = list.filter(function(t){return t.canBeUsed()});
    if (list.length === 0)
        return null;

    return list[0];
};

model.ThrusterGroup.prototype.getThrustersSortedForMovement
    = function(vector, targetRotation )
{
    var self = this;
    var thrusters = this.getThrustersByMovementDirection(vector).slice(0);
    thrusters.sort(function(a,b){
        return self.sortThrustersForMovement(a,b, targetRotation);
    });

    return thrusters;
};

model.ThrusterGroup.prototype.sortThrustersForMovement =
    function(a,b, targetRotation)
{

    var rotationA = a.rotationAcceleration;
    var rotationB = b.rotationAcceleration;

    if (rotationA !== 0 || rotationB !== 0)
    {
        if (targetRotation !== 0)
        {
            var rotationAd = rotationA > 0 ? 1 : 2;
            var rotationBd = rotationB > 0 ? 1 : 2;

            if (rotationAd !== rotationBd)
            {
                var rotationDirection = targetRotation > 0 ? 1 : 2;
                if (rotationAd === rotationDirection)
                    return -1;

                return 1;
            }
            else
            {
                if (rotationA !== rotationB)
                    return rotationB - rotationA;
            }
        }
        else
        {
            rotationA = Math.abs(targetRotation - rotationA);
            rotationB = Math.abs(targetRotation - rotationB);

            if (rotationA !== rotationB)
                return rotationA - rotationB;
        }
    }

    return b.getVectorActiveComponent() - a.getVectorActiveComponent();
};

model.ThrusterGroup.prototype.resolveFasterRotationDirection = function(directions)
{
    //TODO: resolve which direction is faster to rotate to
    return Math.abs(directions.cw) < Math.abs(directions.ccw) ? directions.cw : directions.ccw;
};

model.ThrusterGroup.prototype.commitThrusterUsage = function(time)
{
    this.thrusters.forEach(function(t){
        t.commitThrusterUsage(time);
    })
};