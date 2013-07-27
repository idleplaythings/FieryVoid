model.ModuleTraitEnergyProducer = function ModuleTraitEnergyProducer(args)
{
    this.energyProduced = this.getArgsAsInt(args);

    this.name = 'energyProducer';
    this.label = 'Energy Produced';
    this.value = null;
};

model.ModuleTraitEnergyProducer.prototype = Object.create(model.ModuleTrait.prototype);