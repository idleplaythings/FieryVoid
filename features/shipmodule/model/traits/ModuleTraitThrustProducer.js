model.ModuleTraitThrustProducer = function ModuleTraitThrustProducer(args)
{
	model.ModuleTrait.call(
		this, 
		new model.TraitVariable('amount', 'Amount of thrust produced'),
		args
	);
	
    this.thrustProduced = this.getVariable('amount');

    this.name = 'thrustProducer';
    this.label = 'Thrust produced';
    this.value = null;
};

model.ModuleTraitThrustProducer.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitThrustProducer.prototype.extend = function(module)
{
    module.isThrustProducer = true;
    module.getThrustProducer = function(){
        return new model.movement.ThrustProducer(this.thrustProduced);
    }.bind(this);
};
