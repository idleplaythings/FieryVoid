if ( typeof model === 'undefined')
    model = {};

model.Timeline = function Timeline(id, storage, dispatcher)
{
    this._id = id;

    this._entries = [];
    this._storage = storage;

    this.dispatcher = dispatcher;
    this.loaded = false;
};

model.Timeline.prototype.ensureLoaded = function()
{
    if ( ! this.loaded)
    {
		this._entries = this._storage.load(this._id);
        this.loaded = true;
    }
};

model.Timeline.prototype.getId = function()
{
    return this._id;
};

model.Timeline.prototype.reload = function()
{

	this.persist();
	this.loaded = false;
	this.ensureLoaded();

    this.dispatcher.dispatch({name:'timelineReload'});
};

model.Timeline.prototype.observeReload = function(callback)
{
    this.dispatcher.attach('timelineReload', callback);
};

model.Timeline.prototype.persist = function()
{
	var entries = this._entries.filter(function(entry){
		return entry.needsSaving() || entry.needsRemoving();
	});
	
	if (entries.length == 0)
		return;
		
    this._storage.persist(entries, this._id);
    
    this._entries = this._entries.filter(function(entry){
		return ! entry.isRemoved(); 
	});
   
    return this;
};

model.Timeline.prototype.add = function(name, payload)
{
    var entry = new model.TimelineEntry(name, payload);
    this._entries.push(entry);
};

/*
model.Timeline.prototype.getAt = function(time, list)
{
    this.ensureLoaded();

    if (! list)
        list = this._past.concat(this._future);

    var entry = list.filter(function(entry){
        return entry.time == time
    });

    if (entry.length > 0)
        return entry[0];

    return null;
};

model.Timeline.prototype.getByName = function(time, name, list)
{
    this.ensureLoaded();

    if (! list)
        list = this._past.concat(this._future);

    var candidates = list.filter(function(entry){
        return (entry.name == name && entry.time == time);
    });

    if (candidates.length > 0)
        return candidates[0];

    return null;
};

model.Timeline.prototype.addToPast = function(time, name, object)
{
    this.ensureLoaded();

    if (Meteor.isClient)
        return;

    this._past.push({time: time, name: name, entry: object});
};

model.Timeline.prototype.add = function(time, name, object)
{
    this.ensureLoaded();

    if (Meteor.isClient)
    {
        this._future.push({time: time, name: name, entry: object});
    }
    else
    {
        this._past.push({time: time, name: name, entry: object});
    }
};

model.Timeline.prototype.update = function(time, name, object)
{
    this.ensureLoaded();

    var entry = null;
    if (Meteor.isClient)
    {
        entry = this.getByName(time, name, this._future);
    }
    else
    {
        entry = this.getByName(time, name, this._past);
    }

    if (entry)
        entry.entry = object;
};

model.Timeline.prototype.clear = function()
{
    if (Meteor.isClient)
    {
        this._future = [];
    }
    else
    {
        this._past = [];
    }
};

model.Timeline.prototype.remove = function(time, name)
{
    this.ensureLoaded();

    if (Meteor.isClient)
    {
        this._future = this._removeFrom(time, false, name, this._future);
    }
    else
    {
        this._past = this._removeFrom(time, false, name, this._past);
    }
};

model.Timeline.prototype.removeFromFuture = function(time, name)
{

    if (Meteor.isClient)
        return;

    this.ensureLoaded();

    this._future = this._removeFrom(time, false, name, this._future);
};

model.Timeline.prototype.removeFromPast = function(time, name)
{
    if (Meteor.isClient)
        return;

    this.ensureLoaded();

    this._future = this._removeFrom(time, false, name, this._past);
};

model.Timeline.prototype._removeFrom = function(startTime, endTime, name, list)
{
    for (var i = list.length-1; i >= 0; i--)
    {
        var removee = list[i];

        if (removee.name == name)
        {
            if (removee.time >= startTime)
            {
                if (! endTime && removee.time == startTime)
                    list.splice(i, 1);
                else if (endTime === true)
                    list.splice(i, 1);
                else if (removee.time <= endTime)
                    list.splice(i, 1);
            }
        }
    }

    return list;
};

model.Timeline.prototype.removeAfter = function(time, name)
{
    this.ensureLoaded();

    if (Meteor.isClient)
    {
        this._future = this._removeFrom(time, true, name, this._future);
    }
    else
    {
        this._past = this._removeFrom(time, true, name, this._past);
    }
};

*/

model.Timeline.prototype.get = function()
{
    this.ensureLoaded();
    return this._entries.filter(function(entry){
		return ! entry.needsRemoving();
	});
};

model.Timeline.prototype.map = function(callback, context)
{
    return this.get().map(callback, context);
};

model.Timeline.prototype.filter = function(callback, context)
{
    return this.get().filter(callback, context);
};
