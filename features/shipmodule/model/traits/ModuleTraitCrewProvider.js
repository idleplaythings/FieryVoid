model.ModuleTraitCrewProvider = function ModuleTraitCrewProvider(args)
{
	model.ModuleTrait.call(
		this, 
		new model.TraitVariable('amount', 'Amount of crew provided'),
		args
	);
	
    this.crewProvided = this.getVariable('amount');

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
