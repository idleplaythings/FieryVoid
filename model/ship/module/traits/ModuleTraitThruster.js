model.ModuleTraitThruster = function ModuleTraitThruster(args)
{
    this.name = 'thruster';
    this.label = 'Thruster';
    this.value = null;
    args = this.getArgsAsJson(args);

    this.efficiency = args.efficiency || 0;
    this.maxChannel = args.max || 0;
    this.maxOverThrust = args.over || 0;
    this.effect = args.effect || null;
    this.module = null;
};

model.ModuleTraitThruster.prototype = Object.create(model.ModuleTrait.prototype);


model.ModuleTraitThruster.prototype.getTotalThrusterUsageAtTime = function(time)
{
    var usage = this.module.timeline.getByName(time, 'thrusterUsage');
    if (! usage)
        return 0;

    return usage.entry.normal + (usage.entry.rotation * 0.5);
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

model.ModuleTraitThruster.prototype.getBaseThrustVector = function()
{
    switch(this.module.direction)
    {
        case 1: return new Vector2(-1, 0);
        case 2: return new Vector2(0, -1);
        case 3: return new Vector2(0, 1);
        case 4: return new Vector2(1, 0);
    }
};

model.ModuleTraitThruster.prototype.getMaxChannel = function()
{
    return this.maxChannel;
};

model.ModuleTraitThruster.prototype.getThrustEfficiency = function()
{
    //If the truster is damaged, modify efficiency here
    return this.efficiency * 20;
};

model.ModuleTraitThruster.prototype.getThrustForceVector = function()
{
    var base = this.getBaseThrustVector();
    var efficiency = this.getThrustEfficiency();
    return base.multiplyScalar(efficiency);
};
