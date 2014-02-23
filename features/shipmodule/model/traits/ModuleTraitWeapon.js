model.ModuleTraitWeapon = function ModuleTraitWeapon(args)
{

	model.ModuleTrait.call(
		this,
		this.buildVariables(),
		args
	);
	
	this.weaponFactory = new model.WeaponFactory();
    this.name = 'weapon';
    this.label = 'Weapon';
    this.value = null;
};

model.ModuleTraitWeapon.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitWeapon.prototype.extend = function(module)
{
    module.weapon = this.weaponFactory.getWeapon(this.serialize(), module);
};

model.ModuleTraitWeapon.prototype.buildVariables = function()
{
    var variables = [].concat(this.getTargetStrategyVariables())
    	.concat(this.getRangeStrategyVariables())
    	.concat(this.getArcStrategyVarialbes())
    	.concat(this.getScatterVariables());

    return variables;
};

model.ModuleTraitWeapon.prototype.getArcStrategyVarialbes = function()
{
	return new model.TraitVariable(
		'weaponArc', 
		'Arc strategy',
		false,
		60
	);
};


model.ModuleTraitWeapon.prototype.getRangeStrategyVariables = function()
{
    var rangeStrategy = new model.TraitVariable(
		'rangeStrategy', 
		'Range strategy',
		 ['RangePenaltyStrategy', 'FixedRangeStrategy']);
		 
	return [
		rangeStrategy,
		new model.TraitVariable('rangePenalty', 'To hit penalty per hex', false, 1)
			.setCondition(function(){return rangeStrategy.get() == 'RangePenaltyStrategy';}),
		new model.TraitVariable('maxRange', 'Maximum range', false, 50)
			.setCondition(function(){return rangeStrategy.get() == 'FixedRangeStrategy';})
	];
};

model.ModuleTraitWeapon.prototype.getScatterVariables = function()
{
    return [
	    new model.TraitVariable(
			'baseScatter', 
			'Base Scatter in tiles',
			false,
			2),

	    new model.TraitVariable(
			'rangeScatter', 
			'Scatter modifier pre hex in tiles',
			false,
			1)
	];
};

model.ModuleTraitWeapon.prototype.getTargetStrategyVariables = function()
{
    return new model.TraitVariable(
		'targetStrategy', 
		'Target Strategy',
		 [
			'ShipTargetStrategy',
			//'ModuleTargetStrategy',
			//'HexTargetStrategy'
		]);
};

