model.ModuleTraitThrustProducer = function ModuleTraitThrustProducer(args)
{
    this.thrustProduced = this.getArgsAsInt(args);

    this.name = 'thrustProducer';
    this.label = 'Thrust produced';
    this.value = null;
};

model.ModuleTraitThrustProducer.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitThrustProducer.prototype.extend = function(module)
{
    module.thrustProducer = this;
    this.module = module;
};

model.ModuleTraitThrustProducer.prototype.getThrustProduced = function()
{
    return this.thrustProduced;
};