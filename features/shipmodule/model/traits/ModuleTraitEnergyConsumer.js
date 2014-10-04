model.ModuleTraitEnergyConsumer = function ModuleTraitEnergyConsumer(args)
{
	model.ModuleTrait.call(
		this, 
		new model.TraitVariable('amount', 'Amount of energy consumed'),
		args
	);
	
    this.energyConsumed = this.getVariable('amount');
    this.name = 'energyConsumer';
    this.label = 'Energy Consumer';
    this.value = null;
};

model.ModuleTraitEnergyConsumer.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitEnergyConsumer.prototype.extend = function(module)
{
    module.isEnergyConsumer = true;
    module.getEnergyConsumer = function(){
        return new model.EnergyConsumer(this.energyConsumed);
    }.bind(this);
};