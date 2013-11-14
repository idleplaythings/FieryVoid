model.PowerManagement = function PowerManagement(modules)
{
     this.powerStatuses = modules.map(function(module){
        return {module:module, status: null};
    });
    this.resolvePowerStatus();
};

model.PowerManagement.prototype.resolvePowerStatus = function()
{
    var energyProducers = this.powerStatuses.filter(
        function(status){
            return status.module.energyProducer;
        });

    var energyConsumers = this.powerStatuses.filter(
        function(status){
            return status.module.energyConsumer;
        });

    var totalEnergyProduced = energyProducers.reduce(
        function(value, status){
            return value + status.module.energyProducer.getProducedEnergy();
        },
        0
    );

    var totalEnergyConsumed = 0;

    energyConsumers.forEach(function(status){
        var energyConsumption = status.module.energyConsumer.getConsumedEnergy();
        if (totalEnergyProduced >= totalEnergyConsumed + energyConsumption)
        {
            status.status = new model.PowerStatusPowered(energyConsumption);
            totalEnergyConsumed += energyConsumption;
        }
        else
        {
            status.status = new model.PowerStatusOffline(energyConsumption);
        }
    }, this);

    var powerConsumptionUnassigned = totalEnergyConsumed;

    energyProducers.forEach(function(status){
        var powerOutput = status.module.energyProducer.getProducedEnergy();

        if (powerConsumptionUnassigned > powerOutput)
        {
            powerConsumptionUnassigned -= powerOutput;
            status.status = new model.PowerStatusPowerOutput(powerOutput, 0);
        }
        else
        {
            status.status = new model.PowerStatusPowerOutput(
                powerOutput, powerOutput - powerConsumptionUnassigned);
            powerConsumptionUnassigned = 0;
        }
    }, this);


};

model.PowerManagement.prototype.isPowered = function(module)
{
	var powerStatus = this.getPowerStatus(module);
	
	return powerStatus === null || powerStatus instanceof model.PowerStatusPowered;
};

model.PowerManagement.prototype.getPowerStatus = function(module)
{
    var candidate = this.powerStatuses.filter(function(status){return status.module == module});
    if (candidate.length == 0)
        return null;

    return candidate[0].status;
};
