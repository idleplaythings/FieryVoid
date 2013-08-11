model.ThrusterResolver = function ThrusterResolver(
    thrusterGroup, targetVector, targetRotation, engineoutput)
{
    this.thrusterGroup = thrusterGroup;
    this.targetVector = targetVector;
    this.targetRotation = targetRotation;
    this.engineoutput = engineoutput;

    this.usedEngineOutput = 0;
    this.currentTargetVector = targetVector.clone();
    this.currentVector = new Vector2(0,0);

    this.currentTargetRotation = targetRotation;
    this.currentRotation = 0;

    this.step = engineoutput/100;

    this.didSomething = true;
};

model.ThrusterResolver.prototype.resolveThrusterUse =
    function()
{

    while(this.usedEngineOutput < this.engineoutput && this.didSomething)
    {
        this.didSomething = false;
        console.log("start round");
        console.log("pos: " + this.currentVector.x +", " + this.currentVector.y + " r: " + this.currentRotation);
        console.log("target: " + this.currentTargetVector.x +", " + this.currentTargetVector.y + " r: " + this.currentTargetRotation);

        this.applyThruster(this.fixRotation());
        this.applyThruster(this.getThrusterForward(new Vector2(this.currentTargetVector.x, 0)));
        this.applyThruster(this.getThrusterForward(new Vector2(0, this.currentTargetVector.y)));
    }


    return this.thrusterGroup;
};

model.ThrusterResolver.prototype.canCounterRotation = function(thruster, rotation)
{
    if (thruster.getThrustRequirementToMeetRotation(this.currentTargetRotation) < 0)
    {
        console.log("rotating wrong");
        if (this.thrusterGroup.getBestRotator(this.currentTargetRotation + rotation) === null)
        {
            console.log("no more counter rotators")
            return false;
        }
    }

    return true;
};

model.ThrusterResolver.prototype.isMovingRightDirection = function(thruster, vector)
{
    var currentDistance = MathLib.distance(this.currentVector, this.targetVector);
    var newDistance = MathLib.distance(
        this.currentVector.clone().add(vector), this.targetVector);

    if (newDistance > currentDistance)
    {
        console.log("moving wrong")
        return false;
    }

    return true;
};

model.ThrusterResolver.prototype.getThrusterForward = function(vector)
{
    if (vector.x === 0 && vector.y === 0)
        return;

    var thrusters = this.thrusterGroup.getThrustersSortedForMovement(
        vector, this.currentTargetRotation);

    if (thrusters.length === 0)
        return;

    var thruster = thrusters[0];

    var step = thruster.getThrustRequirementToMeetVector(vector);

    if (step > this.step)
        step = this.step;

    if ( ! this.canCounterRotation(thruster, thruster.getResultRotation(step)))
        return null;

    return {thruster:thruster, step:step};
};

model.ThrusterResolver.prototype.fixRotation = function()
{
    if (this.currentTargetRotation === 0)
        return 0;

    var thruster = this.thrusterGroup.getBestRotator(this.currentTargetRotation);
    if (! thruster)
        return 0;

    var step = thruster.getThrustRequirementToMeetRotation(this.currentTargetRotation);

    if (step > this.step)
        step = this.step;


    var ignoreVector = ! this.isMovingRightDirection(thruster, thruster.getResultVector(step));

    return {thruster:thruster, step:step, ignoreVector: ignoreVector};
};

model.ThrusterResolver.prototype.applyThruster = function(thrusterAndstep)
{
    if (! thrusterAndstep)
        return;

    var thruster = thrusterAndstep.thruster;
    var step = thrusterAndstep.step;
    var ignoreVector = thrusterAndstep.ignoreVector || false;

    var result = thruster.getResultVector(step);

    this.usedEngineOutput -= step;

    if ( ! ignoreVector)
    {
        thruster.assignThrust(step);
        this.currentVector = this.currentVector.add(result);
        this.currentTargetVector.sub(result);
        console.log("Using thruster '" + thruster.module + " for " +result.x + ","+ result.y + " and rotation " + thruster.getResultRotation(step));

    }
    else
    {
        console.log("Using thruster '" + thruster.module + " for rotation ONLY " + thruster.getResultRotation(step));

        thruster.assignRotationThrust(step);
    }


    this.currentRotation += thruster.getResultRotation(step);
    this.currentTargetRotation = this.targetRotation - this.currentRotation;

    this.didSomething = true;
};