model.ModuleTrait = function ModuleTrait()
{
}

model.ModuleTrait.prototype.extend = function(obj)
{
    delete this.label;
    delete this.name;
    delete this.value;

    _.extend(obj, this);
}

model.ModuleTrait.prototype.getArgsAsInt = function(args)
{
    if ( ! args)
        return 0;

    var num = parseInt(this.args);
    if (num == "NaN")
    {
        console.log("Args: '"+args+"' is not a number");
        console.trace();
        return 0;
    }

    return num;
}

model.ModuleTrait.prototype.getArgsAsJson = function(args)
{
    try
    {
        return JSON.parse(args);
    }
    catch(err)
    {
        return {};
    }
}