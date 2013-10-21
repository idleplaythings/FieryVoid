model.ModuleTraitEngine = function ModuleTraitEngine(args)
{
    this.thrustProduced = this.getArgsAsInt(args);

    this.name = 'engine';
    this.label = 'Engine (thrust produced:Int)';
    this.value = null;
};

model.ModuleTraitEngine.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitEngine.prototype.getThrustProduced = function()
{
    return this.thrustProduced;
};