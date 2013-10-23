model.ModuleTraitRequiresCrew = function ModuleTraitRequiresCrew(args)
{
    this.requiredCrew = this.getArgsAsInt(args);

    this.name = 'requiresCrew';
    this.label = 'Required Crew';
    this.value = null;
};

model.ModuleTraitRequiresCrew.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitRequiresCrew.prototype.extend = function(module)
{
    module.requiresCrew = this;
    this.module = module;
};

model.ModuleTraitRequiresCrew.prototype.getRequiredCrew = function()
{
    return this.requiredCrew;
};