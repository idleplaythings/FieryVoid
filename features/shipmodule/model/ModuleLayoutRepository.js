model.ModuleLayoutRepository = function(moduleFactory){
  this._moduleFactory = moduleFactory;
}

model.ModuleLayoutRepository.prototype.getModuleLayout = function(id){
  var doc = ModuleLayouts.findOne({_id: id});

  if ( ! doc)
    return null;
  
  return this._moduleFactory.unserialize(doc);
};

model.ModuleLayoutRepository.prototype.getModuleLayouts = function(){
  return ModuleLayouts.find({}).fetch().map(this._moduleFactory.unserialize);
};