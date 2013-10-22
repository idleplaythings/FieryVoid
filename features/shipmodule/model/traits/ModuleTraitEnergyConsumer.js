model.ModuleTraitEnergyConsumer = function ModuleTraitEnergyConsumer(args)
{
    this.energyConsumed = this.getArgsAsInt(args);
    this.name = 'energyConsumer';
    this.label = 'Energy Consumer';
    this.value = null;
    console.log(this.energyConsumed);
};

model.ModuleTraitEnergyConsumer.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitEnergyConsumer.prototype.extend = function(module)
{
    module.energyConsumer = this;
    this.module = module;
};

model.ModuleTraitEnergyConsumer.prototype.getConsumedEnergy = function()
{
    return this.energyConsumed;
};