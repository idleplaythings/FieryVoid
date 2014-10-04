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
    if (typeof this._registry[key] === 'undefined')
        throw new Error("Trying to create unrecognized product, key: '"+key+"'");

    if (typeof this._registry[key] === 'function') {
        return this._registry[key].call(undefined);
    }

    return this._registry[key];
};

Factory.prototype.createAll = function(){
    return Object.keys(this._registry).map(function(key){
        return this.create(key);
    }.bind(this))
};

Factory.createFactoryFromTags = function (tag)
{
	var factory = new Factory();

    var classes = dic.getTagged(tag);

    classes.forEach(function(modelName) {
        factory.add(modelName, function() {
            return dic.get(modelName);
        });
    });

    return factory;
};