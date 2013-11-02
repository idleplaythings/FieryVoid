model.ThrustManagement = function ThrustManagement(modules)
{
    this.modules = modules;
};

model.ThrustManagement.prototype.getThrustProduced= function(module)
{
    if ( ! module.thrustProducer)
        return null;

    return module.thrustProducer.getThrustProduced();
};
