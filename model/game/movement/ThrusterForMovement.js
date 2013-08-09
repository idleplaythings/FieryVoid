model.ThrusterForMovement = function ThrusterForMovement(acc, rotation, max, module)
{
    this.acceleration = acc;
    this.rotationAcceleration = rotation;
    this.max = max;
    this.module = module;

    this.assignedThrust = 0;
};

model.ThrusterForMovement.prototype.assignThrust = function(thrust)
{
    this.assignedThrust += thrust;
};

model.ThrusterForMovement.prototype.canBeUsed = function()
{
    return this.assignedThrust < this.max;
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