model.ModuleTraitWeapon = function ModuleTraitWeapon(args)
{
  //TODO: refactor so that moduleTraits come from factory, and this is dependency injected
  this._weaponFactory = dic.get('model.weapon.module.Factory');

	model.ModuleTrait.call(
		this,
		this.buildVariables(),
		args
	);

  this.name = 'weapon';
  this.label = 'Weapon';
  this.value = null;
};

model.ModuleTraitWeapon.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitWeapon.prototype.extend = function(module)
{
    module.isWeapon = true;

    module.getWeapon = function(){ 
      return this._weaponFactory.getWeapon(this.serialize(), module);
    }.bind(this);

    module.hasFireOrder = function(turn){
      return this._weaponStatus.hasFireOrder(turn, this._id);
    }.bind(module);

    module.getFireOrder = function(turn){
      return this._weaponStatus.getFireOrderByTurnAndWeaponId(turn, this._id);
    }.bind(module);

    module.addFireOrder = function(fireOrder){
      this._weaponStatus.addFireOrder(fireOrder);
    }.bind(module);

    module.removeFireOrder = function(turn){
      var fireOrder = this.getFireOrder(turn);

      if ( ! fireOrder){
          throw new Error("Weapon does not have a fire order to remove");
      }

      this._weaponStatus.removeFireOrder(fireOrder);
    }.bind(module);
};

model.ModuleTraitWeapon.prototype.buildVariables = function()
{
    var variables = []
    	.concat(this.getPossibleWeapons());
  

    return variables;
};

model.ModuleTraitWeapon.prototype.getPossibleWeapons = function(){
  return new model.TraitVariable(
    'weaponClass', 
    'Weapon',
    this._weaponFactory.getPossibleWeapons()
  );
};
