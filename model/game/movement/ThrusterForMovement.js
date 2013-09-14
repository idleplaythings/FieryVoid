model.ThrusterForMovement = function ThrusterForMovement(acc, rotation, max, module)
{
    this.acceleration = acc;
    this.rotationAcceleration = rotation;
    this.max = max;
    this.module = module;

    this.assignedThrust = 0;
    this.assignedRotationThrust = 0;
};

model.ThrusterForMovement.prototype.commitThrusterUsage = function(time)
{
    this.module.timeline.remove(time, 'thrusterUsage');
    this.module.timeline.add(
        time,
        'thrusterUsage',
        {
            normal: this.assignedThrust,
            rotation: this.assignedRotationThrust
        }
    );
};

model.ThrusterForMovement.prototype.getVectorActiveComponent = function()
{
    return this.acceleration.x !== 0 ? this.acceleration.x : this.acceleration.y;
};

model.ThrusterForMovement.prototype.getThrustRequirementToMeetVector = function(vector)
{
    var target = vector.x !== 0 ? vector.x : vector.y;
    var acc = this.getVectorActiveComponent();

    return target / acc;
};

model.ThrusterForMovement.prototype.assignThrust = function(thrust)
{
    this.assignedThrust += thrust;
};

model.ThrusterForMovement.prototype.assignRotationThrust = function(thrust)
{
    this.assignedRotationThrust += thrust;
};

model.ThrusterForMovement.prototype.canBeUsed = function()
{
    return this.assignedThrust + this.assignedRotationThrust < this.max;
};

model.ThrusterForMovement.prototype.getCurrentVector = function()
{
    return this.acceleration.clone().multiplyScalar(this.assignedThrust);
};

model.ThrusterForMovement.prototype.getResultVector = function(step)
{
    return this.acceleration.clone().multiplyScalar(step);
};

model.ThrusterForMovement.prototype.getResultRotation = function(step)
{
    return this.rotationAcceleration * step;
};

model.ThrusterForMovement.prototype.getThrustRequirementToMeetRotation = function(rotation)
{
   return rotation/this.rotationAcceleration;
};