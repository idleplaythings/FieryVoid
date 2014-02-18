model.ModuleTraitTurret = function ModuleTraitTurret(args)
{
	model.ModuleTrait.call(
		this, 
		new model.TraitVariable('turret', 'Turret'),
		args
	);
	
    this.crewProvided = this.getVariable('turret');

    this.name = 'turret';
    this.label = 'Turret';
    this.value = null;
};

model.ModuleTraitTurret.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitTurret.prototype.extend = function(module)
{
    module.turret = this;
};