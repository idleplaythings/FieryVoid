Factory = function Factory()
{
    this._registry = {};
};

Factory.prototype.add = function(key, value)
{
    this._registry[key] = value;
};

Factory.prototype.create = function(key)
{
    if (typeof this._registry[key] === 'function') {
        return this._registry[key].call(undefined);
    }

    return this._registry[key];
};