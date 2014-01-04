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
    var variables = [];
    variables = variables.concat(this.getTargetStrategyVariables());
    variables = variables.concat(this.getRangeStrategyVariables());
    return variables;
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

