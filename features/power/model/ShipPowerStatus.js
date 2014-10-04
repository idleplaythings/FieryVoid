model.power.ShipPowerStatus = function ShipPowerStatus(timeline, ship){
  this._timeline = timeline;
  this._ship = ship;
};

model.power.ShipPowerStatus.prototype.resolvePowerStatus = function()
{
  var powerStatuses = this._ship.getModules().map(function(module){
        return {module:module, status: null};
    });

    var energyProducers = powerStatuses.filter(
        function(status){
            return status.module.isEnergyProducer;
        });

    var energyConsumers = powerStatuses.filter(
        function(status){
            return status.module.isEnergyConsumer;
        });

    var totalEnergyProduced = energyProducers.reduce(
        function(value, status){
            return value + status.module.getEnergyProducer().getProducedEnergy();
        },
        0
    );

    var totalEnergyConsumed = 0;

    energyConsumers.forEach(function(status){
        var energyConsumption = status.module.getEnergyConsumer().getConsumedEnergy();
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
        var powerOutput = status.module.getEnergyProducer().getProducedEnergy();

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

model.power.ShipPowerStatus.prototype.getPowerStatus = function(module)
{
    var candidate = this.resolvePowerStatus().filter(function(status){
        return status.module._id == module._id;
    });
    if (candidate.length == 0)
        return null;

    return candidate[0].status;
};