model.ThrusterResolver = function ThrusterResolver()
{
};

model.ThrusterResolver.prototype.resolveThrusterUse =
    function(thrusters, targetVector, targetRotation, engineoutput)
{

    var cTargetVector = targetVector.clone();
    var cVector = Vector2(0,0);

    var cTRotation = targetRotation;
    var cRotation = 0;

    while(engineoutput)
    {
        if (cVector.length() < cTargetVector.length)
        {
            var step = 0.1;
            var thruster = this.assignStepTowards(thrusters, cTargetVector, cTRotation, step);
            engineoutput -= step;
            cRotation += thruster.getResultRotation(step);
            cVector.add(thruster.getResultVector(step));
            cTargetVector.sub(cVector);
        }

    }
};

model.ThrusterResolver.prototype.assignStepTowards =
    function(thrusters, targetVector, targetRotation, step)
{
    var usable =
        thrusters.filter(
            function(thruster){
                if ( ! thruster.canBeUsed())
                    return false;

                //var angleDifference =
                //    MathLib.compareAngles(targetVector.angle, thruster.acceleration.angle);

                //if (angleDifference > 45)
                //    return false;
            });

    usable = this.sortThrusters(usable, target, targetRotation, step);
    return usable[0];
};

model.ThrusterResolver.prototype.sortThrusters =
    function(thrusters, target, targetRotation, step)
{
    var self = this;
    thrusters.sort(function(a,b)
    {
        return self.thrusterSort(a, b, target, targetRotation, step);
    });

    return thrusters;
};

model.ThrusterResolver.prototype.thrusterSort =
    function(a,b, targetVector, targetRotation, step)
{
    var vectorA = a.getResultVector(step);
    var vectorB = b.getResultVector(step);

    var angleA = MathLib.distanceBetweenAngles(targetVector.angle(), vectorA.angle());
    var angleB = MathLib.distanceBetweenAngles(targetVector.angle(), vectorB.angle());

    var rotationA = Math.abs(targetRotation - a.getResultRotation(step));
    var rotationB = Math.abs(targetRotation - b.getResultRotation(step));

    //console.log(angleA + " vs " + angleB);
    if (angleA === angleB)
    {
        console.log(rotationA + " vs " + rotationB);
        if (rotationA === rotationB)
            return vectorA.length - vectorB.length;

        return rotationA - rotationB;
    }

    return angleA - angleB;
};