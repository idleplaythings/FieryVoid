model.ModuleLayoutRepository = function(moduleFactory){
  this._moduleFactory = moduleFactory;
}

model.ModuleLayoutRepository.prototype.getModuleLayout = function(id){
  var doc = ModuleLayouts.findOne({_id: id});

  if ( ! doc)
    return null;
  
  return this._moduleFactory.unserialize(doc);
};

model.ModuleLayoutRepository.prototype.getModuleLayouts = function(findCriteria){
  if ( ! findCriteria)
    findCriteria = {};

  return ModuleLayouts.find(findCriteria).fetch().map(this._moduleFactory.unserialize);
};

model.ModuleLayoutRepository.prototype.getReactiveModuleLayoout = function(id, callback)
{
  var self = this;

  return Deps.autorun(function(){
    var doc = ModuleLayouts.findOne({_id: id});
    
    if (! doc)
      return;

    var moduleLayout = self._moduleFactory.unserialize(doc);
    callback(moduleLayout);
  });
};