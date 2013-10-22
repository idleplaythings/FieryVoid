model.PowerManagement = function PowerManagement()
{
    this.modules = null;
};

model.PowerManagement.prototype.setModules = function(modules)
{
    this.modules = modules;
};

model.PowerManagement.prototype.getPowerGenerated= function(module)
{
    if ( ! module.energyProducer)
        return null;

    return module.energyProducer.getProducedEnergy();
};

model.PowerManagement.prototype.getPowerConsumed = function(module)
{
    if ( ! module.energyConsumer)
        return null;

    return module.energyConsumer.getConsumedEnergy();
};

model.PowerManagement.prototype.getTotalPowerGenerated = function(modules)
{

};

model.PowerManagement.prototype.getTotalPowerConsumed = function(modules)
{

};