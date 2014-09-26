if ( typeof model === 'undefined')
    model = {};

if ( typeof model.weapon === 'undefined')
  model.weapon = {};

if ( typeof model.weapon.module === 'undefined')
  model.weapon.module = {};

model.weapon.module.Base = function Weapon()
{
	this._arcs = null;
  this._module = null;
}

model.weapon.module.Base.prototype.init = function(module){
  this._module = module;
};

model.weapon.module.Base.prototype.getArcs = function()
{
	return this._arcs;
};