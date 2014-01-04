model.ThrustManagement = function ThrustManagement(modules)
{
    this.modules = modules;
};

model.ThrustManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.ThrustManagement.prototype.getThrustProduced = function(module)
{
    if ( ! module.thrustProducer)
        return null;

    return module.thrustProducer.getThrustProduced();
};

model.ThrustManagement.prototype.getActionButtons = function()
{
    return [];
};
