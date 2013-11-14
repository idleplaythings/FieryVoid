model.ModuleTraitSensor = function ModuleTraitSensor(args)
{
    args = this.getArgsAsJson(args);

    this.name = 'sensor';
    this.label = 'Sensor';
    this.value = null;
    
    this.energySensor = args.energy || 0;
    this.massSensor = args.mass || 0;
    this.ftlSensor = args.ftl || 0;
    this.stackingPenalty = args.stacking || 0.1;
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
