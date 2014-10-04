model.ModuleTraitEnergyProducer = function ModuleTraitEnergyProducer(args)
{
	model.ModuleTrait.call(
		this, 
		new model.TraitVariable('amount', 'Amount of energy produced'),
		args
	);
	
    this.energyProduced = this.getVariable('amount');

    this.name = 'energyProducer';
    this.label = 'Energy Produced';
    this.value = null;
};

model.ModuleTraitEnergyProducer.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitEnergyProducer.prototype.extend = function(module)
{
    var self = this;

    module.isEnergyProducer = true;

    module.getEnergyProducer = function(){
        return new model.EnergyProducer(this.energyProduced);
    }.bind(this);
};