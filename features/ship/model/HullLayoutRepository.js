model.HullLayoutRepository = function(){
  
};

model.HullLayoutRepository.prototype.getHullLayout = function(id){
  return HullLayouts.findOne({_id: id});
};

model.HullLayoutRepository.prototype.getHullLayouts = function(){
  return HullLayouts.find({}).fetch();
};

model.HullLayoutRepository.prototype.getReactiveHullLayoutForSessionKey = function(sessionKey, callback){
    var self = this;
    return Deps.autorun(function(){
        var hullLayout = HullLayouts.findOne(
            {_id: Session.get(sessionKey)});
        
        if (! hullLayout)
            return;

        callback(hullLayout);
    });
};