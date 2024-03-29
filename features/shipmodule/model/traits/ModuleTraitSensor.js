model.ModuleTraitSensor = function ModuleTraitSensor(args)
{
	model.ModuleTrait.call(
		this, 
		[
			new model.TraitVariable('energy', 'Amount of crew required'),
			new model.TraitVariable('mass', 'Amount of crew required'),
			new model.TraitVariable('ftl', 'Amount of crew required'),
			new model.TraitVariable('stacking', 'Amount of crew required'),
		],
		args
	);

    this.name = 'sensor';
    this.label = 'Sensor';
    this.value = null;
    
    this.energySensor = this.getVariable('energy') || 0;
    this.massSensor = this.getVariable('mass') || 0;
    this.ftlSensor = this.getVariable('ftl') || 0;
    
    this.stackingPenalty = this.getVariable('stacking') || 0.1;
};

model.ModuleTraitSensor.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitSensor.prototype.extend = function(module)
{
    module.sensor = this;
    this.module = module;
};

model.ModuleTraitSensor.prototype.getSensorEfficiency = function(crew, power, amountOfSensors)
{
    if ( ! crew.isCrewed(this.module) || ! power.isPowered(this.module))
    {
		return {energy:0, mass:0, ftl:0};
	}
	
	var stacking = this.getStackingPenalty(amountOfSensors);
	
	return {
		energy: Math.floor(this.energySensor * stacking),
		mass: Math.floor(this.massSensor * stacking),
		ftl: Math.floor(this.ftlSensor * stacking)
	};
};

model.ModuleTraitSensor.prototype.getStackingPenalty = function(amountOfSensors)
{
	var penalty = this.stackingPenalty * (amountOfSensors - 1);
	if (penalty > 0.9)
		penalty = 0.9;
		
	return 1 - penalty;
};
