dic.register('model.EffectManager', function(dic) {
    return new model.EffectManager(
        dic.get('model.GameAnimationLoop'),
        dic.get("model.GameScene"),
        dic.get("model.EventDispatcher"),
        null,
        {}
    );
}, {shared: true});


dic.register('model.EffectManagerFactory', function(dic) {
  return function(target, args){

    if ( ! args)
      args = {};
    
    return new model.EffectManager(
        dic.get('model.GameAnimationLoop'),
        dic.get("model.GameScene"),
        dic.get("model.EventDispatcher"),
        target,
        args
    );
  };
}, {shared: true});