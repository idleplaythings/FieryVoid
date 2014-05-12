model.ModuleFactory = function ModuleFactory(){};

model.ModuleFactory.prototype.unserialize = function(serialized)
{
  serialized.image = new model.ModuleImage(serialized.image);
  return new model.ModuleLayout(serialized);
};