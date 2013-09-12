model.Timeline = function Timeline(id, gamestate, storage)
{
    this.gameState = gamestate;
    this._id = id;
    this._timeline = {};
    this.storage = storage;
};

model.Timeline.prototype.serialize = function()
{
    return this._timeline;
};

model.Timeline.prototype.deserialize = function(timeline)
{
    if ( ! timeline)
        this._timeline = {};
    else
        this._timeline = timeline;

    return this;
};

model.Timeline.prototype.getByName = function(time, name)
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

model.Timeline.prototype.add = function(time, object)
{
    if ( ! this._timeline[time])
        this._timeline[time] = [object];
    else
        this._timeline[time].push(object);
};

model.Timeline.prototype.remove = function(time, object)
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

model.Timeline.prototype.removeByName = function(time, name)
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