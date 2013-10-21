model.ModuleTraitEnergyConsumer = function ModuleTraitEnergyConsumer(args)
{
    this.energyConsumed = this.getArgsAsInt(args);

    this.name = 'energyConsumed';
    this.label = 'Energy Consumed';
    this.value = null;
};

model.ModuleTraitEnergyConsumer.prototype = Object.create(model.ModuleTrait.prototype);
