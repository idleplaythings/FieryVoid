ObjectContainer = function ObjectContainer()
{
  this._object = null;
  this._dispatcher = new model.EventDispatcher();
};

ObjectContainer.prototype.onChange = function(callback){
  this._dispatcher.attach('onChange', callback);
  return callback;
};

ObjectContainer.prototype.removeListener = function(callback){
  this._dispatcher.detach('onChange', callback);
};

ObjectContainer.prototype.set = function(newObject)
{
  this._object = newObject;
  this._dispatcher.dispatch({name: 'onChange', payload: this._object});
};

ObjectContainer.prototype.get = function()
{
  return this._object;
};