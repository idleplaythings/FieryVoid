ObjectContainer = function ObjectContainer()
{
  this._object = null;
};

ObjectContainer.prototype.set = function(newObject)
{
  this._object = newObject;
};

ObjectContainer.prototype.get = function()
{
  return this._object;
};