model.ModuleTraitCrewProvider = function ModuleTraitCrewProvider(args)
{
    this.crewProvided = this.getArgsAsInt(args);

    this.name = 'crewProvider';
    this.label = 'Provides Crew';
    this.value = null;
};

model.ModuleTraitCrewProvider.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitCrewProvider.prototype.extend = function(module)
{
    module.crewProvider = this;
    this.module = module;
};

model.ModuleTraitCrewProvider.prototype.getProvidedCrew = function()
{
    return this.crewProvided;
};