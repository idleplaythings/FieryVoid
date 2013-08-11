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
};

model.ThrusterResolver.prototype.resolveThrusterUse =
    function()
{

    while(this.usedEngineOutput < this.engineoutput)
    {
        console.log("start round");
        console.log("pos: " + this.currentVector.x +", " + this.currentVector.y + " r: " + this.currentRotation);
        console.log("target: " + this.currentTargetVector.x +", " + this.currentTargetVector.y + " r: " + this.currentTargetRotation);

        //var r =this.fixRotation();
        this.applyThruster(this.getThrusterForward(new Vector2(this.currentTargetVector.x, 0)));
        this.applyThruster(this.getThrusterForward(new Vector2(0, this.currentTargetVector.y)));
    }


    return this.thrusterGroup;
};

model.ThrusterResolver.prototype.getThrusterForward = function(vector)
{
    if (vector.x === 0 && vector.y === 0)
        return 0;

    var thrusters = this.thrusterGroup.getThrustersSortedForMovement(
        vector, this.currentTargetRotation);

    if (thrusters.length === 0)
        return 0;

    var thruster = thrusters[0];

    var step = thruster.getThrustRequirementToMeetVector(vector);

    if (step > this.step)
        step = this.step;

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

    return {thruster:thruster, step:step};
};

model.ThrusterResolver.prototype.applyThruster = function(thrusterAndstep)
{
    if (! thrusterAndstep)
        return;

    var thruster = thrusterAndstep.thruster;
    var step = thrusterAndstep.step;
    
    thruster.assignThrust(step);
    var result = thruster.getResultVector(step);

    this.usedEngineOutput -= step;
    this.currentVector = this.currentVector.add(result);
    this.currentTargetVector.sub(result);

    this.currentRotation += thruster.getResultRotation(step);
    this.currentTargetRotation = this.targetRotation - this.currentRotation;

    console.log("Using thruster '" + thruster.module + " for " +result.x + ","+ result.y + " and rotation " + thruster.getResultRotation(step));
};