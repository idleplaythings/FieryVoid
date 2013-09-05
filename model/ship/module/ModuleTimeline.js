model.ModuleTimeline = function ModuleTimeline()
{
    this._timeline = {};
};

model.ModuleTimeline.prototype.serialize = function()
{
    return this._timeline;
};

model.ModuleTimeline.prototype.deserialize = function(timeline)
{
    if ( ! timeline)
        this._timeline = {};
    else
        this._timeline = timeline;

    return this;
};

model.ModuleTimeline.prototype.getByName = function(time, name)
{
    if ( ! this._timeline[time])
        return null;

    for (var i in this._timeline[time])
    {
        var entry = this._timeline[time][i];
        if (entry.name === name)
            return entry;
    }

    return null;
};

model.ModuleTimeline.prototype.add = function(time, object)
{
    if ( ! this._timeline[time])
        this._timeline[time] = [object];
    else
        this._timeline[time].push(object);
};

model.ModuleTimeline.prototype.remove = function(time, object)
{
    if ( ! this._timeline[time])
        return;

    for (var i in this._timeline[time])
    {
        var removee = this._timeline[time][i];
        if (removee === object)
        {
            this._timeline[time].splice(i, 1);
            return;
        }
    }
};

model.ModuleTimeline.prototype.removeByName = function(time, name)
{
    if ( ! this._timeline[time])
        return;

    for (var i in this._timeline[time])
    {
        var removee = this._timeline[time][i];
        if (removee.name == name)
        {
            this._timeline[time].splice(i, 1);
            return;
        }
    }
};