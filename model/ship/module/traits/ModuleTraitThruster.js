model.ModuleTraitThruster = function ModuleTraitThruster(args)
{
    this.name = 'thruster';
    this.label = 'Thruster';
    this.value = null;
    args = this.getArgsAsJson(args);

    this.efficiency = args.efficiency || 0;
    this.maxChannel = args.max || 0;
    this.maxOverThrust = args.over || 0;
    this.effect = null;
    this.module = null;
};

model.ModuleTraitThruster.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitThruster.prototype.extend = function(obj)
{
    obj.thruster = this;
    this.effect = new model.SpriteEffectThrusterGlow(obj);
    obj.registerAnimator(this.effect);
};

model.ModuleTraitThruster.prototype.getBaseThrustVector = function()
{
    switch(this.direction)
    {
        case 1: return Vector2(-1, 0);
        case 2: return Vector2(0, 1);
        case 3: return Vector2(0, -1);
        case 4: return Vector2(1, 0);
    }
};

model.ModuleTraitThruster.prototype.getMaxChannel = function()
{
    return this.maxChannel;
};

model.ModuleTraitThruster.prototype.getThrustEfficiency = function()
{
    //If the truster is damaged, modify efficiency here
    return this.thruster.efficiency;
};

model.ModuleTraitThruster.prototype.getThrustForceVector = function()
{
    var base = this.getBaseThrustVector();
    var efficiency = this.getThrustEfficiency();
    return base.multiplyScalar(efficiency);
};
