model.power.ShipPowerStatus = function ShipPowerStatus(moduleLayouts)
{
	this.moduleLayouts = moduleLayouts;
};

model.power.ShipPowerStatus.prototype.resolvePowerStatus = function()
{
	var powerStatuses = this.moduleLayouts.map(function(moduleLayout){
        return {moduleLayout:moduleLayout, status: null};
    });

    var energyProducers = powerStatuses.filter(
        function(status){
            return status.moduleLayout.energyProducer;
        });

    var energyConsumers = powerStatuses.filter(
        function(status){
            return status.moduleLayout.energyConsumer;
        });

    var totalEnergyProduced = energyProducers.reduce(
        function(value, status){
            return value + status.moduleLayout.energyProducer.getProducedEnergy();
        },
        0
    );

    var totalEnergyConsumed = 0;

    energyConsumers.forEach(function(status){
        var energyConsumption = status.moduleLayout.energyConsumer.getConsumedEnergy();
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
        var powerOutput = status.moduleLayout.energyProducer.getProducedEnergy();

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

    return powerStatuses;
};

model.power.ShipPowerStatus.prototype.getStatusSymbols = function(module)
{
	var moduleLayout = module instanceof model.ModuleLayout ? module : module.getModuleLayout();
	var status = this.getPowerStatus(moduleLayout);

    if (status !== null)
        return new model.ShipStatusSymbolPower(status);

    return [];
};

model.power.ShipPowerStatus.prototype.isPowered = function(moduleLayout)
{
	var powerStatus = this.getPowerStatus(moduleLayout);
	
	return powerStatus === null || powerStatus instanceof model.PowerStatusPowered;
};

model.power.ShipPowerStatus.prototype.getPowerStatus = function(moduleLayout)
{
    var candidate = this.resolvePowerStatus().filter(function(status){return status.moduleLayout == moduleLayout});
    if (candidate.length == 0)
        return null;

    return candidate[0].status;
};

model.power.ShipPowerStatus.prototype.getActionButtons = function()
{
    return [];
};