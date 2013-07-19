model.ModuleTraitThrusterGlow = function ModuleTraitThrusterGlow(args)
{
    this.name = 'thrusterGlow';
    this.label = 'Thruster glow effect';
    this.value = null;

};

model.ModuleTraitThrusterGlow.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitThrusterGlow.prototype.extend = function(obj)
{
    model.ModuleTrait.prototype.extend.call(this, obj);
    obj.registerAnimator(new model.SpriteEffectThrusterGlow(obj));
};

