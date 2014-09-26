model.ModuleTraitThruster = function ModuleTraitThruster(args)
{
    model.ModuleTrait.call(
        this,
        [
            new model.TraitVariable('efficiency', 'Thruster efficiency'),
            new model.TraitVariable('max', 'Max amount of thrust that can be safely channeled'),
            new model.TraitVariable('over', 'Max amount of over thrust'),
        ],
        args
    );
    
    this.efficiency = this.getVariable('efficiency') || 1.0;
    this.maxSafeChannel = this.getVariable('max') || 1;
    this.maxOverThrust = this.getVariable('over') || 0;

    this.name = 'thruster';
    this.label = 'Thruster';
    this.value = null;
};

model.ModuleTraitThruster.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitThruster.prototype.extend = function(module)
{
    var self = this;

    module.isThruster = true;

    module.getThruster = function(){
        return new model.movement.Thruster({
            moduleId: module._id,
            direction: module.getDirection(),
            efficiency: self.efficiency,
            max: self.maxSafeChannel,
            over: self.maxOverThrust
        });
    }.bind(module);
};

/*

model.ModuleTraitThruster.prototype.getTotalThrusterUsageAtTime = function(time)
{
    var usage = this.module.timeline.getByName(time, 'thrusterUsage');
    if (! usage)
        return 0;

    return usage.entry.normal;
};

model.ModuleTraitThruster.prototype.deleteThrusterUsage = function(time)
{
    this.module.timeline.removeAfter(time, 'thrusterUsage');
};


model.ModuleTraitThruster.prototype.extend = function(obj)
{
    obj.thruster = this;
    this.module = obj;
    this.effect = new model.SpriteEffectThrusterGlow(obj, this.effect);
    obj.registerAnimator(this.effect);
};

model.ModuleTraitThruster.prototype.getThrustDirection = function()
{
    switch(this.module.direction)
    {
        case 1: return 0;
        case 2: return 270;
        case 3: return 90;
        case 4: return 180;
    }
};

model.ModuleTraitThruster.prototype.getMaxChannel = function()
{
    return this.maxChannel;
};

model.ModuleTraitThruster.prototype.getThrustForceVector = function()
{
    var base = this.getBaseThrustVector();
    var efficiency = this.getThrustEfficiency();
    return base.multiplyScalar(efficiency);
};
*/
