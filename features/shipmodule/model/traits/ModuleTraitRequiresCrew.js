model.ModuleTraitRequiresCrew = function ModuleTraitRequiresCrew(args)
{
	model.ModuleTrait.call(
		this, 
		new model.TraitVariable('amount', 'Amount of crew required'),
		args
	);
	
    this.requiredCrew = this.getVariable('amount');

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
