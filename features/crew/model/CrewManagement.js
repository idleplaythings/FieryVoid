model.CrewManagement = function CrewManagement()
{
    this.modules = null;
};

model.CrewManagement.prototype.setModules = function(modules)
{
    this.modules = modules;
};

model.CrewManagement.prototype.getCrewRequired = function(module)
{
    if ( ! module.requiresCrew)
        return null;

    return module.requiresCrew.getRequiredCrew();
};
