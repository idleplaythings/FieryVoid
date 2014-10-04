model.ModuleTraitScanner = function ModuleTraitScanner(args)
{
  model.ModuleTrait.call(
    this,
    [
    new model.TraitVariable('amount', 'Amount of EW produced'),
    ],
    args
    );

  this.amount = this.getVariable('amount') || 1.0;

  this.name = 'scanner';
  this.label = 'Scanner';
  this.value = null;
};

model.ModuleTraitScanner.prototype = Object.create(model.ModuleTrait.prototype);

model.ModuleTraitScanner.prototype.extend = function(module)
{
  var self = this;

  module.isScanner = true;

  module.getScanner = function(){
    return new model.ew.Scanner(
      module._ewStatus,
      this.amount
    );
  }.bind(this);
};
