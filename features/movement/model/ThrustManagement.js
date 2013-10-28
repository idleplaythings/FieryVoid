model.ThrustManagement = function ThrustManagement()
{
    this.modules = null;
};

model.ThrustManagement.prototype.setModules = function(modules)
{
    this.modules = modules;
};

model.ThrustManagement.prototype.getThrustProduced= function(module)
{
    if ( ! module.thrustProducer)
        return null;

    return module.thrustProducer.getThrustProduced();
};
